<template>
  <div class="why-roomactually">
    <!-- Main Features -->
    <section id="features" class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <h2><span class="feature-icon">🏛️</span> Universities</h2>
            <h3>Stop losing time monitoring student housing issues!</h3>
            <ul>
              <li>Don't let your students get caught up in scams!</li>
              <li>No more emails, no more paperwork!</li>
            </ul>
          </div>

          <div class="feature-card">
            <h2><span class="feature-icon">🏠</span> Landlords</h2>
            <h3>List and manage your room on one platform!</h3>
            <ul>
              <li>Have access to the best students and universities!</li>
              <li>Online dossiers and automated student verification!</li>
            </ul>
          </div>

          <div class="feature-card">
            <h2><span class="feature-icon">🎓</span> Students</h2>
            <h3>Get access to all housing options on one platform!</h3>
            <ul>
              <li>Upload your application to improve your odds!</li>
              <li>Search, filter and browse to find the perfect room!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- University Solutions -->
    <section id="university-solutions" class="solutions-section">
      <div class="container">
        <h2 class="section-title">University Solutions</h2>
        <p class="section-subtitle">Help your students stay safe, protect your reputation and save both time and money!</p>
        
        <div class="solutions-grid">
          <div class="solution-item">
            <h3>Beautiful online postings</h3>
            <ul>
              <li>Allow your students to see detailed information on the apartment</li>
              <li>Packed with detailed information on the room</li>
              <li>Convenient and dynamic search functions</li>
            </ul>
          </div>
          <div class="solution-item">
            <h3>Students may search, filter and adjust the results</h3>
            <ul>
              <li>View the room, its surroundings and its distance from the school</li>
            </ul>
          </div>
          <div class="solution-item">
            <h3>Simple Approval Workflows</h3>
            <ul>
              <li>Keep control of your landlords and your rooms</li>
              <li>Manage your housing team and their roles in the system</li>
              <li>A service to your students</li>
              <li>All housing in One platform</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- For Landlords Section -->
    <section id="landlords" class="landlords-section">
      <div class="container">
        <h2 class="section-title">For Landlords</h2>
        <p class="section-subtitle">Find highly educated, reliable and verified renters for your property.</p>
        
        <div class="landlords-content">
          <div class="landlords-block">
            <h3>Why rent to students?</h3>
            <ul>
              <li>Students have parents as guarantors, often pay renters insurance and risk their reputation with the university</li>
              <li>No more heavy paperwork</li>
              <li>You are giving back to the community and help a student</li>
            </ul>
          </div>
          
          <div class="landlords-block">
            <h3>Why list on RoomActually?</h3>
            <ul>
              <li>Online applications and review process</li>
              <li>Automated verification</li>
              <li>Less showing, better renters</li>
            </ul>
          </div>
          
          <div class="landlords-block">
            <h3>What if no university close to you uses us?</h3>
            <p>We help students and landlords! If you think we could be helpful to a university close to you, get in touch with us and tell the university's housing office about us!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">About RoomActually</h2>
        <p class="about-text">
          RoomActually is the best platform for off campus housing; promoting safety while providing the best search and application functionalities. The platform integrates into universities' housing websites with their branding and control offering a fully functioning, beautiful and safe housing market to for their students.
        </p>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <form class="contact-form" @submit.prevent="handleContactSubmit">
          <div class="form-row">
            <input v-model="contactForm.name" type="text" placeholder="Name" class="form-input" required />
            <input v-model="contactForm.lastName" type="text" placeholder="Last Name" class="form-input" required />
          </div>
          <input v-model="contactForm.email" type="email" placeholder="Email address" class="form-input" required />
          <input v-model="contactForm.subject" type="text" placeholder="Subject" class="form-input" required />
          <textarea v-model="contactForm.message" placeholder="Message" class="form-textarea" rows="5" required></textarea>
          <button type="submit" class="form-submit">Send</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'WhyRoomActually',
  setup() {
    const contactForm = ref({
      name: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })

    const handleContactSubmit = () => {
      console.log('Form submitted:', contactForm.value)
      // Reset form
      contactForm.value = {
        name: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      }
    }

    return {
      contactForm,
      handleContactSubmit
    }
  }
}
</script>

<style scoped>
.why-roomactually {
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* Features Section */
.features-section {
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: var(--color-white);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.feature-card {
  background: var(--color-white);
  padding: 0;
  text-align: left;
}

.feature-icon {
  font-size: 28px;
  margin-right: var(--spacing-sm);
}

.feature-card h2 {
  color: var(--color-text-dark);
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-bold);
  display: flex;
  align-items: center;
}

.feature-card h3 {
  color: var(--color-text-dark);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-relaxed);
}

.feature-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.feature-card ul li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-dark);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.feature-card ul li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary-blue);
  font-size: var(--font-size-xl);
}


/* Solutions Section */
.solutions-section {
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: var(--color-light-grey);
}

.section-title {
  text-align: center;
  color: var(--color-text-dark);
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-bold);
}

.section-subtitle {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.solution-item {
  background: var(--color-white);
  padding: var(--spacing-lg);
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
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-lg);
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

/* Landlords Section */
.landlords-section {
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: var(--color-white);
}

.landlords-content {
  max-width: 900px;
  margin: var(--spacing-xl) auto 0;
}

.landlords-block {
  margin-bottom: var(--spacing-xl);
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
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: var(--color-light-grey);
  text-align: center;
}

.about-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-loose);
  max-width: 900px;
  margin: var(--spacing-xl) auto 0;
  color: var(--color-text-dark);
}

/* Contact Section */
.contact-section {
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: var(--color-white);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 600px;
  margin: var(--spacing-lg) auto 0;
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
  .features-grid,
  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .features-section,
  .solutions-section,
  .landlords-section,
  .about-section,
  .contact-section {
    padding: var(--spacing-xl) var(--spacing-md);
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>

