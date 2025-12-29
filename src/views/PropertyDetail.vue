<template>
  <div class="property-detail-page" v-if="property">
    <!-- Image Gallery -->
    <div class="image-gallery">
      <div class="main-image">
        <img :src="currentImage" :alt="property.title" />
        <button 
          v-if="images.length > 1"
          class="gallery-nav prev" 
          @click="previousImage"
          aria-label="Previous image"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          v-if="images.length > 1"
          class="gallery-nav next" 
          @click="nextImage"
          aria-label="Next image"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
      <div class="thumbnail-grid" v-if="images.length > 1">
        <div 
          v-for="(image, index) in images.slice(0, 4)" 
          :key="index"
          class="thumbnail"
          :class="{ active: currentImageIndex === index }"
          @click="currentImageIndex = index"
        >
          <img :src="image" :alt="`${property.title} - Image ${index + 1}`" />
        </div>
        <div 
          v-if="images.length > 4"
          class="thumbnail more-images"
          @click="showAllImages = true"
        >
          <img :src="images[4]" :alt="`${property.title} - More images`" />
          <div class="more-overlay">+{{ images.length - 4 }}</div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="property-content">
        <!-- Header Section -->
        <div class="property-header">
          <div class="header-left">
            <h1 class="property-title">{{ property.title }}</h1>
            <div class="property-meta">
              <span class="location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ property.location }}
              </span>
              <span class="distance">{{ property.distance }}</span>
            </div>
          </div>
          <div class="header-right">
            <div class="price-section">
              <div class="price">€{{ property.price }}</div>
              <div class="price-period">per month</div>
            </div>
          </div>
        </div>

        <!-- Property Specs -->
        <div class="property-specs">
          <div class="spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>{{ property.bedrooms }} {{ property.bedrooms === 1 ? 'bedroom' : 'bedrooms' }}</span>
          </div>
          <div class="spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 7h8M8 12h8M8 17h8"/>
            </svg>
            <span>{{ property.bathrooms }} {{ property.bathrooms === 1 ? 'bathroom' : 'bathrooms' }}</span>
          </div>
          <div class="spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
            <span>{{ property.area }}</span>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Description -->
        <div class="description-section">
          <h2>About this place</h2>
          <p class="description">{{ property.longDescription || property.description }}</p>
        </div>

        <div class="divider"></div>

        <!-- Features Section -->
        <div class="features-section" v-if="property.features && property.features.length > 0">
          <h2>What this place offers</h2>
          <div class="features-grid">
            <div v-for="feature in property.features" :key="feature" class="feature-item">
              <div class="feature-icon">
                <svg v-if="feature === 'WiFi'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                  <line x1="12" y1="20" x2="12.01" y2="20"/>
                </svg>
                <svg v-else-if="feature === 'Heating'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
                </svg>
                <svg v-else-if="feature === 'Kitchen'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
                  <path d="M3 7l3-3h12l3 3"/>
                  <path d="M8 7v10"/>
                  <path d="M16 7v10"/>
                </svg>
                <svg v-else-if="feature === 'Washer'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="8"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else-if="feature === 'TV'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
                  <polyline points="17 2 12 7 7 2"/>
                </svg>
                <svg v-else-if="feature === 'Workspace'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="18" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <svg v-else-if="feature === 'Parking'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="7" width="18" height="14" rx="2"/>
                  <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
                </svg>
                <svg v-else-if="feature === 'Balcony'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <svg v-else-if="feature === 'Air Conditioning'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
                <svg v-else-if="feature === 'Dishwasher'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M6 8h12"/>
                </svg>
                <svg v-else-if="feature === 'Dryer'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="8"/>
                  <path d="M12 4v8"/>
                </svg>
                <svg v-else-if="feature === 'Garden Access'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Lease Dates -->
        <div class="lease-section" v-if="property.leaseStart || property.leaseEnd">
          <h2>Lease information</h2>
          <div class="lease-dates">
            <div class="lease-date-item" v-if="property.leaseStart">
              <div class="lease-label">Available from</div>
              <div class="lease-value">{{ formatDate(property.leaseStart) }}</div>
            </div>
            <div class="lease-date-item" v-if="property.leaseEnd">
              <div class="lease-label">Available until</div>
              <div class="lease-value">{{ formatDate(property.leaseEnd) }}</div>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Rules Section -->
        <div class="rules-section" v-if="property.rules && property.rules.length > 0">
          <h2>House rules</h2>
          <ul class="rules-list">
            <li v-for="rule in property.rules" :key="rule">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              {{ rule }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Booking Card (Sticky) -->
      <div class="booking-card">
        <div class="booking-dates" v-if="property.leaseStart || property.leaseEnd">
          <div class="date-field" v-if="property.leaseStart">
            <label>Check-in</label>
            <div class="date-value">{{ formatDate(property.leaseStart) }}</div>
          </div>
          <div class="date-field" v-if="property.leaseEnd">
            <label>Check-out</label>
            <div class="date-value">{{ formatDate(property.leaseEnd) }}</div>
          </div>
        </div>
        <button class="book-button" :disabled="!property.available">
          {{ property.available ? 'Request to Book' : 'Not Available' }}
        </button>
        <p class="booking-note">You won't be charged yet</p>
      </div>
    </div>
  </div>
  <div v-else class="property-detail-page loading">
    <div class="container">
      <p>Property not found</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { placeholderProperties } from '../data/properties.js'

export default {
  name: 'PropertyDetail',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const currentImageIndex = ref(0)
    const showAllImages = ref(false)

    const propertyId = computed(() => parseInt(route.params.id))
    const property = computed(() => 
      placeholderProperties.find(p => p.id === propertyId.value)
    )

    const images = computed(() => {
      if (!property.value) return []
      return property.value.images || [property.value.image].filter(Boolean)
    })

    const currentImage = computed(() => {
      if (!images.value.length) return ''
      return images.value[currentImageIndex.value] || images.value[0]
    })

    const nextImage = () => {
      if (!images.value.length) return
      currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length
    }

    const previousImage = () => {
      if (!images.value.length) return
      currentImageIndex.value = currentImageIndex.value === 0 
        ? images.value.length - 1 
        : currentImageIndex.value - 1
    }

    const formatDate = (dateString) => {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
    }

    onMounted(() => {
      if (!property.value) {
        router.push('/results')
      }
    })

    return {
      property,
      images,
      currentImageIndex,
      currentImage,
      nextImage,
      previousImage,
      formatDate,
      showAllImages
    }
  }
}
</script>

