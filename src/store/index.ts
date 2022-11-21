import { createStore } from 'vuex'
import count from './count'
import student from './student'

export default createStore({
  modules: {
    count, student
  }
})
