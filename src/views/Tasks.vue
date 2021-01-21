<template>
  <h1 v-if="!isTask" class="text-white center">Задач пока нет</h1>

  <div v-else>
    <TheAllActiveTasksCount />

    <component
      is="SinglePreviewTask"
      v-for="task in allTasks"
      :key="task.id"
      :task="task"
    ></component>
  </div>

</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import SinglePreviewTask from '@/components/SinglePreviewTask'
import TheAllActiveTasksCount from '@/components/TheAllActiveTasksCount'

export default {
  setup() {
    const store = useStore()

    const allTasks = computed(() => store.getters.allTasks)
    const isTask = computed(() => store.getters.allTasks.length > 0)

    return {
      allTasks ,
      isTask
    }
  },

  components: {
    SinglePreviewTask,
    TheAllActiveTasksCount
  }
}
</script>
