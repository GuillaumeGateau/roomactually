<template>
  <div class="home">
    <!-- Hero Search Section -->
    <section class="hero-search">
      <div class="search-container">
        <h1 class="hero-title">Find your perfect student accommodation</h1>
        <form class="search-form" @submit.prevent="handleSearch">
          <div class="search-inputs-wrapper">
            <div class="search-inputs">
              <div class="input-wrapper">
                <input
                  v-model="search.city"
                  type="text"
                  placeholder="Search for a city in Europe..."
                  class="search-input"
                  @input="handleInput"
                  @keydown="handleKeydown"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  autocomplete="off"
                />
                <ul 
                  v-if="showSuggestions && suggestions.length > 0" 
                  class="suggestions-list"
                  @mousedown.prevent
                >
                  <li
                    v-for="(suggestion, index) in suggestions"
                    :key="`${suggestion.name}-${suggestion.country}`"
                    :class="['suggestion-item', { 'highlighted': index === selectedIndex }]"
                    @mouseenter="selectedIndex = index"
                    @click="selectSuggestion(suggestion)"
                  >
                    <span class="suggestion-city">{{ suggestion.name }}</span>
                    <span class="suggestion-country">{{ suggestion.country }}</span>
                    <span v-if="suggestion.isEuropean" class="european-badge">EU</span>
                  </li>
                </ul>
              </div>
              <button type="submit" class="search-button">Search</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { searchCities } from '../data/cities.js'

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const search = ref({
      city: ''
    })
    const suggestions = ref([])
    const selectedIndex = ref(-1)
    const showSuggestions = ref(false)

    const handleInput = (event) => {
      const query = event.target.value
      if (query.trim().length > 0) {
        suggestions.value = searchCities(query, 8)
        showSuggestions.value = suggestions.value.length > 0
        selectedIndex.value = -1
      } else {
        suggestions.value = []
        showSuggestions.value = false
        selectedIndex.value = -1
      }
    }

    const handleFocus = () => {
      if (suggestions.value.length > 0) {
        showSuggestions.value = true
      }
    }

    const handleBlur = () => {
      // Delay hiding suggestions to allow click events to fire
      // @mousedown.prevent on suggestions list prevents blur before click
      setTimeout(() => {
        showSuggestions.value = false
        selectedIndex.value = -1
      }, 200)
    }

    const handleKeydown = (event) => {
      if (!showSuggestions.value || suggestions.value.length === 0) {
        if (event.key === 'Enter') {
          handleSearch()
        }
        return
      }

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          selectedIndex.value = (selectedIndex.value + 1) % suggestions.value.length
          break
        case 'ArrowUp':
          event.preventDefault()
          selectedIndex.value = selectedIndex.value <= 0 
            ? suggestions.value.length - 1 
            : selectedIndex.value - 1
          break
        case 'Enter':
          event.preventDefault()
          if (selectedIndex.value >= 0 && selectedIndex.value < suggestions.value.length) {
            selectSuggestion(suggestions.value[selectedIndex.value])
          } else {
            handleSearch()
          }
          break
        case 'Escape':
          showSuggestions.value = false
          selectedIndex.value = -1
          break
      }
    }

    const selectSuggestion = (suggestion) => {
      search.value.city = suggestion.name
      showSuggestions.value = false
      selectedIndex.value = -1
      handleSearch()
    }

    const handleSearch = () => {
      if (search.value.city.trim()) {
        showSuggestions.value = false
        router.push({ path: '/results', query: { city: search.value.city } })
      }
    }

    return {
      search,
      suggestions,
      selectedIndex,
      showSuggestions,
      handleInput,
      handleFocus,
      handleBlur,
      handleKeydown,
      selectSuggestion,
      handleSearch
    }
  }
}
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

/* Hero Search Section */
.hero-search {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url('/paris-background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 var(--spacing-xl) 15vh;
  box-sizing: border-box;
}

.search-container {
  width: 100%;
  max-width: 800px;
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
}

.hero-title {
  font-size: var(--font-size-2xl);
  color: var(--color-text-dark);
  text-align: center;
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  letter-spacing: -0.02em;
}

.search-form {
  width: 100%;
}

.search-inputs-wrapper {
  position: relative;
}

.search-inputs {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-sm);
  background: var(--color-white);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.input-wrapper {
  position: relative;
}

.search-input {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid var(--color-light-grey);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  transition: border-color var(--transition-base);
  background: var(--color-white);
  box-sizing: border-box;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary-blue);
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: var(--spacing-xs);
  background: var(--color-white);
  border: 1px solid var(--color-light-grey);
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: var(--spacing-xs) 0;
  max-height: 320px;
  overflow-y: auto;
  z-index: 1000;
  margin-left: var(--spacing-sm);
  margin-right: var(--spacing-sm);
}

.suggestion-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  cursor: pointer;
  transition: background-color var(--transition-base);
  gap: var(--spacing-sm);
}

.suggestion-item:hover,
.suggestion-item.highlighted {
  background-color: var(--color-light-grey);
}

