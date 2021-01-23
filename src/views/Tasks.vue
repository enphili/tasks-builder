<template>
  <h1 v-if="!isTask" class="text-white center">Задач пока нет</h1>

  <div v-else>
    <TheAllActiveTasksCount />

    <component
      is="SinglePreviewTask"
      v-for="task in allTasksArray"
      :key="task.firebaseKey"
      :task="task"
      :firebaseKey="task.firebaseKey"
    ></component>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, isRef } from 'vue'
import SinglePreviewTask from '@/components/SinglePreviewTask'
import TheAllActiveTasksCount from '@/components/TheAllActiveTasksCount'
import {sortTasksObject} from '@/utilities/sortTaskObject'

export default {
  setup() {
    const store = useStore()

    const allTasks = computed(() => store.getters['tasks/allTasks'])
    console.log(isRef(allTasks))
    console.log(allTasks)
    console.log(allTasks.value)
    console.log(Object.keys(allTasks.value))
    const isTask = computed(() => Object.keys(allTasks).length > 0)
    const allTasksArray = computed(() => sortTasksObject(allTasks.value))

    return {allTasks, isTask, allTasksArray}
  },

  components: {SinglePreviewTask, TheAllActiveTasksCount}
}
</script>