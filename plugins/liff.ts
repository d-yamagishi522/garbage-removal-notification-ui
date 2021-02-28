import liff from '@line/liff'

if (!liff.id) {
  const liffId: string = process.env.liffId as string
  // liffの初期化
  liff.init({ liffId })
}

export default liff