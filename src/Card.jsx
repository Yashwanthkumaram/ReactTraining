// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import { useState  ,useEffect} from 'react'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';


// export default function MultiActionAreaCard() {
//      const [data, setdata] = useState([]);
//       const [loaded, setloaded] = useState(false);
    
    
    
//       useEffect(() => {
//         console.log("Side Effect");
//         fetch("https://dummyjson.com/users/?limit=1")
//           .then((response) => response.json())
//           .then((data) => setdata(data))
//           .then(() => {
//             // setdata(data);
//             setloaded(true);
//             console.log("aab");
//             console.log("aab1", loaded);
//           });
//       }, []);
    
//       console.log("aab12", loaded);
    
//       if (!loaded) return <div> Wait...........</div>;
//       if (loaded) {
//         console.log(data);
//       }
//       const user = data["users"][0];
//       {
//         console.log(user);
//       }
    


//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//       <Stack direction="row" spacing={2}>
    
//       <Avatar
//         alt="Remy Sharp"
//         src={user.image}
//         sx={{ width: 56, height: 56 }}
//       />
//     </Stack>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//           {user.firstName} {user.lastName}
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           {user.company.title} - {user.company.department}
//           {user.company.name} {user.company.name} {user.address.city}  {user.birthDate} {user.email}
//           {user.username}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
      
//     </Card>
//   );
// }


import React, { useState, useEffect } from 'react';
// import Box from '@mui/joy/Box';
import MediaCover from './Projects';
import ValidatingForm from './assets/email';



import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Box,
  CircularProgress
} from '@mui/material';

const MultiActionAreaCard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Projects, setProjects] = useState([
    {name: "PeerJs", image : "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"},
    {name: "Project 2", image : "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"},
    {name: "PeerJs", image : "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"},
    {name: "PeerJs", image : "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"},

    {name: "Project 2", image : "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"}


])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users/?limit=1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { users } = await response.json();
        setUser(users[0]);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <>
  
  <Card 
  lg={{ 
    maxWidth: 345, 
    margin: 'auto',  
    width: { xs: '100%', md: '90%' }, 
    display: 'flex', 
    flexDirection: { xs: 'column', md: 'row' }, 
    alignItems: 'center', 
    boxSizing: 'border-box', 
  }}
>
  <CardActionArea sx={{ display: 'flex', width: '100%' }}>
    <Box 
      sx={{ 
        padding: 2, 
        display: 'flex', 
        justifyContent: 'center', 
        flex: 1, 
        maxWidth: { xs: '100%', md: '150px' }, 
      }}
    >
      <Avatar 
        alt={`${user.firstName} ${user.lastName}`} 
        src={user.image} 
        sx={{ width: 150, height: 150 }} 
      />
    </Box>
    <CardContent sx={{ flex: 2 }}>
      <Typography gutterBottom variant="h5" component="div" align="center">
        {user.firstName} {user.lastName}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {`${user.company.title} - ${user.company.department}`}
        <br />
        {user.company.name}
        <br />
        {user.address.city}
        <br />
        {user.birthDate}
        <br />
        {user.email}
        <br />
        {user.username}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>


        <br></br>
        <br></br>

        <Box
          component="ul"
          sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
        {Projects.map(ele =>{
            return <MediaCover project= { ele}/>
        })}
        {/* <MediaCover project= {     {name: "PeerJs", image : "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"}}/> */}

        {/* <MediaCover/> */}

        </Box>
        <br/>
        <br />
       <ValidatingForm/>
       
    
    </>
    
  );
};

export default MultiActionAreaCard;
