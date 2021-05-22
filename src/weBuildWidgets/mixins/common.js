import logicController from '../wb-logic-controller'
export default {
  props: {
    config: {
      type: Object
    }
  },
  data: () => ({
    styleElement: null
  }),
  computed: {
    getClass () {
      return `${this.config.component} ${logicController.GetValueString(this.config.class)}`
    },
    getEvents () {
      return this.config.events || {}
    },
    hideElement () {
      if (this.config.show !== '') {
        return this.getVariableData(this.config.show)
      } else {
        return true
      }
    }
  },
  methods: {
    GetValueString (val) {
      return logicController.GetValueString(val)
    },

    setVaiableData (varname, value) {
      if (varname && varname !== '') {
        logicController.SetPropertyValue(varname, value)
      }
    },
    getVariableData (varName) {
      return logicController.GetPropertyValue(varName)
    },
    callMethod (name, data = null) {
      return logicController.RunMethod(name, data)
    }
  }
}
