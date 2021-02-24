import { Mutations, Actions, Getters } from 'vuex'
import { S, G, M, A } from '~/store/users/type'
import firebase from '@/plugins/firebase'
import { Garbage, Document } from '@/types/models'

const userCollection = firebase.firestore().collection('users')

export const initialState = {
  uid: '',
  garbageList: [],
  isNotificated: true
}

export const state = (): S => Object.assign({}, initialState)

export const getters: Getters<S, G> = {
  getGarbageList (state: S): Garbage[] {
    return state.garbageList
  },
  getIsNotificated (state: S): boolean {
    return state.isNotificated
  }
}

export const mutations: Mutations<S, M> = {
  setUid (state: S, uid: string) {
    state.uid = uid
  },
  setGarbageList (state: S, list: Garbage[]) {
    state.garbageList = list
  },
  setIsNotificated (state: S, bool: boolean) {
    state.isNotificated = bool
  }
}

export const actions: Actions<S, A, G, M> = {
  async fetchUser ({ commit }, uid: string) {
    commit('setUid', uid)
    const res = await userCollection.doc(uid).get()
    const obj: any = res.data()
    if (obj !== void 0) {
      commit('setGarbageList', obj.days)
      commit('setIsNotificated', obj.isNotificated)
    }
  },
  async updateIsNotificated ({ commit, state }, bool: boolean) {
    await userCollection.doc(state.uid).update({
      isNotificated: bool
    })
    commit('setIsNotificated', bool)
  },
  async setData ({ state, commit }, payload: Document) {
    commit('setGarbageList', payload.days)
    commit('setIsNotificated', payload.isNotificated)
    await userCollection.doc(state.uid).set(payload)
  }
}
