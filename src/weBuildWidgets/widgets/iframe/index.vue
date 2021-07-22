<template>
  <div
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
  >
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import uuidV1 from 'uuid/v1'
import utils from '../../utills/debounce'
function generateGuid () {
  return uuidV1()
}
export default {
  name: 'fbWidgetHtml',
  mixins: [common, styleMixin],
  data () {
    return {
      iframeEl: null,
      iframeLoadedMessage: `IFRAME_LOADED_${generateGuid()}`,
      iframeOnReadyStateChangeMessage: `IFRAME_ON_READ_STATE_CHANGE_${generateGuid()}`
    }
  },
  watch: {
    config: {
      deep: true,
      handler () {
        this.reinitIframe(this)
      }
    }
  },
  methods: {
    removeIframe () {
      while (this.$el.firstChild) {
        this.$el.removeChild(this.$el.firstChild)
      }
    },
    setIframeUrl () {
      if (this.iframeEl.contentWindow === null) {
        setTimeout(this.setIframeUrl)
        return
      }
      const iframeDoc = this.iframeEl.contentWindow.document
      iframeDoc.open().write(
        `
          <body onload="window.location.replace('${this.config.src}'); parent.postMessage('${this.iframeLoadedMessage}', '*')">
          </body>
          <script>
            window.document.onreadystatechange = function () {
              if (window.document.readyState === 'complete') {
                parent.postMessage('${this.iframeOnReadyStateChangeMessage}', '*')
              }
            };
          <\\script>
          `
      )
      iframeDoc.close() // iframe onload event happens
    },
    reinitIframe: utils.debounce((vm) => {
      vm.removeIframe()
      vm.initIframe()
    }, 200),
    initIframe () {
      this.iframeEl = document.createElement('iframe')
      this.iframeEl.setAttribute(
        'style',
        'visibility: hidden; position: absolute; top: -99999px; border: none; overflow: hidden'
      )
      if (this.config.src) { this.iframeEl.setAttribute('iframe-src', this.config.src) }
      if (this.config.crossorigin) { this.iframeEl.setAttribute('crossorigin', this.config.crossorigin) }
      if (this.config.target) { this.iframeEl.setAttribute('target', this.config.target) }
      if (this.config.allow) { this.iframeEl.setAttribute('allow', this.config.allow) }
      if (this.config.name) { this.iframeEl.setAttribute('name', this.config.name) }
      if (this.config.title) { this.iframeEl.setAttribute('title', this.config.title) }
      if (this.config.sandbox) { this.iframeEl.setAttribute('sandbox', this.config.sandbox) }
      this.iframeEl.setAttribute('height', '100%')
      this.iframeEl.setAttribute('width', '100%')
      this.$el.appendChild(this.iframeEl)
      this.setIframeUrl()
    },
    listenForEvents () {
      // Create IE + others compatible event handler
      const eventMethod = window.addEventListener
        ? 'addEventListener'
        : 'attachEvent'
      const eventer = window[eventMethod]
      const messageEvent =
        eventMethod === 'attachEvent' ? 'onmessage' : 'message'
      // Listen to message from child window
      eventer(
        messageEvent,
        (event) => {
          if (event.data === this.iframeLoadedMessage) {
            this.$emit('iframe-load')
            this.iframeEl.setAttribute(
              'style',
              'visibility: visible; border: none;'
            )
          }
          if (event.data === this.iframeOnReadyStateChangeMessage) {
            this.$emit('load')
          }
        },
        false
      )
    }
  },
  mounted () {
    this.listenForEvents()
    this.initIframe()
  }
}
</script>

<style lang="scss" scoped>
</style>
