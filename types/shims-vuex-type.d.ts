import 'vuex'
declare module 'vuex' {
  interface Store<S> {
  }
  type Getters<S, G> = {
    [K in keyof G]: (
      state: S,
      getters: G,
      rootState: RootState,
      rootGetters: RootGetters
    ) => G[K]
  }

  type Mutations<S, M> = { [K in keyof M]: (state: S, payload: M[K]) => void }

  type ExCommit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type ExDispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any
  type ExActionContext<S, A, G, M> = {
    commit: ExCommit<M>
    dispatch: ExDispatch<A>
    state: S
    getters: G
    rootState: RootState
    rootGetters: RootGetters
  }

  type Actions<S, A, G = {}, M = {}> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [K in keyof A]: (ctx: ExActionContext<S, A, G, M>, payload: A[K]) => any
  }

  interface ExStore extends Store<RootState> {
    getters: RootGetters
    commit: ExCommit<RootMutations>
    dispath: ExDispatch<RootActions>
  }
  type StoreContext = ExActionContext<
    RootState,
    RootActions,
    RootGetters,
    RootMutations
  >
}
