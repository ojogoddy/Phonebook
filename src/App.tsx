import React from 'react'
import Globalstyles from './Component/Globalstyles'
import Header from './Component/Header'
import MainScreen from './Component/MainScreen'

const App:React.FC = () => {
  return (
    <div>
      <Globalstyles />
      <Header />
      <MainScreen />
    </div>
  )
}

export default App