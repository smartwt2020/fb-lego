<template>
  <a
    :class="getClass"
    :id="config.id"
    ref="widget"
    :target="config.target ? '_blank' : null"
    :href="GetValueString(config.link)"
    v-if="hideElement">
    {{GetValueString(config.value)}}
  </a>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: 'fbWidgetLink',
  mixins: [common]
}
</script>

<style lang="scss" scoped>

</style>
