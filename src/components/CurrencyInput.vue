<template>
  <input
      ref="inputRef"
      type="text"
  />
</template>

<script>
import { watchDebounced } from '@vueuse/core'
import { useCurrencyInput } from 'vue-currency-input'

export default {
  name: 'CurrencyInput',
  props: {
    modelValue: Number, // Vue 2: value
    options: Object
  },
  setup (props, { emit }) {
    const { inputRef, numberValue } = useCurrencyInput(props.options, false)

    watchDebounced(numberValue, (value) => emit('update:modelValue', value), { debounce: 1000 })

    return { inputRef }
  }
}
</script>