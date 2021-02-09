import 'vuex'

import * as Test from '@/store/test/type'

type RootState = {
  test: Test.S
}

type RootGetters = Test.RG
type RootMutations = Test.RM
type RootActions = Test.RA
