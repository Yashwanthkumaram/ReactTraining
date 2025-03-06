import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


export default function MediaCover(props) {
    // console.log(props.project.name)
  return (
    // <Box
    //   component="ul"
    //   sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    // >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>

          <img
            src={props.image}
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            textColor="#fff"
            sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
          >
            {props.project.name}
          </Typography>
        </CardContent>
      </Card>
     
    // </Box>
  );
}
