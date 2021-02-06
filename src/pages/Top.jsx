import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'

const Top = () => {
  // StoreからglobalStateとdispatch関数を参照していくが、参照にはuseContextを使用し、useContextにインポートしたStoreを渡すことで、値を参照することができる。
  const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    // コンポーネントがレンダリングされたタイミングでfetchPopularData関数を実行し、youtubeAPIからデータを取得する流れ。
    fetchPopularData().then(res => {
      console.log('data', res)
      // 取得したデータをsetGlobalState関数を使って保存する。
      // setGlobalStateには処理を分けるためにtypeを指定する。
      // payloadにはpolularが必要なので、popularを追加する。popularには取得したリストのみを取得したいのでres.data.itemsとする。
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })
  }, [])
  return (
    // Layoutコンポーネントでラップすることで、囲われたDOMが追加したchildren.nodeとして、Layout.jsxに渡される。
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.default.url}
                title={popular.snippet.title}
              />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top