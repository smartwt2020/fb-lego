<template>
  <div
    class="form-widget-container"
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
  >
    <div v-if="!formBinded" class="invalid-form-text">
      No Form Is Binded
    </div>
    <div  v-else-if="!getFormConfig" class="invalid-form-text">
      Form {{config.formName}} is invalid form.
    </div>
    <asw-form-builder v-else :data="getFormConfig" @ClickAction="clickFormAction"/>
  </div>
</template>

<script>
import common from '../../mixins/common'
import AswFormBuilder from 'asw-form-builder/builder.vue'
import formController from '../../wb-logic-controller/index.js'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetForm',
  mixins: [common, styleMixin, eventMixins],
  components: {
    AswFormBuilder
  },
  data: () => ({
  }),
  computed: {
    formBinded () {
      return this.config.formName !== ''
    },
    getFormConfig () {
      if (this.formBinded) {
        const form = formController.GetFormConfig(this.config.formName)
        if (form) {
          return form.config
        } else {
          return false
        }
      } else {
        return false
      }
    }
  },
  methods: {
    clickFormAction (data) {
      const form = formController.GetFormConfig(this.config.formName)
      formController.FormAction(data, form.rule)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-widget-container {
  overflow: auto;
}
.invalid-form-text {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #d2691f;
  align-content: stretch;
  align-items: center;
  font-size: 18px;
}
</style>