<style scoped>
.property-detail-page {
  padding-top: 0;
  background: var(--color-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--spacing-3xl);
  margin-top: var(--spacing-xl);
}

/* Image Gallery */
.image-gallery {
  width: 100%;
  margin-bottom: var(--spacing-xl);
}

.main-image {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--color-light-grey);
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
  z-index: 10;
}

.gallery-nav:hover {
  background: var(--color-white);
  box-shadow: var(--shadow-md);
}

.gallery-nav.prev {
  left: var(--spacing-md);
}

.gallery-nav.next {
  right: var(--spacing-md);
}

.gallery-nav svg {
  width: 20px;
  height: 20px;
  color: var(--color-text-dark);
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.thumbnail {
  position: relative;
  width: 100%;
  height: 80px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all var(--transition-base);
}

.thumbnail:hover {
  border-color: var(--color-primary-blue);
}

.thumbnail.active {
  border-color: var(--color-primary-blue);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail.more-images {
  position: relative;
}

.more-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
}

/* Property Content */
.property-content {
  max-width: 100%;
}

.property-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-xl);
}

.property-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-dark);
  margin: 0 0 var(--spacing-sm) 0;
  line-height: var(--line-height-tight);
}

.property-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.location {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-text-dark);
  font-size: var(--font-size-base);
}

.location svg {
  width: 18px;
  height: 18px;
  color: var(--color-text-light);
}

.distance {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.price-section {
  text-align: right;
}

.price {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-dark);
}

.price-period {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.property-specs {
  display: flex;
  gap: var(--spacing-xl);
  padding: var(--spacing-lg) 0;
  flex-wrap: wrap;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text-dark);
  font-size: var(--font-size-base);
}

.spec-item svg {
  width: 20px;
  height: 20px;
  color: var(--color-primary-blue);
}

.divider {
  height: 1px;
  background: var(--color-light-grey);
  margin: var(--spacing-xl) 0;
}

.description-section,
.features-section,
.lease-section,
.rules-section {
  margin-bottom: var(--spacing-xl);
}

.description-section h2,
.features-section h2,
.lease-section h2,
.rules-section h2 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark);
  margin: 0 0 var(--spacing-lg) 0;
}

.description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-dark);
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-text-dark);
}

.feature-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-blue);
  flex-shrink: 0;
}

.feature-icon svg {
  width: 100%;
  height: 100%;
}

.lease-dates {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.lease-date-item {
  padding: var(--spacing-lg);
  background: var(--color-background-alt);
  border-radius: var(--radius-md);
}

.lease-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
}

.lease-value {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark);
}

.rules-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.rules-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
  font-size: var(--font-size-base);
  color: var(--color-text-dark);
  line-height: var(--line-height-relaxed);
}

.rules-list li svg {
  width: 20px;
  height: 20px;
  color: var(--color-primary-blue);
  flex-shrink: 0;
  margin-top: 2px;
}

/* Booking Card */
.booking-card {
  position: sticky;
  top: 100px;
  height: fit-content;
  background: var(--color-white);
  border: 1px solid var(--color-light-grey);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-lg);
}

.booking-dates {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--color-background-alt);
  border-radius: var(--radius-md);
}

.date-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.date-field label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.date-value {
  font-size: var(--font-size-base);
  color: var(--color-text-dark);
}

.book-button {
  width: 100%;
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-base);
  margin-bottom: var(--spacing-md);
}

.book-button:hover:not(:disabled) {
  background-color: var(--color-light-blue);
}

.book-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.booking-note {
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.loading {
  padding: var(--spacing-4xl);
  text-align: center;
}

@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .booking-card {
    position: relative;
    top: 0;
    order: -1;
  }

  .property-header {
    flex-direction: column;
  }

  .price-section {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-md);
  }

  .main-image {
    height: 300px;
    border-radius: 0;
  }

  .image-gallery {
    margin-left: calc(-1 * var(--spacing-md));
    margin-right: calc(-1 * var(--spacing-md));
    width: calc(100% + 2 * var(--spacing-md));
  }

  .thumbnail-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 var(--spacing-md);
  }

  .property-title {
    font-size: var(--font-size-2xl);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .lease-dates {
    grid-template-columns: 1fr;
  }
}
</style>

