import React, { createContext, useReducer } from 'react'

// 空配列を初期値として設定する。
const initialState = {
  popular: []
}

// reducer関数を定義。基本的にreducer関数は２つの値を取り、１つの値を返すことを意味する。
// 今回はstateとactionを受け取れるようにする。関数の内部はswitch文で処理を分けていく。
const reducer = (state, action) => {
  switch(action.type) {
    // SET_POPULAR内では受け取ったaction.pauloadをpopularにセットしてreturnで返す。
    case 'SET_POPULAR':
      return { popular: action.payload.popular }
    // defaultではstateのみを返す。
    default:
      return state
  }
}

// createContextでStoreを作成する。
export const Store = createContext({
  // storeにはそれぞれ名前をつけてstateとdispatch関数の初期値を渡す。
  globalState: initialState,
  setGlobalState: () => null
})

// propsでchildren.nodeを受け取る。
export const StoreProvider = ({children}) => {
  // useReducerにinitialStateとreducerを渡して、stateとdispatch関数を生成する。
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    // Providerでchild.nodeをアップしていく。Providerはstoreオブジェクトに生成されているので、Store.Providerとして呼び出す。
    // 呼び出す際に、valueをセットする際に、child.nodeとして渡されるconsumer componentでvalue値を参照することができる。
    // value値にはglobalStateとsetGlobalState関数を渡す。
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  )
}
