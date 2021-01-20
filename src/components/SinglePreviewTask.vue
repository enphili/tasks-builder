<template >
  <div class="card">
    <h2 class="card-title">
      {{ taskTitle }}
      <AppStatus :type="status" />
    </h2>
    <p><strong><small>{{ createData }}</small></strong></p>
    <button class="btn primary">Посмотреть</button>
  </div>
</template>

<script>
import AppStatus from '@/components/AppStatus'

export default {
  props: ['task'],

  setup(props) {
    return {
      taskTitle: props.task.title,
      status: props.task.status,
      createData: props.task.createData
    }
  },

  components: {
    AppStatus
  }
}
</script>