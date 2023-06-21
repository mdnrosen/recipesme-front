import React from 'react'


import { Box, Toolbar, Typography } from '@mui/material'
import { RecipeForm } from '../Components/RecipeForm.js'


export const CreateRecipe = () => {
  return (
    <Box
        
    >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="overline" component="div" >Create Recipe</Typography>
        </Toolbar>
        <hr />
        <RecipeForm />
    </Box>

  )
}
