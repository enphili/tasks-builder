<template>
  <span class="badge" :class="type">{{ changeText }}</span>
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue';

export default {
  props: ['type'],

  setup(props) {
    const store = useStore()

    const changeText = computed(() => props.type ? store.state.statusText[props.type] : store.state.statusText.default)

    return {changeText}
  }
}
</script>