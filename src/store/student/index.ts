import axios from "axios"
import { nanoid } from "nanoid"
import { Module } from "vuex"

const module: Module<any, any> = {
    namespaced: true,
    actions: {
        // 从远程服务器获取人的姓名并添加
        addPersonFromServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', response.data)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            const personObj = {id: nanoid(), name: value}
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {}
}

export default module;