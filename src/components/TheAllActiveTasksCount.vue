<template>
  <h3 class="text-white">Всего неразобранных задач: {{ activeTaskCount }}</h3>
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue';

export default {
  setup() {
    const store = useStore()

    const activeTaskCount = computed(() => store.getters.allTasks.filter(el => el.status === 'primary').length)

    return {
      activeTaskCount
    }
  }
}
</script>