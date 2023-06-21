import { Box, Button, Card, CardActions, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import { TRecipe } from '../Types/index.js';



export const RecipeCard = (recipe: TRecipe) => {

  const navigate = useNavigate();

  const handleClick = (id: string) => navigate(`/${id}/view`)
  
  return (
    <CardActionArea
        onClick={() => handleClick(recipe.id)}
    sx={{ m: 1, minWidth: 275, maxWidth: 300 }} >
        <Card>
            <CardContent>
                <CardMedia 
                    sx={{ height: 170}}
                    title={recipe.title}
                    image={`../../src/assets/images/${recipe.image}`}
                />
                <Box sx={{ mt: 1}}>
                    <Typography variant="overline" component="div">
                        {recipe.title}
                    </Typography>
                <Typography variant="body2" component="p" color="text.secondary">
                    {recipe.description}   
                </Typography>
                </Box>
            </CardContent>
            <CardActions
            >
                <Button
                    onClick={() => handleClick(recipe.id)}
                    size="small" color="primary">Go</Button>
            </CardActions>

        </Card>
    </CardActionArea>
  )
}


