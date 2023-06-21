import { Box, TextField } from '@mui/material'

export const RecipeForm = () => {
  return (
    <Box
        sx={{ margin: "auto", width: { xs: "90%", md: "50%" }, mt: 2}}
    >        <TextField fullWidth />
    </Box>
  )
}
