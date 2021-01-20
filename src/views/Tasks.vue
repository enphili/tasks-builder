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
import SinglePreviewTask from '@/components/SinglePreviewTask'
import TheAllActiveTasksCount from '@/components/TheAllActiveTasksCount'

export default {
  setup() {
    const store = useStore()

    return {
      allTasks: store.getters.allTasks,
      isTask: store.getters.allTasks.length > 0
    }
  },

  components: {
    SinglePreviewTask,
    TheAllActiveTasksCount
  }
}
</script>
