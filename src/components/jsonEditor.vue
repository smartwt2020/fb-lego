<template>
  <div class="json-editor">
    <textarea ref="editor" v-model="stringObject" name="" id="" cols="30" rows="10" @keydown="keydown" @change="change"></textarea>
    <br>
    {{this.error}}
  </div>
</template>

<script>
export default {
  name: 'JsonEditor',
  props: {
    value: {
      type: [String, Number, Object, Array, Boolean],
      default: () => ([])
    }
  },
  data: () => ({
    stringObject: '',
    type: 'object',
    error: ''
  }),
  watch: {
    value: {
      deep: true,
      handler () {
        this.setStringObject()
      }
    }
  },
  methods: {
    getCursorPos (input) {
      if ('selectionStart' in input && document.activeElement === input) {
        return {
          start: input.selectionStart,
          end: input.selectionEnd
        }
      } else if (input.createTextRange) {
        var sel = document.selection.createRange()
        if (sel.parentElement() === input) {
          var rng = input.createTextRange()
          rng.moveToBookmark(sel.getBookmark())
          for (var len = 0;
            rng.compareEndPoints('EndToStart', rng) > 0;
            rng.moveEnd('character', -1)) {
            len++
          }
          rng.setEndPoint('StartToStart', input.createTextRange())
          for (var pos = { start: 0, end: len };
            rng.compareEndPoints('EndToStart', rng) > 0;
            rng.moveEnd('character', -1)) {
            pos.start++
            pos.end++
          }
          return pos
        }
      }
      return -1
    },
    keydown (e) {
      if (e.keyCode === 9) { // tab was pressed
        e.preventDefault()
        const pos = this.getCursorPos(this.$refs.editor)
        this.stringObject = this.stringObject.substring(0, pos.start) + '  ' + this.stringObject.substring(pos.start)
      }
    },
    change (e) {
      try {
        const object = JSON.parse(this.stringObject)
        this.$emit('input', object)
        this.$emit('chnage')
        this.error = null
      } catch (e) {
        console.log(e)
        this.error = e
      }
    },
    setStringObject () {
      if (typeof this.value === 'object') {
        this.stringObject = JSON.stringify(this.value, null, '  ')
      } else {
        this.type = typeof this.value
      }
    }
  },
  mounted () {
    this.setStringObject()
  }
}
</script>

<style lang="scss" scoped>

</style>
