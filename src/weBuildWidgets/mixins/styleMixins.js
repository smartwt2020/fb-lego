import { generateComponentCss } from '../wb-style-controller'

export default {
  watch: {
    config: {
      deep: true,
      handler () {
        this.renderStyle()
      }
    }
  },
  methods: {
    // CSS Render section and Event management system
    renderStyle () {
      if (window.application_mode === 'design') {
        if (this.config.component === 'fb-widget-collab-widget' && this.isDaynamic) {
          return ''
        } else {
          this.elementSetup()
          this.styleElement.innerHTML = generateComponentCss(this.config)
        }
      }
    },
    elementSetup () {
      const id = this.config.id
      if (!this.styleElement) {
        this.styleElement = document.getElementById(`style-${id}`)
        if (this.styleElement === null) {
          this.styleElement = document.createElement('style')
          this.styleElement.setAttribute('id', `style-${id}`)
          document.body.append(this.styleElement)
        }
      }
    }
  },
  mounted () {
    this.elementSetup()
    this.renderStyle()
  }
}
