<template>
  <div class="home">
    <nav></nav>
    <section class="demo">
      <div class="ele-container" >
        <nav>
          H: <input type="text" v-model="height">
          W: <input type="text" v-model="width">
          Widget: <select name="" id="" v-model="selectedComponent" @change="setConfigData">
            <option v-for="widget in getWidgetList" :key="widget.id" :value="widget">{{widget}}</option>
          </select>
        </nav>
        <div v-if="selectedComponent !== 'xxxxxxxxnoComponent'" :style="{height, width, margin: '70px auto'}">
          <component :is="ConfigData.component" :config="ConfigData" :data="data"/>
        </div>
      </div>
      <div>
        <div class="pos-bar">
        <button @click="opentab = 'config'" :class="opentab === 'config' ? 'active': ''">Config</button>
        <button @click="opentab = 'property'" :class="opentab === 'property' ? 'active': ''">Property</button>
        <button @click="opentab = 'method'" :class="opentab === 'method' ? 'active': ''">Method</button>
        <button @click="opentab = 'datasource'" :class="opentab === 'datasource' ? 'active': ''">Datasource</button>
        <button @click="opentab = 'datasocket'" :class="opentab === 'datasocket' ? 'active': ''">Datasocket</button>
        <button @click="opentab = 'collabWidget'" :class="opentab === 'collabWidget' ? 'active': ''">Collab Widget</button>
        <button @click="opentab = 'log'" :class="opentab === 'log' ? 'active': ''">Log</button>
      </div>
      <div class="ele-container">
        <vue-json-editor v-if="opentab === 'config'" :mode="'code'" v-model="ConfigData" :show-btns="false" :expandedOnStart="true"></vue-json-editor>
        <vue-json-editor v-else :mode="'code'" v-model="logic" :show-btns="false" :expandedOnStart="true"></vue-json-editor>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import vueJsonEditor from 'vue-json-editor'
export default {
  name: 'Home',
  components: {
    vueJsonEditor
  },
  data: () => ({
    fixed: true,
    selectedComponent: 'xxxxxxxxnoComponent',
    opentab: 'config',
    ConfigData: {},
    height: '250px',
    width: '250px',
    data: [],
    json: {
      msg: 'demo of jsoneditor'
    }
  }),
  computed: {
    logic: {
      get () {
        switch (this.opentab) {
          case 'property': return this.$store.state.logic.property
          case 'method': return this.$store.state.logic.method
          case 'datasource': return this.$store.state.logic.datasource
          case 'datasocket': return this.$store.state.logic.datasocket
          case 'collabWidget': return this.$store.state.collabWidget.collabWidgets
          case 'log': return ''
          default: return {}
        }
      },
      set (val) {
        switch (this.opentab) {
          case 'property': this.$store.state.logic.property = val; break
          case 'method': this.$store.state.logic.method = val; break
          case 'datasource': this.$store.state.logic.datasource = val; break
          case 'datasocket': this.$store.state.logic.datasocket = val; break
          case 'collabWidget': this.$store.state.collabWidget.collabWidgets = val; break
          default: return {}
        }
      }
    },
    getWidgetList () {
      return window.wbWidgetsList
    },
    getData () {
      return [2, 3, 4, 5, 6, 7]
    }
  },
  methods: {
    setConfigData () {
      this.ConfigData = window.wbWidgetJson[this.selectedComponent]
    }
  },
  mounted: function () {
    var editors = document.getElementsByClassName('jsoneditor-vue')
    for (var i = 0; i < editors.length; i++) {
      editors[i].style.height = '500px'
    }
    setInterval(() => {
      this.data.push(Math.floor(Math.random() * (100 - 0 + 1) + 0))
      if (this.data.length > 5) {
        this.data.shift()
      }
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  & > div {
    width: 50%;
    height: calc(100vh - 100px);
  }
  .options {
    & > button {
      margin: 5px;
    }
  }
  .jsoneditor-vue {
    height: 800px;
  }
  .editor {
      height: 800px;
  }
  .ele-container {
    & > div {
      border: 1px solid lightblue
    }
  }
}
</style>
