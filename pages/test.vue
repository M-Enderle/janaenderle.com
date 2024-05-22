<template>
    <TransitionGroup
      name="fade"
      tag="div"
      class="list"
      @before-leave="handleBeforeLeave"
    >
      <div v-for="(pair, pairIndex) in chunkedProjects" :key="'pair-' + pairIndex" class="pair-container" v-if="gridMode">
        <div v-for="(project, index) in pair" :key="project.imageID" class="grid-card-wrapper">
          <GridCard
            :style="{ animationDelay: pairIndex * 0.2 + 's' }"
            :project="project"
          />
        </div>
        <div v-if="pair.length === 1" class="grid-card-wrapper blank">
            <div class="empty"></div>
        </div>
      </div>
    </TransitionGroup>

    <Card v-for="project in projects" 
          v-if="!gridMode"
          :key="project.imageID" 
          :imageID="project.imageID"
          :mobileImageID="project.mobileImageID"
          :alt="t(project.alt)" 
          :title="t(project.title)" 
          :url="t(project.url)" 
    />


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
      { imageID: 'veg2hyw2oyeqlefycoul', mobileImageID: 'a2cn1asys3mm449ynigr', alt: 'projects.annayuna.images.front', title: 'projects.annayuna.title', url: 'projects.annayuna.path' },
      { imageID: 'm4qfb3n2sxstadl3za2r', mobileImageID: 'y9cax5heidbqufxrv3yy', alt: 'projects.super_me.images.front', title: 'projects.super_me.title', url: 'projects.super_me.path' },
      { imageID: 'kf2qo9kd2yaxongtzy44', mobileImageID: 'byp6rgplmsbltdkyska2', alt: 'projects.lenis.images.front', title: 'projects.lenis.title', url: 'projects.lenis.path' },
      { imageID: 'j1mnrsywkwmrkhknw6kg', mobileImageID: 'tmtyeemgy56vw6kujyx6', alt: 'projects.IKEAXAstraZeneca.images.front', title: 'projects.IKEAXAstraZeneca.title', url: 'projects.IKEAXAstraZeneca.path' },
      { imageID: 'uxcqpnglmtl2shbolu3j', mobileImageID: 'spivkzcya2ks1v71enbx', alt: 'projects.odds_and_ends.images.front', title: 'projects.odds_and_ends.title', url: 'projects.odds_and_ends.path' },
      { imageID: 'xp5kmuhkhfvdgtieff0y', mobileImageID: 'tknjkur0thaffq46um7y', alt: 'projects.vulkanfieber.images.front', title: 'projects.vulkanfieber.title', url: 'projects.vulkanfieber.path' },
      { imageID: 'ckguvelcu7tahwvnuzls', mobileImageID: 'agylusnxghug4b6ublsz', alt: 'projects.cre4te.images.front', title: 'projects.cre4te.title', url: 'projects.cre4te.path' }
    ]

    const chunkedProjects = computed(() => {
      const chunks = []
      for (let i = 0; i < projects.length; i += 2) {
        chunks.push(projects.slice(i, i + 2))
      }
      return chunks
    })

    return { isMobile, t, projects, gridMode, handleBeforeLeave, chunkedProjects }
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
  height: 100%; /* Ensure the placeholder takes full height of the grid card */
}

.grid-card-wrapper + .grid-card-wrapper {
  margin-left: 7px; /* Spacer between two GridCards */
}
</style>
  