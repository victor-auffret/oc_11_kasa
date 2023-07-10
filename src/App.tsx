import { Outlet } from 'react-router-dom'

import './App.css'
import { NavMenu } from './components/nav-menu'
import { PiedComponent } from './components/pied'

const App = () => {

  return (
    <div className="app">
      <NavMenu />
      <main id="main">
        <Outlet />
      </main>
      <PiedComponent />
    </div>
  )
}

export default App
