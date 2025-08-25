
<template>
  <div class="contact">
    <h1>{{ t('texts.contact.title') }}</h1>
    <div class="thirds">
      <div class="third">
        <p>Studio Rotstich</p>
        <p>Jana Enderle</p>
        <br>
        <p>Olbersstraße 4</p>
        <p>10589 Berlin</p>
        <br>
        <p><a href="mailto:hello@janaenderle.com">hello@janaenderle.com</a></p>
        <p><a href="tel:+4917660404458">+49 176 60404458</a></p>
      </div>
      <div class="third">
        <form class="contact-form" @submit.prevent="submitForm">
          <label for="name">{{ t('texts.contact.form.name') }}</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            class="form-input" 
            autocomplete="name"
            :class="{ 'error': errors.name }"
          >
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>

          <label for="email">{{ t('texts.contact.form.email') }}</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            class="form-input" 
            autocomplete="email"
            :class="{ 'error': errors.email }"
          >
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>

          <label for="message">{{ t('texts.contact.form.message') }}</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            class="form-input" 
            rows="6" 
            autocomplete="off"
            :class="{ 'error': errors.message }"
          ></textarea>
          <span v-if="errors.message" class="error-message">{{ errors.message }}</span>

                     <button type="submit" class="btn-link" :disabled="isSubmitting || isSubmitted" :class="{ 'success': isSubmitted }">
             <span v-if="isSubmitting">{{ t('texts.contact.form.sending') }}</span>
             <span v-else-if="isSubmitted">{{ t('texts.contact.form.success') }}</span>
             <span v-else>{{ t('texts.contact.form.submit') }}</span>
             <img v-if="!isSubmitting && !isSubmitted" src="/arrow.png" width="12px" alt="Send arrow" style="transform: rotate(180deg)" />
           </button>
          
          <div v-if="submitError" class="error-message">
            {{ t('texts.contact.form.error') }}
          </div>
        </form>
      </div>
      <div class="third">
      </div>
    </div>
  </div>
  <div style="margin-top: 100px"></div>
</template>

<script>

export default {
  setup() {
    const { locale, locales, t } = useI18n()
    const router = useRouter()
    const route = useRoute()

    definePageMeta({
      title: 'pages.titles.contact',
      description: 'SEO.contact',
    })

    // Form state
    const form = reactive({
      name: '',
      email: '',
      message: ''
    })

    const errors = reactive({
      name: '',
      email: '',
      message: ''
    })

    const isSubmitting = ref(false)
    const isSubmitted = ref(false)
    const submitError = ref(false)

    // Validation function
    const validateForm = () => {
      let isValid = true
      
      // Reset errors
      errors.name = ''
      errors.email = ''
      errors.message = ''

      if (!form.name.trim()) {
        errors.name = t('texts.contact.form.nameRequired')
        isValid = false
      }

      if (!form.email.trim()) {
        errors.email = t('texts.contact.form.emailRequired')
        isValid = false
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(form.email)) {
          errors.email = t('texts.contact.form.emailInvalid')
          isValid = false
        }
      }

      if (!form.message.trim()) {
        errors.message = t('texts.contact.form.messageRequired')
        isValid = false
      }

      return isValid
    }

    // Submit form function
    const submitForm = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true
      submitError.value = false

      try {
        const response = await $fetch('/api/contact', {
          method: 'POST',
          body: {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim()
          }
        })

        if (response?.success) {
          isSubmitted.value = true
          router.replace({
            path: route.path,
            query: { ...route.query, sucess: 'True' }
          })
        }
      } catch (error) {
        console.error('Form submission error:', error)
        submitError.value = true
      } finally {
        isSubmitting.value = false
      }
    }



    return {
      t,
      form,
      errors,
      isSubmitting,
      isSubmitted,
      submitError,
      submitForm
    }
  },
}
</script>

<style lang="scss">

  .thirds {
    display: grid;
    grid-template-columns: 32.66% 32.66% 32.66%;
    grid-gap: 1%;
  }

  .third {
    display: block;
    hyphens: auto;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .space {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {

    br {
      line-height: 0.5;
    }

    h1 {
      font-size: 12vw !important;
      font-weight: 400 !important;
    }
  }
  /* Contact form */
  .contact-form {
    max-width: 100%;
    overflow-x: hidden;

    label {
      display: block;
      margin-top: 16px;
      font-size: 18px;
      font-weight: 400;
      width: 90%;
    }

    .form-input {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #000000;
      background: transparent;
      padding: 6px 0;
      outline: none;
      resize: none;
      margin-bottom: 16px;
      font-size: 16px;
      font-family: 'Sora', sans-serif;
    }

    .form-input:focus {
      border-bottom-color: #000;
    }

    .btn-link {
      margin-top: 24px;
      appearance: none;
      background: transparent;
      border: 0;
      padding: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-weight: 400;
      font-size: 18px;
    }

    .btn-link span {
      transition: transform 120ms ease-in-out;
    }

    .btn-link:hover span {
      transform: translateX(2px);
    }

    .btn-link:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-link.success {
      color: #28a745;
      opacity: 1;
    }

    .form-input.error {
      border-bottom-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 14px;
      margin-top: 4px;
      display: block;
    }
  }

  /* Prevent long links (like email) from causing horizontal scroll */
  .third a {
    word-break: break-word;
    overflow-wrap: anywhere;
  }

</style>