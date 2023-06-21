import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'



export const NotFound = () => {

    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                That page has moved or doesn't exist
            </Typography>
            <Typography variant="overline">
            <Button onClick={() => navigate('/')}>go back</Button>
            </Typography>
        </Box>
    )
}
