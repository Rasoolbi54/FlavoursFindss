import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar"
import SearchPage from "./pages/SearchPage"
import Favorites from "./pages/Favorites"
import RecipeDetails from "./components/RecipeDetails"


function App() {

  return (
   <div className="flex">
      <SideBar/>

      <Routes>
        <Route path="/" element={ <SearchPage/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
        <Route path="/recipe/:id" element={<RecipeDetails />}></Route>
      </Routes>
     
   </div>
  )
}

export default App
