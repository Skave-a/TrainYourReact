import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const cards = [
  { id: 1, title: 'Card 1', content: 'This is card 1' },
  { id: 2, title: 'Card 2', content: 'This is card 2' },
  { id: 3, title: 'Card 3', content: 'This is card 3' },
];

// Необходимо вывести все карточки 
// одна карточка - 
      // <Grid item xs={12} sm={6} md={4} key={card.id}>
      //   <Card>
      //     <CardContent>
      //       <Typography variant="h5">{card.title}</Typography>
      //       <Typography>{card.content}</Typography>
      //     </CardContent>
      //   </Card>
      // </Grid>

const CardList: React.FC = () => (
  <Grid container spacing={2}>
    {/* вывести карточки тут  */}
  </Grid>
);

export default CardList;
