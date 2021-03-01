import liff from '@line/liff'

console.log('koko')
if (!liff.id) {
  const liffId: string = process.env.liffId as string
  console.log('liffId', liffId)
  // liffの初期化
  liff.init({ liffId })
}

export default liff