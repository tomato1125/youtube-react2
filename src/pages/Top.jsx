import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'

const Top = () => {
  useEffect(() => {
    fetchPopularData().then(res => {
      console.log('data', res)
    })
  }, [])
  return (
    // Layoutコンポーネントでラップすることで、囲われたDOMが追加したchildren.nodeとして、Layout.jsxに渡される。
    <Layout>
      top page
    </Layout>
  )
}

export default Top