<template>
  <div class="logo" :class="[`logo-${size}`]">
    <img 
      :src="imageSrc || '/logo.png'" 
      :alt="altText" 
      class="logo-image" 
    />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    imageSrc: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: 'RoomActually'
    }
  },
  computed: {
    altText() {
      return this.alt || 'RoomActually'
    }
  }
}
</script>

<style scoped>
.logo {
  display: inline-block;
  line-height: 1;
}

.logo-image {
  height: auto;
  width: auto;
  max-width: 100%;
  display: block;
}

.logo-small {
  max-width: 180px;
}

.logo-medium {
  max-width: 240px;
}

.logo-large {
  max-width: 300px;
}

@media (max-width: 768px) {
  .logo-medium {
    max-width: 180px;
  }
}

@media (max-width: 480px) {
  .logo-medium {
    max-width: 140px;
  }
}
</style>

