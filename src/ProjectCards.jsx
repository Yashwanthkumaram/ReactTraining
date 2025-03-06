import MediaCover from "./Projects";
import React, { useState, useEffect } from "react";

import {
    Box,
  } from "@mui/material";

const Projects =()=>{

    const [Projects, setProjects] = useState([
        {
          id: 1,
          name: "PeerJs",
          image:
            "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800",
        },
        {
          id: 2,
          name: "Project 2",
          image:
            "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800",
        },
        {
          id: 3,
          name: "blah blah",
          image:
            "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800",
        },
        {
          id: 4,
          name: "Halo ",
          image:
            "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800",
        },
    
        {
          id: 5,
          name: "Project 4",
          image:
            "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800",
        },
      ]);

      return(
        <Box
        component="ul"
        sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
      >
        {Projects.map((ele) => {
          return <MediaCover key={ele.id} project={ele} />;x  
        })}
      </Box>
      )

}

export default Projects;
