import { createStore } from 'vuex'
const modulesFiles = import.meta.globEager("./modules/*.ts")
const modules = {}
for (const key in modulesFiles) {
  if(modulesFiles[key].default){ //防止引入空文件
    modules[key.replace(/(\.\/module\/|\.js)/g, '')] = modulesFiles[key].default
  }
}
Object.keys(modules).forEach(item => {
  modules[item]['namespaced'] = true
})
const store = createStore({
  modules,
  state () {
    return {
      count: 0
    }
  },
})

export default store
