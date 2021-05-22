import Vue from 'vue'
import logicController from '../wb-logic-controller'

export default {
  data: () => ({
    eventMap: {}
  }),
  watch: {
    getEvents: {
      deep: true,
      handler () {
        this.removeAllEvent()
        this.eventSetup()
      }
    }
  },
  computed: {
    getEvents () {
      return this.config.events || {}
    }
  },
  methods: {
    eventSetup () {
      const element = this.$refs.widget
      if (element && this.config.events) {
        for (const event in this.config.events) {
          if (!(event in this.eventMap)) {
            Vue.set(this.eventMap, event, () => {
              logicController.RunMethod(this.config.events[event])
            })
            element.addEventListener(event, this.eventMap[event])
          }
        }
      }
    },
    removeAllEvent () {
      const element = this.$refs.widget
      if (element) {
        for (const event in this.eventMap) {
          element.removeEventListener(event, this.eventMap[event])
          Vue.delete(this.eventMap, event)
        }
      }
    }
  },
  mounted () {
    this.removeAllEvent()
    this.eventSetup()
  },
  beforeDestroy () {
    this.removeAllEvent()
  }
}
