
import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.js'
import { NotFound } from './pages/NotFound.js'
import { Navbar } from './components/Navbar.js'
import { Recipe } from './pages/Recipe.js'
import { CreateRecipe } from './Pages/CreateRecipe.js'
import { EditRecipe } from './Pages/EditRecipe.js'



import './App.css'
function App() {

  return (
    // JSX ELEMENTS
    <div>
      <BrowserRouter>
        <Navbar />
        {/* Empty toolbar to space navbar */}

        <Box sx={{ mt: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<CreateRecipe />} />
            <Route path="/:id/edit" element={<EditRecipe />} />
            <Route path="/:id/view" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
