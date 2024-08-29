// src/data/projects.js
const projects = [
    {
      id: 1,
      title: "Flight Volcano Simulator",
      description: "Flight simulator along with an erupting volcano particle system! With collision detection between the lava bombs, plane, and ground, your aim is to fly around and crash. The game was developed using C++ and OpenGL.",
      category: "Graphics",
      // link: "https://github.com/yourusername/3d-graphics-engine",
      video: '/media/flight_sim.mp4',
    },
    {
      id: 2,
      title: "Autonomous Robot",
      description: "A robot that navigates obstacles autonomously.",
      category: "Robotics",
      // link: "https://github.com/yourusername/autonomous-robot"
    },
    {
      id: 3,
      title: "Personal Website",
      description: "A personal portfolio website built with HTML, CSS, and JavaScript.",
      category: "Other",
      // link: "https://github.com/yourusername/personal-website"
    },
    {
      id: 4,
      title: "Character Animations",
      description: "Rendered a given bounding volume hierarchy (BVH) with cylinders to produce a visual skeleton. Applied animation cycles on the skeleton and achieved smooth transitions by blending animations using linear interpolation.",
      category: "Graphics",
      link: "https://github.com/yourusername/personal-website",
      video: '/media/character_rigging.mp4',

    },
    {
      id: 5,
      title: "OpenGL Rasterisation",
      description: "Terrain renderer using a terrain height map. Dynamic terrain height and light direction. Applied Phong shading model using material textures and normal maps. Added a skybox and billboard vegetation.  Implemented advanced techniques such as dynamic level of detail and animated water, ensuring accurate reflections of skybox present in the water. ",
      category: "Graphics",
      // link: "https://github.com/yourusername/personal-website",
      video: '/media/rasterisation_new.mp4',

    }
  ];
  
  export default projects;