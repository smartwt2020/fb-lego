<template>
  <button :class="getClass" :id="config.id" ref="widget" v-if="hideElement">
    {{GetValueString(config.value)}}
  </button>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: 'fbWidgetButton',
  mixins: [common]
}
</script>

<style lang="scss" scoped>

</style>
