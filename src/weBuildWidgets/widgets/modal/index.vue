<template>
  <div
    class="modal-widget-container"
    ref="widget"
    v-if="hideElement">
    <div :style="parentStyle">
      <div :class="getClass" :id="config.id" :style="modalStyle">erfgwref</div>
    </div>
    awesfw
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
    modalStyle () {
      return {
        height: this.config.height,
        width: this.config.width
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-widget-container {
  display: none;
  & > div {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(#000, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
