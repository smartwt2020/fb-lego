<template>
  <div
    @click.stop="$emit('click')"
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement">
    <slot/>
  </div>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: 'fbWidgetContainer',
  mixins: [common]
}
</script>

<style lang="scss" scoped>

</style>
