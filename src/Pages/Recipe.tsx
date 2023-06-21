import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../assets/seeds.json'
import { Box, CircularProgress } from '@mui/material'
import { TRecipe } from '../Types/index.js'
import { RecipeDetails } from '../Components/RecipeDetails.js'


export const Recipe = () => {
    const [recipe, setRecipe] = useState<TRecipe | null>(null)
    const params = useParams()

    useEffect(() => {
        // @ts-ignore
        setRecipe(data.find(d => d.id === params.id))
    },[])

    if (!recipe) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'  }}>
            <CircularProgress />
        </Box>
      )
    } else {
        return (
            <RecipeDetails key={`${recipe.id}-dts`} {...recipe}/>
        )
    }
}
