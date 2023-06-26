import { TRecipe } from "../Types/index.js"
import { Button, Box, Container, Toolbar, Typography, Chip, ListItem, ListItemText, ListItemSecondaryAction } from "@mui/material"
import { Favorite, FavoriteBorder } from '@mui/icons-material';

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
            <ListItem
                secondaryAction={
                    <FavoriteBorder sx={{ color: 'grey'}} />
                }
            >
                <ListItemText 
                    primary={
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {recipe.title}
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body2" component="div" color="text.secondary" sx={{ flexGrow: 1 }}>
                            {recipe.description}
                        </Typography>
                    }
                />
            </ListItem>

            <hr />
            <Box sx={{ mt: 1}}> 
                <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
                    Ingredients
                </Typography>
                {recipe.ingredients?.map((ing, i) => (
                    <Typography key ={i} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        {`${ing.amount}${ing.unit || ''} ${ing.item}`}
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
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1}}>
                {recipe.tags?.map((tag, i) => (
                    <Chip key={i} label={tag} sx={{mr: 1}} />
                ))}
            </Toolbar>
        </Box>
        <Button>Edit</Button>

    </Container>
  )
}
