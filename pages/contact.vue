<template>
  <div class="contact">
    <h1>{{ t('texts.contact.title') }}</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>{{ t('texts.contact.subtitle') }}</h2>
        <div class="contact-details">
          <p>Studio Rotstich</p>
          <p>Jana Enderle</p>
          <p>Olbersstraße 4</p>
          <p>10589 Berlin Charlottenburg</p>
          <div class="space"></div>
          <p><a href="mailto:hello@janaenderle.com">hello@janaenderle.com</a></p>
        </div>
      </div>
      
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">{{ t('texts.contact.form.name') }} *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              :class="{ 'error': errors.name }"
              required
            />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
          
          <div class="form-group">
            <label for="email">{{ t('texts.contact.form.email') }} *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              :class="{ 'error': errors.email }"
              required
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          
          <div class="form-group">
            <label for="message">{{ t('texts.contact.form.message') }} *</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              :class="{ 'error': errors.message }"
              rows="6"
              required
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>
          
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="submit-btn"
          >
            <span v-if="!isSubmitting">{{ t('texts.contact.form.submit') }}</span>
            <span v-else>{{ t('texts.contact.form.sending') }}</span>
            <span class="arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  </div>
  <div style="margin-top: 100px"></div>
</template>

<script>
export default {
  setup() {
    const { locale, t } = useI18n()
    const router = useRouter()
    
    definePageMeta({
      title: 'pages.titles.contact',
      description: 'SEO.contact',
    })

    return {
      t, locale, router
    }
  },
  
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {},
      isSubmitting: false
    }
  },
  
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = this.t('texts.contact.form.nameRequired')
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = this.t('texts.contact.form.emailRequired')
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = this.t('texts.contact.form.emailInvalid')
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = this.t('texts.contact.form.messageRequired')
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    
    async submitForm() {
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      
      try {
        const response = await $fetch('/api/contact', {
          method: 'POST',
          body: {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          }
        })
        
        // Redirect to success page
        await this.router.push(this.t('pages.routes.contact_success'))
      } catch (error) {
        console.error('Form submission error:', error)
        // TODO: Add error handling UI
        alert('There was an error sending your message. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-align: center;
  }
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.contact-info {
  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .contact-details {
    font-size: 1rem;
    line-height: 1.6;

    p {
      margin-bottom: 5px;
    }

    a {
      color: inherit;
      text-decoration: none;
      
      &:hover {
        color: rgb(255, 26, 26);
      }
    }
  }
}

.contact-form {
  .form-group {
    margin-bottom: 25px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    input, textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      font-family: inherit;
      font-size: 16px;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: rgb(255, 26, 26);
      }

      &.error {
        border-color: #ff0000;
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    .error-message {
      display: block;
      color: #ff0000;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}

.submit-btn {
  background: #000;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover:not(:disabled) {
    background: rgb(255, 26, 26);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .arrow {
    font-size: 18px;
  }
}

.space {
  margin-bottom: 20px;
}
</style>