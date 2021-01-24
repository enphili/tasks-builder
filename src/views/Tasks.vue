<template>
  <h1 v-if="!isTask" class="text-white center">Задач пока нет</h1>

  <div v-else>
    <TheAllActiveTasksCount />

    <single-preview-task
      v-for="task in allTasksInArray"
      :key="task.firebaseKey"
      :task="task"
      :firebaseKey="task.firebaseKey"
    ></single-preview-task>

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

    const allTasksInArray = computed(() => store.getters.allTasksInArray)
    const isTask = computed(() => allTasksInArray.value.length > 0)

    return {isTask, allTasksInArray}
  },

  components: {SinglePreviewTask, TheAllActiveTasksCount}
}
</script>