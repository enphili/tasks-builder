<template>
  <span class="badge" :class="type">{{ text }}</span>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: ['type'],

  setup(props) {
    const store = useStore()

    return {
      text: props.type ? store.getters.statusText[props.type] : store.getters.statusText.default
    }
  }
}
</script>