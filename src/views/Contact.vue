<template>
  <div class="contact">
    <header class="contact-header">
      <h1 class="contact-title">Contact Me</h1>
    </header>
    
    <section>
      <h2 class="section-title">Contact Information</h2>
      <ul class="contact-list">
        <li class="contact-item">
          <span class="contact-label">Email:</span>
          <p class="contact-info">s223051123@deakin.edu.au</p>
        </li>
        <li class="contact-item">
          <span class="contact-label">Phone:</span>
          <p class="contact-info">0447 557 712</p>
        </li>
        <li class="contact-item">
          <span class="contact-label">Address:</span>
          <p class="contact-info">5/591 Toorak Road, Toorak, VIC-3142, Australia</p>
        </li>
      </ul>
    </section>
    
    <section>
      <h2 class="section-title">Contact Form</h2>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name" class="form-label">Name:</label>
          <input type="text" id="name" class="form-input" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" class="form-input" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message" class="form-label">Message:</label>
          <textarea id="message" class="form-textarea" v-model="formData.message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here, e.g., sending an email or storing the message.
      console.log('Form submitted with data:', this.formData);
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here */

.contact {
  background: linear-gradient(90deg, #0e1b38 0%, #0b162b 100%); /* Dark blue gradient */
  color: #fff; /* Text color */
  padding: 20px;
  border-radius: 10px;
}

.contact-header h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.section-title {
  font-size: 20px;
  margin-top: 20px;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-item {
  margin-bottom: 10px;
}

.contact-label {
  font-weight: bold;
}

.contact-info {
  margin-left: 10px;
}

.contact-form {
  margin-top: 20px;
}

.form-label {
  font-weight: bold;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
