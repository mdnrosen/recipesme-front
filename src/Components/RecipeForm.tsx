
import { useEffect, useState } from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import { TIngredients, TRecipe } from '../Types/index.js'

export const RecipeForm = (recipe: TRecipe) => {
    const [ data, setData ] = useState<TRecipe>(recipe || {})
    const [ ingInput, setIngInputs ] = useState<TIngredients[]>([])
    const [ stepsInputs, setStepInputs ] = useState<string[]>([])


    useEffect(() => {
        if (recipe) {
            setData(recipe)
            setIngInputs(recipe?.ingredients || [{ item: '', amount: '', unit: '' }])
            setStepInputs(recipe?.steps || [''])            
        }
    },[])


    useEffect(() => {
        setData({...data, steps: stepsInputs})
    },[stepsInputs])


    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(data)

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (name === 'tags') {
            e.target.checked ? data?.tags?.push(value) : data?.tags?.splice(data?.tags?.indexOf(value), 1)
            return
        }
        setData({...data, [name]: value})
    }
    const tags = ['Healthy', 'Quick and Easy', 'Showstopper', 'Veggie', 'Cheat day', 'One Pot Wonder', 'Midweek']


  return (
    <Box
        component="form"
        onSubmit={handleSubmit}
        onChange={handleChange}
        sx={{ margin: "auto", width: { xs: "90%", md: "50%" }, mt: 2}}
    >        
        <TextField 
            sx={{ mb: 2 }}
            fullWidth
            name="title"
            label="Title"
            variant="outlined"
            value={data?.title || ""}
        />
        <TextField 
            sx={{ mb: 2 }}

            fullWidth
            name="description"
            label="Description"
            variant="outlined"
            value={data?.description  || ""}
        />
        <FormGroup sx={{ display: 'flex', flexWrap: 'wrap', mb: '2'}}>
            {tags.map((tag, i) => (
                <FormControlLabel
                    name="tags"
                    label={tag}
                    key={i}
                    control={
                        <Checkbox 
                            value={tag}
                            checked={data?.tags?.includes(tag)}
                        />}
                />
            ))}
        </FormGroup>

        {/* <FormGroup sx={{ mb: 2}}>
            {stepsInputs.map((step, i) => (
                <TextField 
                    name="steps"
                    label={`Step ${i + 1}`}
                    value={step || ''}
        
                />
            ))}
 
        </FormGroup> */}


    </Box>
  )
}
