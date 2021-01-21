<template >
  <div class="card">
    <h2 class="card-title">
      {{ taskTitle }}
      <AppStatus :type="status" />
    </h2>
    <p><strong><small>{{ createData }}</small></strong></p>
    <button
      class="btn primary"
      :firebaseKey="firebaseKey"
      @click="setCurrentTaskID"
    >Посмотреть</button>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AppStatus from '@/components/AppStatus'

export default {
  props: ['task', 'firebaseKey'],

  setup(props) {
    const store = useStore()
    const router = useRouter()

    const setCurrentTaskID = () => {
      store.commit('setCurrentID', props.task.id)
      store.commit('setCurrentFireBaseKey', props.firebaseKey)
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