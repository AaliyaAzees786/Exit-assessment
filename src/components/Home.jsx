import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Home = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/blogs').then((res) => {
      console.log(res);
      setRows(res.data);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
      {rows.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
        <Card key={index} sx={{ maxWidth: 345, marginLeft: '5%', marginTop: '15%' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={item.image}
            title={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div">
              {item.name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">Delete</Button>
            <Button size="small" variant="contained">Update</Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
      </Grid>
    </div>
  );
};

export default Home;
