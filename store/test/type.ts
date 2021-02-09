export interface S {
  sample: string
}

export interface G {
  getSample: string
}

export interface RG {
  'test/getSample': G['getSample']
}

export interface M {
  setSample: string
}

export interface RM {
}

export interface A {
  fetchTest: {}
}

export interface RA {
  'test/fetchTest': A['fetchTest']
}