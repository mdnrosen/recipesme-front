import { TRecipe } from "../Types/index.js"
import { Box, Container, Toolbar, Typography } from "@mui/material"



export const RecipeDetails = (recipe: TRecipe) => {
  return (
    <Container>
        <Box
            sx={{ margin: "auto", width: { xs: "90%", md: "50%" }}}
        >
            <Box
                component="img"
                src={`../../src/assets/images/${recipe.image}`}
                sx={{ margin: 'auto', width: '100%', height: {xs: "auto", md: "50%"}, objectFit: "cover"}}
            >
        </Box>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {recipe.title}
                </Typography>
            </Toolbar>
            <Toolbar>
                <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                    {recipe.description}
                </Typography>
            </Toolbar>
            <hr />
            <Box sx={{ mt: 1}}> 
                <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
                    Ingredients
                </Typography>
                {recipe.ingredients?.map((ing, i) => (
                    <Typography key ={i} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        {`${ing.amount} ${ing.unit || ''} ${ing.item}`}
                    </Typography>
                ))}
            </Box>
            <hr />
            <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>METHOD</Typography>
            <Box sx={{ mt: 1}} component="ol"> 
                {recipe.steps?.map((step, i) => (
                    <Typography key ={i} variant="body2" component="li" sx={{ flexGrow: 1, mb: 1 }}>{step}</Typography>
                ))}
   
            </Box>
        </Box>

    </Container>
  )
}
