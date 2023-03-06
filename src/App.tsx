import { defineComponent } from 'vue'
import { NLayoutContent, NLayout, darkTheme, NConfigProvider, NSpace } from 'naive-ui'

export default defineComponent({
  name: 'AppComponent',
  render() {
    return (
      <NConfigProvider theme={darkTheme}>          
        <router-view />
      </NConfigProvider>
    )
  }


})
