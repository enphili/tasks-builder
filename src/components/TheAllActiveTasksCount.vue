<template>
  <h3 class="text-white">Всего активных задач: {{ activeTaskCount }}</h3>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      activeTaskCount: store.getters.allTasks.filter(el => el.status === 'primary').length
    }
  }
}
</script>