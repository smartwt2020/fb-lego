<template>
  <div
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
    :style="{fontSize: config.size}"
  >
    <span
      class="switch"
      @click="change"
      :style="{background: value ? config.activeColor: config.inactiveColor, borderColor: config.borderColor}"
    >
      <span class="slider" :class="value ? 'slider-on': 'slider-off'" :style="{background: config.triggerColor}"></span>
    </span>
  </div>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: 'fbWidgetSwitch',
  mixins: [common],
  data: () => {
    return {
      value: false
    }
  },
  watch: {
    getBindData (val) {
      if (val !== this.value) {
        this.value = val
      }
    }
  },
  computed: {
    getBindData () {
      return this.config.bindProperty ? this.getVariableData(this.config.bindProperty) : ''
    }
  },
  methods: {
    change () {
      this.value = !this.value
      if (this.config.bindProperty) {
        this.setVaiableData(this.config.bindProperty, this.value)
      }
      if (this.config.OnChange) {
        this.callMethod(this.config.OnChange)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.switch {
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 2em;
    height: 1em;
    border: 1px solid;
    border-radius: 1em;
    display: flex;
    align-items: center;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
    position: absolute;
    height: 0.85em;
    width: 0.85em;
    border-radius: 50%;
    background: gray;
    margin: 0px 0.1em;
}
.slider-off {
  transition: 0.4s;
}
.slider-on {
  transform: translateX(0.8em);
  transition: 0.4s;
}
</style>
