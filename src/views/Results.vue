<template>
  <div class="results-page">
    <div class="container">
      <div class="search-row">
        <form class="search-form" @submit.prevent="handleSearch">
          <input
            v-model="search.city"
            type="text"
            placeholder="Search for a city in Europe..."
            class="search-input"
          />
          <button type="submit" class="search-button">Search</button>
        </form>
        <div class="results-info" v-if="search.city">
          <span>{{ resultsCount }} results for <span class="city-name">{{ search.city }}</span></span>
        </div>
        <div class="sort-controls">
          <select class="sort-select" v-model="sortBy">
            <option value="">Sort</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="distance">Distance</option>
          </select>
        </div>
        <button class="filters-button" @click="toggleFilters">
          <svg class="filter-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          Filters
        </button>
      </div>

      <div class="results-content" v-if="search.city">
        <div class="results-grid">
          <div 
            v-for="property in properties" 
            :key="property.id" 
            class="result-card"
            @click="goToProperty(property.id)"
          >
            <div class="property-image">
              <img :src="property.image" :alt="property.title" />
            </div>
            <div class="property-content">
              <h3 class="property-title">{{ property.title }}</h3>
              <p class="property-location">{{ property.location }}</p>
              <p class="property-distance">{{ property.distance }}</p>
              <div class="property-details">
                <span class="property-price">€{{ property.price }}/month</span>
              </div>
              <div class="property-specs">
                <span>{{ property.bedrooms }} bed</span>
                <span>{{ property.bathrooms }} bath</span>
                <span>{{ property.area }}</span>
              </div>
              <p class="property-description">{{ property.description }}</p>
              <button class="property-button" @click.stop="goToProperty(property.id)">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="results-content">
        <p class="no-results">Enter a city to search for accommodations</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { placeholderProperties } from '../data/properties.js'

export default {
  name: 'Results',
  setup() {
    const route = useRoute()
    const router = useRouter()
    
    const search = ref({
      city: route.query.city || ''
    })

    const properties = computed(() => placeholderProperties)
    const resultsCount = computed(() => properties.value.length)
    const sortBy = ref('')

    const handleSearch = () => {
      if (search.value.city.trim()) {
        router.push({ path: '/results', query: { city: search.value.city } })
      }
    }

    const toggleFilters = () => {
      // Handle filters toggle
      console.log('Toggle filters')
    }

    const goToProperty = (propertyId) => {
      router.push({ name: 'PropertyDetail', params: { id: propertyId } })
    }

    return {
      search,
      properties,
      resultsCount,
      sortBy,
      handleSearch,
      toggleFilters,
      goToProperty
    }
  }
}
</script>

<style scoped>
.results-page {
  padding: var(--spacing-md) var(--spacing-xl) var(--spacing-xl);
  min-height: calc(100vh - 80px);
  background: var(--color-white);
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.search-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  background: var(--color-white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-md);
}

.search-form {
  display: flex;
  gap: var(--spacing-sm);
  flex: 1;
  min-width: 300px;
}

.search-input {
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid #CCCCCC;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  transition: border-color var(--transition-base);
  background: var(--color-white);
  flex: 1;
  min-width: 200px;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary-blue);
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

.results-info {
  color: var(--color-text-dark);
  font-size: var(--font-size-base);
  white-space: nowrap;
}

.city-name {
  color: var(--color-primary-blue);
  font-weight: var(--font-weight-semibold);
}

.sort-controls {
  display: flex;
  align-items: center;
}

.sort-select {
  padding: var(--spacing-md) var(--spacing-2xl) var(--spacing-md) var(--spacing-lg);
  border: 1px solid var(--color-light-grey);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  background: var(--color-white);
  cursor: pointer;
  transition: border-color var(--transition-base);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--spacing-md) center;
  padding-right: var(--spacing-3xl);
}

.sort-select:focus {
  outline: none;
  border-color: var(--color-primary-blue);
}

.filters-button {
  background-color: var(--color-white);
  color: var(--color-text-dark);
  border: 1px solid var(--color-light-grey);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.filter-icon {
  flex-shrink: 0;
}

.filters-button:hover {
  border-color: var(--color-primary-blue);
  color: var(--color-primary-blue);
}

.results-content {
  padding: var(--spacing-sm) 0 var(--spacing-xl);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.result-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
}

.result-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.property-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--color-light-grey);
}

.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.property-content {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  flex: 1;
  min-height: 0;
}

.property-title {
  font-size: 15px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
}

.property-location {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
  line-height: 1.3;
}

.property-distance {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
  line-height: 1.3;
}

.property-details {
  display: flex;
  align-items: center;
  margin: 0;
}

.property-price {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-blue);
}

.property-specs {
  display: flex;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
  line-height: 1.3;
}

.property-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-dark);
  line-height: var(--line-height-relaxed);
  margin: 0 0 var(--spacing-sm) 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
}

.property-button {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: opacity var(--transition-base);
  margin-top: auto;
}

.property-button:hover {
  opacity: 0.9;
}

.no-results {
  text-align: center;
  color: var(--color-text-light);
  padding: var(--spacing-4xl) 0;
  font-size: var(--font-size-lg);
}

@media (max-width: 768px) {
  .results-page {
    padding: var(--spacing-sm) var(--spacing-md) var(--spacing-md);
  }

  .search-row {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    margin-bottom: var(--spacing-sm);
  }

  .search-form {
    min-width: 100%;
    flex-direction: column;
  }

  .search-input {
    min-width: 100%;
  }

  .search-button,
  .filters-button {
    width: 100%;
  }

  .results-info {
    text-align: center;
  }

  .sort-controls {
    width: 100%;
  }

  .sort-select {
    width: 100%;
  }
}
</style>
