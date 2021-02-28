import { Garbage, Document } from '@/types/models'

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
  setGarbageList: Garbage[]
  setIsNotificated: boolean
  setUid: string
}

export interface RM {
}

export interface A {
  fetchUser: string
  updateIsNotificated: boolean
  setData: Document
}

export interface RA {
  'users/fetchUser': A['fetchUser']
  'users/updateIsNotificated': A['updateIsNotificated']
  'users/setData': A['setData']
}