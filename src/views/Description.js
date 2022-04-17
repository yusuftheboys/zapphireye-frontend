import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Paper, Grid, Container } from '@mui/material';
import ListTable from './ListTable';

const Description = () => {
    const { state } = useLocation()
    console.log(state)
    return (
    <Box sx={{ display: 'flex' }}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Description
                </Typography>
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Solution
                </Typography>
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <ListTable />
                </Paper>
              </Grid>
            </Grid>
          </Container>
    </Box>
  
  )
}

export default Description