.suggestion-city {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-dark);
  flex: 1;
}

.suggestion-country {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-left: auto;
}

.european-badge {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  padding: 2px 6px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.search-button {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: opacity var(--transition-base);
  white-space: nowrap;
}

.search-button:hover {
  opacity: 0.9;
}

/* Features Section */
.features-section {
  padding: var(--spacing-5xl) var(--spacing-xl);
  background: var(--color-white);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-4xl);
}

.feature-card {
  background: var(--color-white);
  padding: 0;
  text-align: left;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-xl);
}

.feature-card h2 {
  color: var(--color-text-dark);
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-bold);
}

.feature-card h3 {
  color: var(--color-text-dark);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-relaxed);
}

.feature-card ul {
  list-style: none;
  margin: 0 0 var(--spacing-xl) 0;
  padding: 0;
}

.feature-card ul li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-xl);
  position: relative;
  color: var(--color-text-dark);
  line-height: var(--line-height-relaxed);
}

.feature-card ul li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary-blue);
  font-size: var(--font-size-xl);
}

.feature-link {
  color: var(--color-primary-blue);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: opacity var(--transition-base);
}

.feature-link:hover {
  opacity: 0.7;
}

/* Solutions Section */
.solutions-section {
  padding: var(--spacing-5xl) var(--spacing-xl);
  background: var(--color-light-grey);
}

.section-title {
  text-align: center;
  color: var(--color-text-dark);
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-bold);
}

.section-subtitle {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-4xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-3xl);
}

.solution-item {
  background: var(--color-white);
  padding: var(--spacing-3xl);
  border-radius: var(--radius-md);
}

.solution-item h3 {
  color: var(--color-text-dark);
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-semibold);
}

.solution-item ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.solution-item ul li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-xl);
  position: relative;
  color: var(--color-text-dark);
  line-height: var(--line-height-relaxed);
}

.solution-item ul li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary-blue);
  font-size: var(--font-size-xl);
}

/* Students Section */
.students-section {
  padding: var(--spacing-5xl) var(--spacing-xl);
  background: var(--color-white);
  text-align: center;
}

/* Landlords Section */
.landlords-section {
  padding: var(--spacing-5xl) var(--spacing-xl);
  background: var(--color-white);
}

.landlords-content {
  max-width: 900px;
  margin: var(--spacing-4xl) auto 0;
}

.landlords-block {
  margin-bottom: var(--spacing-4xl);
}

.landlords-block:last-child {
  margin-bottom: 0;
}

.landlords-block h3 {
  color: var(--color-text-dark);
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-semibold);
}

.landlords-block ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.landlords-block ul li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-xl);
  position: relative;
  color: var(--color-text-dark);
  line-height: var(--line-height-relaxed);
}

.landlords-block ul li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary-blue);
  font-size: var(--font-size-xl);
}

.landlords-block p {
  color: var(--color-text-dark);
  line-height: var(--line-height-relaxed);
}

/* About Section */
.about-section {
  padding: var(--spacing-5xl) var(--spacing-xl);
  background: var(--color-light-grey);
  text-align: center;
}

.about-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-loose);
  max-width: 900px;
  margin: var(--spacing-4xl) auto 0;
  color: var(--color-text-dark);
}

/* Contact Section */
.contact-section {
  padding: var(--spacing-5xl) var(--spacing-xl);
  background: var(--color-white);
  text-align: center;
}

.contact-intro {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-dark);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.help-list {
  margin: var(--spacing-3xl) auto;
  padding-left: var(--spacing-xl);
  color: var(--color-text-dark);
  max-width: 700px;
  text-align: left;
}

.help-list li {
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-relaxed);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-4xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.form-input,
.form-textarea {
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid var(--color-light-grey);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  transition: border-color var(--transition-base);
  background: var(--color-white);
  width: 100%;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary-blue);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: opacity var(--transition-base);
  margin-top: var(--spacing-sm);
  align-self: flex-start;
}

.form-submit:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-search {
    height: 100%;
    padding: 0 var(--spacing-md) 10vh;
    align-items: flex-end;
  }

  .search-container {
    padding: var(--spacing-md);
    max-width: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
  }

  .search-inputs {
    grid-template-columns: 1fr;
  }

  .suggestions-list {
    margin-left: 0;
    margin-right: 0;
  }

  .hero-title {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-md);
    line-height: var(--line-height-normal);
  }

  .features-grid,
  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .features-section,
  .solutions-section,
  .students-section,
  .landlords-section,
  .about-section,
  .contact-section {
    padding: var(--spacing-4xl) var(--spacing-md);
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-search {
    padding: 0 var(--spacing-sm) 8vh;
  }

  .search-container {
    padding: var(--spacing-md) var(--spacing-sm);
  }

  .hero-title {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-sm);
  }

  .search-inputs {
    padding: var(--spacing-xs);
  }

  .search-input,
  .search-button {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-sm);
  }
}
</style>
