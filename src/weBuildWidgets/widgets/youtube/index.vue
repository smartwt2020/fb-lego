<template>
  <div :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement && valid">
    <iframe
      height="100%"
      width="100%"
      loading="lazy"
      sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
      class="embed-responsive-item"
      frameborder="0"
      allowfullscreen
      :autplay="config.autoplay"
      :src="url"
    ></iframe>
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
export default {
  mixins: [common, styleMixin],
  data () {
    return {
      valid: false,
      url: '',
      videos: [
        {
          reg: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/i,
          url: 'https://www.youtube.com/embed/$5',
          params: {
            'picture-in-picture': 1,
            accelerometer: 1,
            gyroscope: 1
          }
        },
        {
          reg: /^.*vimeo.com\/(\d+)($|\/|\b)/i,
          url: 'https://player.vimeo.com/video/$1',
          params: {
            title: 0,
            byline: 0,
            portrait: 0
          }
        },
        {
          reg: /^.*(?:\/video|dai.ly)\/([A-Za-z0-9]+)([^#\\&\\?]*).*/i,
          url: 'https://www.dailymotion.com/embed/video/$1',
          params: {
            autoplay: 0
          }
        },
        {
          reg: /^.*coub.com\/(?:embed|view)\/([A-Za-z0-9]+)([^#\\&\\?]*).*/i,
          url: 'https://coub.com/embed/$1',
          params: {
            autoplay: 0
          }
        }
      ]
    }
  },
  watch: {
    config: {
      deep: true,
      handler () {
        this.parse()
      }
    }
  },
  computed: {
    getAllow () {
      const allow = []
      this.config.autoplay && allow.push('autoplay')
      return allow
    }
  },
  methods: {
    parse () {
      if (this.config.src) {
        for (let i = 0; i < this.videos.length; i++) {
          const v = this.videos[i]
          var m = v.reg.exec(this.config.src)
          if (m) {
            var params = Object.assign({}, v.params, {
              autoplay: 1
            })
            var query = Object.keys(params)
              .map((key) => key + '=' + params[key])
              .join('&')
            var and = v.url.indexOf('?') >= 0 ? '&' : '?'
            this.url = this.config.src.replace(v.reg, v.url) + and + query
            this.valid = true
            return
          }
        }
      }
      this.valid = false
    }
  },
  mounted () {
    this.parse()
  }
}
</script>
