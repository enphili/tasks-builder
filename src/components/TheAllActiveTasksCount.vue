<template>
  <h3 class="text-white">
    <b>Всего: </b>
    неразобранных задач - {{ pendingTaskCount }} <span>&nbsp;&nbsp;&nbsp;</span>задач в работе - {{ activeTaskCount }}</h3>
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue';

export default {
  setup() {
    const store = useStore()

    const pendingTaskCount = computed(() => store.getters.allTasksInArray.filter(el => el.status === 'primary').length)
    const activeTaskCount = computed(() => store.getters.allTasksInArray.filter(el => el.status === 'warning').length)

    return {
      pendingTaskCount,
      activeTaskCount
    }
  }
}
</script>