<template>
  <div :class="getClass" :id="config.id" ref="widget" v-if="hideElement">
    {{GetValueString(config.value)}}
  </div>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: 'fbWidgetLabel',
  mixins: [common]
}
</script>

<style lang="scss" scoped>

</style>
