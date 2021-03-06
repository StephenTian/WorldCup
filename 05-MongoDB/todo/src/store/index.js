/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-2-2
 **/

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { httpadd, httpreload, httpremove } from '../http/control.js'

const defaultTodo = [{
        id: 4,
        subject: '1Eating'
    },
    {
        id: 5,
        subject: '2Loving'
    },
    {
        id: 6,
        subject: '3Preying'
    }
]

function indexById(todos, id) {
    for (var i = 0; i < todos.length; i++) {
        if (id === todos[i].id) {
            return i
        }
    }
    return -1
}

// import axios from 'axios'
export default new Vuex.Store({
    state: {
        msg: 'Todo List',
        todos: defaultTodo
    },
    // mutations 提供方法
    mutations: {
        add(state, subject) {
            httpadd(subject, function(todo) {
                state.todos.push(todo)
            })
        },
        remove(state, id) {
            httpremove(id, function() {
                state.todos.splice(indexById(state.todos, id), 1)
            })
        },
        reload(state) {
            httpreload(function(todos) {
                state.todos = todos
            })
        }
    },
    // 为了避免阻塞客户端主线程，提供的异步方法
    // actions 对象内的方法和功能和 mutations 一致, 但是是异步的
    // context.commit() 语法，提供 actions 和 mutations 方法的对接
    // 第一个参数是 mutations 函数名, 之后的参数作为 前面函数名的参数 传给 mutations 方法
    actions: {
        add: (context, link) => {
            context.commit("add", link)
        },
        remove: (context, link) => {
            context.commit("remove", link)
        },
        reload: (context) => {
            context.commit("reload")
        }
    }
})