<template>
  <div
    class="modal-widget-container"
    ref="widget"
    :style="parentStyle"
    v-if="removeModal">
      <div :class="getClass" :id="config.id">
        <slot/>
      </div>
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
export default {
  name: 'fbWidgetModal',
  mixins: [common, styleMixin],
  computed: {
    parentStyle () {
      return {
        background: `rgba(0,0,0, ${this.config.transparency})`,
        zIndex: this.config.zIndex
      }
    },
    removeModal () {
      return window.application_mode !== 'design' ? false : this.hideElement
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-widget-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(#000, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
