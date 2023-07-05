import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
//import { Pokemon, PokemonEdit, PokemonList, PokemonsDetail } from './pages/pokemon'
import { PageNotFound } from './pages/page-not-found'

/*
<Route path="/" element={<Pokemon />} >
  <Route path="pokemon" element={<PokemonList />} />
  <Route path="pokemon/edit/:id" element={<PokemonEdit />} />
  <Route path="pokemon/:id" element={<PokemonsDetail />} />
</Route>
*/

const App = () => {

  return (
    <div>
      <nav>
        <h1>Kasa</h1>
        <ul>
          <li>
            <NavLink to={'/'}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>A propos</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>

        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  )
}

export default App
