import React from 'react'
import Header from '../Header/Header'

const Layout = ({children}) => { //propsでchildren.nodeを受け取れるようにする。
  return (
    <div>
      <Header />
      {/* JSX内にchildren.nodeを表示させる */}
      {children} 
    </div>
  )
}

export default Layout