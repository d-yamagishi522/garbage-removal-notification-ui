import { Mutations, Actions, Getters } from 'vuex'
import { S, G, M, A } from '@/store/test/type'

export const initialState = {
  sample: 'sample'
}

export const state = (): S => Object.assign({}, initialState)

export const getters: Getters<S, G> = {
  getSample (state: S): string {
    return state.sample
  }
}

export const mutations: Mutations<S, M> = {}

export const actions: Actions<S, A, G, M> = {}
