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
}

export interface RM {
}

export interface A {
}

export interface RA {
}