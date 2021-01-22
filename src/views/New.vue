<template>
  <form class="card" @submit.prevent="createNewTask" ref="newTaskForm">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="deadlineData">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="isFields">Создать</button>
  </form>
</template>


<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import {strRandomGenerate} from '@/utilities/strgenerator'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const title = ref('')
    const deadlineData = ref('')
    const description = ref('')
    const newTaskForm = ref(null)

    const isFields = computed(() => (title.value === '' || deadlineData.value === '' || description.value === ''))
    const status = computed(() => (new Date(deadlineData.value) - Date.now()) <= 0 ? 'danger' : 'primary')


    const createNewTask = () => {
      const newKey = `-MR_${strRandomGenerate()}`
      store.state.allTasks[newKey] = {
        id: Math.floor(Date.now() / 1000),
        title: title.value.trim(),
        status: status.value,
        createData: new Date().toLocaleDateString(),
        deadlineData: new Date(deadlineData.value).toLocaleDateString(),
        description: description.value.trim()
      }
      newTaskForm.value.reset()
      router.push('/dashboard')
    }

    return {
      title,
      deadlineData,
      description,
      isFields,
      createNewTask,
      newTaskForm,
      status
    }
  }
}

</script>