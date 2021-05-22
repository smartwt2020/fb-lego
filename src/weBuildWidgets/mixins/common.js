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
  watch: {
    // config: {
    //   deep: true,
    //   handler () {
    //     this.renderStyle()
    //   }
    // },
    // getEvents: {
    //   deep: true,
    //   handler () {
    //     this.removeAllEvent()
    //     this.eventSetup()
    //   }
    // }
  },

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

    // // CSS Render section and Event management system
    // renderStyle () {
    //   if (window.application_mode === 'design') {
    //     this.elementSetup()
    //     this.styleElement.innerHTML = generateComponentCss(this.config)
    //   }
    // },
    // elementSetup () {
    //   const id = this.config.id
    //   if (!this.styleElement) {
    //     this.styleElement = document.getElementById(`style-${id}`)
    //     if (this.styleElement === null) {
    //       this.styleElement = document.createElement('style')
    //       this.styleElement.setAttribute('id', `style-${id}`)
    //       document.body.append(this.styleElement)
    //     }
    //   }
    // },
    // eventSetup () {
    //   const element = this.$refs.widget
    //   if (element && this.config.events) {
    //     for (const event in this.config.events) {
    //       if (!(event in this.eventMap)) {
    //         Vue.set(this.eventMap, event, () => {
    //           logicController.RunMethod(this.config.events[event])
    //         })
    //         element.addEventListener(event, this.eventMap[event])
    //       }
    //     }
    //   }
    // },
    // removeAllEvent () {
    //   const element = this.$refs.widget
    //   if (element) {
    //     for (const event in this.eventMap) {
    //       element.removeEventListener(event, this.eventMap[event])
    //       Vue.delete(this.eventMap, event)
    //     }
    //   }
    // }
  }
}
