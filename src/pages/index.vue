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

      <a v-for="project in projects" :href="project.url" :aria-label="t(project.title)" :key="project.imageID"></a>

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
                  title: 'pages.titles.index',
                  description: 'defaultSEO',
            })

            const projects = [
                  { imageID: 'veg2hyw2oyeqlefycoul', mobileImageID: 'a2cn1asys3mm449ynigr', alt: 'projects.annayuna.images.front', title: 'projects.annayuna.title', url: t('projects.annayuna.path') },
                  { imageID: 'SharpClub_Cover_lackww', mobileImageID: 'SharpClub_Karton_Innen_Mobile_gnogof', alt: 'projects.thesharp_club.images.front', title: 'projects.thesharp_club.title', url: t('projects.thesharp_club.path') },
                  { imageID: 'WernerWeingut_Cover_hwrmw6', mobileImageID: 'WernerWeingut_Cover_Mobile_aems94', alt: 'projects.weingut_werner.images.front', title: 'projects.weingut_werner.title', url: t('projects.weingut_werner.path') },
                  { imageID: 'Finanzguru_Cover_vihcop', mobileImageID: 'Finanzguru_Cover_Mobile_faklyb', alt: 'projects.finanzguru.images.front', title: 'projects.finanzguru.title', url: t('projects.finanzguru.path') },
                  { imageID: 'VelvetSoul_Cover_kwfuhi', mobileImageID: 'VelvetSoul_Shirt_Mobile_ea9tbf', alt: 'projects.velvet_soul_street.images.front', title: 'projects.velvet_soul_street.title', url: t('projects.velvet_soul_street.path') },
                  { imageID: 'kf2qo9kd2yaxongtzy44', mobileImageID: 'byp6rgplmsbltdkyska2', alt: 'projects.lenis.images.front', title: 'projects.lenis.title', url: t('projects.lenis.path') },
                  { imageID: 'uxcqpnglmtl2shbolu3j', mobileImageID: 'spivkzcya2ks1v71enbx', alt: 'projects.odds_and_ends.images.front', title: 'projects.odds_and_ends.title', url: t('projects.odds_and_ends.path') },
                  { imageID: 'm4qfb3n2sxstadl3za2r', mobileImageID: 'y9cax5heidbqufxrv3yy', alt: 'projects.super_me.images.front', title: 'projects.super_me.title', url: t('projects.super_me.path') },
                  { imageID: 'j1mnrsywkwmrkhknw6kg', mobileImageID: 'tmtyeemgy56vw6kujyx6', alt: 'projects.IKEAXAstraZeneca.images.front', title: 'projects.IKEAXAstraZeneca.title', url: t('projects.IKEAXAstraZeneca.path') },

            ]

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