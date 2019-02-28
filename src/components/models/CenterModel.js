import TabData from './data/center-tab-data.json'

export default {
  getTabList() {
    return new Promise(resolve => {
      resolve(TabData.datas)
    })
  }
}