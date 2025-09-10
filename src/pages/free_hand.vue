<template>
      <ClientOnly>
      <div class="spacer" v-if="gridMode" style="height: 40px"></div>
      <TransitionGroup name="fade" tag="div" class="list" @before-leave="handleBeforeLeave">
            <div v-for="(pair, pairIndex) in chunkedProjects" :key="'pair-' + pairIndex" class="pair-container"
                  v-if="gridMode && !isMobile">
                  <div v-for="(project, index) in pair" :key="project.imageID" class="grid-card-wrapper">
                        <GridCard :style="{ animationDelay: pairIndex * 0.2 + 's' }" :project="project" />
                  </div>
                  <div v-if="pair.length === 1 || pair.length === 2 " class="grid-card-wrapper blank"></div>
                  <div v-if="pair.length === 1 " class="grid-card-wrapper blank"></div>
            </div>
            <div v-for="(pair, pairIndex) in chunkedProjectsMobile" :key="'pair-' + pairIndex" class="pair-container"
                  v-if="gridMode && isMobile">
                  <div v-for="(project, index) in pair" :key="project.imageID" class="grid-card-wrapper">
                        <GridCard :style="{ animationDelay: pairIndex * 0.2 + 's' }" :project="project" />
                  </div>
                  <div v-if="pair.length === 1" class="grid-card-wrapper blank"></div>
            </div>
      </TransitionGroup>

      <Card v-for="project in projects" v-if="!gridMode" :key="project.imageID" :project="project" />
      </ClientOnly>
      
      <a v-for="project in projects" :href="project.url" :aria-label="t(project.alt)" :key="project.imageID"></a>
</template>


<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
      setup() {
            const store = useStore()
            const isMobile = computed(() => store.state.isMobile)
            const gridMode = computed(() => store.state.gridMode)
            const { t } = useI18n()

            const handleBeforeLeave = (el) => {
                  const children = el.children;
                  for (let i = 0; i < children.length; i++) {
                        children[i].style.animationDelay = '0s';
                        children[i].classList.add('fade-leave-active');
                  }
            }

            definePageMeta({
                  title: 'pages.titles.free_hand',
                  description: 'SEO.free_hand',
            })

            const projects = [
                  {
                        imageID: 'j85rp5bo5oczvxgqqjeh',
                        mobileImageID: 'drirbfm0onnubjpnr9xa',
                        alt: 'free_hand.calendar.alt',
                        title: 'free_hand.calendar.title',
                        url: t('free_hand.calendar.href')
                  },
                  {
                        imageID: 'HerzPostkarte_Web_jxxzr5.jpg',
                        mobileImageID: 'HerzPostkarte_Mobile_ow2vxw.jpg',
                        alt: 'free_hand.heart.alt',
                        url: t('free_hand.heart.href'),
                        title: 'free_hand.heart.title'
                  },
                  {
                        imageID: 'c5r32k5uh1eqcvpxach5',
                        mobileImageID: 'opxd3snqumxsqsamslyv',
                        alt: 'free_hand.linol.alt',
                        url: t('free_hand.linol.href')
                  },
                  {
                        imageID: 'klkpetd2snocoqvcgyjx',
                        mobileImageID: 'vkv0ggnclzy4nqgl5wyz',
                        alt: 'free_hand.card.alt',
                        url: t('free_hand.card.href')
                  },
                  {
                        imageID: 'rkw34nnlj9fk7g9uz1za',
                        mobileImageID: 'r43eywgbfpvu4oceswfw',
                        alt: 'free_hand.placemat.alt'
                  }
            ];

            // mobile 2 else 3
            const chunkedProjectsMobile = computed(() => {
                  const chunks = []
                  for (let i = 0; i < projects.length; i += 2) {
                        chunks.push(projects.slice(i, i + 2))
                  }
                  return chunks
            })

            const chunkedProjects = computed(() => {
                  const chunks = []
                  for (let i = 0; i < projects.length; i += 3) {
                        chunks.push(projects.slice(i, i + 3))
                  }
                  return chunks
            })

            return { isMobile, t, projects, gridMode, handleBeforeLeave, chunkedProjects, chunkedProjectsMobile }
      }
}
</script>

<style scoped>
.fade-enter-active {
      transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
      opacity: 0;
}

.list div {
      opacity: 0;
      animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
      to {
            opacity: 1;
      }
}

.fade-leave-active {
      animation: fadeOut 0.03s forwards !important;
}

@keyframes fadeOut {
      from {
            opacity: 1;
      }

      to {
            opacity: 0;
      }
}

.pair-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
}

.grid-card-wrapper {
      flex: 1;
      box-sizing: border-box;
}

.blank .empty {
      height: 100%;
      /* Ensure the placeholder takes full height of the grid card */
}

.grid-card-wrapper+.grid-card-wrapper {
      margin-left: 7px;
      /* Spacer between two GridCards */
}
</style>
