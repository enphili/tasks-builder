<template>
  <h1 v-if="!isTask" class="text-white center">Задач пока нет</h1>

  <div v-else>
    <TheAllActiveTasksCount />

    <component
      is="SinglePreviewTask"
      v-for="(task, idx) in allTasks"
      :key="idx"
      :task="task"
      :firebaseKey="idx"
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
    const isTask = computed(() => Object.keys(store.getters.allTasks).length > 0)

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
