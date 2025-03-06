import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Box,
  CircularProgress,
  Container
} from '@mui/material';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="sticky" sx={{ mb: 2, background: '#1976d2', boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Portfolio</Typography>
        <Box>
          <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
          <Button color="inherit" onClick={() => scrollToSection('projects')}>Projects</Button>
          <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const Portfolio = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([
    { name: "PeerJs", image: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" },
    { name: "Project 2", image: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" }
  ]);

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
      <Navbar />
      
      <Container>
        <section id="about" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Card sx={{ maxWidth: 400, margin: 'auto', p: 3, boxShadow: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.image || 'https://via.placeholder.com/150'} sx={{ width: 120, height: 120, mb: 2 }} />
              <Typography variant="h5" fontWeight="bold">{user.firstName} {user.lastName}</Typography>
              <Typography variant="body2" color="text.secondary">{user.company.title} - {user.company.department}</Typography>
              <Typography variant="body2" color="text.secondary">{user.company.name}</Typography>
              <Typography variant="body2" color="text.secondary">{user.address.city} | {user.birthDate}</Typography>
              <Typography variant="body2" color="text.secondary">{user.email}</Typography>
            </Box>
          </Card>
        </section>
        
        <section id="projects">
          <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: 3 }}>Projects</Typography>
          <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={3} justifyContent="center">
            {projects.map((project, index) => (
              <Card key={index} sx={{ maxWidth: 345, boxShadow: 4 }}>
                <CardActionArea>
                  <Box component="img" src={project.image} alt={project.name} sx={{ width: '100%', height: 180, objectFit: 'cover' }} />
                  <CardContent>
                    <Typography variant="h6" align="center">{project.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </section>
        
        <section id="contact" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>Contact</Typography>
          <Typography variant="body1" color="text.secondary">For inquiries, reach out via email.</Typography>
        </section>
      </Container>
    </>
  );
};

export default Portfolio;