import { Garbage } from '@/types/models'

export interface S {
  uid: string
  garbageList: Garbage[]
  isNotificated: boolean
}

export interface G {
  getGarbageList: Garbage[]
  getIsNotificated: boolean
}

export interface RG {
  'users/getGarbageList': G['getGarbageList']
  'users/getIsNotificated': G['getIsNotificated']
}

export interface M {
  setGarbageList: void
  setIsNotificated: void
  setUid: void
}

export interface RM {
}

export interface A {
  fetchUser: void
  updateIsNotificated: void
}

export interface RA {
  'users/fetchUser': A['fetchUser']
  'users/updateIsNotificated': A['updateIsNotificated']
}