
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../assets/seeds.json'
import { TRecipe } from '../Types/index.js'

import { Box, Toolbar, Typography } from '@mui/material'
import { RecipeForm } from '../Components/RecipeForm.js'


export const EditRecipe = () => {
    const [recipe, setRecipe] = useState<TRecipe | null>(null)
    const params = useParams()

    useEffect(() => {
        setRecipe(data.find(d => d.id === params.id))
    },[])

  return (
    <Box
        
    >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="overline" component="div" >Create Recipe</Typography>
        </Toolbar>
        <hr />
        <RecipeForm  {...recipe} />
    </Box>

  )
}
