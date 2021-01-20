<template >
  <div class="card">
    <h2 class="card-title">
      {{ taskTitle }}
      <AppStatus :type="status" />
    </h2>
    <p><strong><small>{{ createData }}</small></strong></p>
    <button class="btn primary" @click="setCurrentTaskID">Посмотреть</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AppStatus from '@/components/AppStatus'

export default {
  props: ['task'],

  setup(props) {
    const store = useStore()
    const router = useRouter()

    const setCurrentTaskID = () => {
      store.state.currentTaskID = props.task.id
      router.push(`/tasks/${props.task.id}`)
    }

    return {
      taskTitle: props.task.title,
      status: props.task.status,
      createData: props.task.createData,
      setCurrentTaskID
    }
  },

  components: {
    AppStatus
  }
}
</script>