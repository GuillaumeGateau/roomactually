<template>
  <header class="header">
    <div class="container flex-between">
      <router-link to="/" class="logo-link">
        <Logo size="medium" />
      </router-link>
      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/why-roomactually" class="nav-link">Why RoomActually?</router-link>
        <router-link to="/faq" class="nav-link">FAQ</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Header',
  components: {
    Logo
  }
}
</script>

<style scoped>
.header {
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  padding: var(--spacing-md) 0;
}

.logo-link {
  text-decoration: none;
  display: inline-block;
  transition: opacity var(--transition-base);
}

.logo-link:hover {
  opacity: 0.8;
}

.nav {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: var(--color-text-dark);
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-base);
}

.nav a:hover,
.nav a.router-link-active {
  color: var(--color-primary-blue);
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-primary);
  cursor: pointer;
  transition: all var(--transition-base);
  text-align: center;
  text-decoration: none;
}

.btn-link {
  background: none;
  border: none;
  color: var(--color-text-dark);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  cursor: pointer;
  padding: 0;
  transition: color var(--transition-base);
}

.btn-link:hover {
  color: var(--color-primary-blue);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .header {
    padding: var(--spacing-md) 0;
  }

  .header .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--spacing-md);
  }

  .logo-link {
    flex-shrink: 0;
  }

  .nav {
    gap: var(--spacing-sm);
  }

  .nav a {
    font-size: var(--font-size-sm);
  }

  .btn-link {
    font-size: var(--font-size-sm);
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .header {
    padding: var(--spacing-sm) 0;
  }

  .header .container {
    padding: 0 var(--spacing-sm);
  }

  .nav {
    gap: var(--spacing-xs);
  }

  .nav a {
    font-size: var(--font-size-xs);
  }

  .btn-link {
    font-size: var(--font-size-xs);
    padding: var(--spacing-xs);
  }
}
</style>

