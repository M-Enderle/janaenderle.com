<template>
  <div class="contact-success">
    <div class="success-content">
      <div class="success-icon">✓</div>
      <h1>{{ t('texts.contact.success.title') }}</h1>
      <p>{{ t('texts.contact.success.message') }}</p>
      <nuxt-link :to="t('pages.routes.contact')" class="back-btn">
        {{ t('texts.contact.success.backToContact') }}
      </nuxt-link>
    </div>
  </div>
  <div style="margin-top: 100px"></div>
</template>

<script>
export default {
  setup() {
    const { t } = useI18n()
    
    definePageMeta({
      title: 'pages.titles.contact',
      description: 'SEO.contact',
    })

    return {
      t
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-success {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.success-content {
  text-align: center;
  max-width: 600px;
  
  .success-icon {
    font-size: 4rem;
    color: #28a745;
    margin-bottom: 30px;
    width: 80px;
    height: 80px;
    border: 3px solid #28a745;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 30px;
    background: rgba(40, 167, 69, 0.1);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #28a745;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 40px;
    color: #666;
  }

  .back-btn {
    display: inline-block;
    background: #000;
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;

    &:hover {
      background: rgb(255, 26, 26);
    }
  }
}

@media screen and (max-width: 768px) {
  .success-content {
    .success-icon {
      font-size: 3rem;
      width: 60px;
      height: 60px;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>