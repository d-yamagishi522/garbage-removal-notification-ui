import { Mutations, Actions, Getters } from 'vuex'
import { S, G, M, A } from '@/store/test/type'
import firebase from '@/plugins/firebase'

export const initialState = {
  sample: ''
}

export const state = (): S => Object.assign({}, initialState)

export const getters: Getters<S, G> = {
  getSample (state: S): string {
    return state.sample
  }
}

export const mutations: Mutations<S, M> = {
  setSample (state: S, str: string) {
    state.sample = str
  }
}

export const actions: Actions<S, A, G, M> = {
  async fetchTest ({ commit }) {
    const res = await firebase.firestore().collection('test').doc('XQRvojoXT4ugnZ5NKn6G').get()
    const obj: any = res.data()
    commit('setSample', obj.sample)
  }
}
