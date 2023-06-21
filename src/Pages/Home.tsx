import React from 'react';
import { Box, Typography, Toolbar } from '@mui/material'
import recipes from '../assets/seeds.json'
import { RecipeCard } from '../Components/RecipeCard.js';


export const Home = () => {
  return (
    <Box>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="overline" component="div" >Welcome to RecipesMe</Typography>
        </Toolbar>
        <hr />

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            {recipes.map(recipe => (
                <RecipeCard  key={recipe.id} {...recipe} /> 
            ))}

        </Box>
    </Box>
  )
}
