import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Romain Raynal",
  title: "Composer, Producer & Sound Designer",
  // Note: These Google Drive files must be set to "Anyone with the link" to be visible.
  // We use the 'thumbnail' endpoint which is more reliable for embedding images.
  avatarUrl: "https://drive.google.com/thumbnail?id=11oUP7a-5BWNktFp5q46VF9R7zudEr3kw&sz=w1000", 
  logoUrl: "https://drive.google.com/thumbnail?id=18qM3M7fZa5HOyf5FUvncmK7zZNiIWxX1&sz=w1000",
  cvUrl: "https://drive.google.com/uc?export=download&id=1QNcLKFk9t_0TkfCq297nXzUQoReq0JyB",
  contact: {
    location: "Sigean (Aude), France",
    phone: "06.63.68.03.30",
    email: "romainraynalpro@gmail.com",
    website: "www.romainraynal.fr",
    portfolioUrl: "https://www.romainraynal.fr/portfolio"
  },
  summary: "I am Romain Raynal, a composer, producer, and sound designer based in Sigean, Aude. I studied at the conservatory and worked as a freelance musician for nearly 15 years, primarily as a bassist in jazz bands. In 2017, I completed a mixing course at the CFSM Center in Lyon. Following this, I founded my studio in Occitanie. In 2021, I earned a certification in film scoring from Studio Cap' in Paris, as well as certifications in interactive music using Wwise, and more recently, FMOD. Since 2023 I'm working as a composer and sound designer in the video game industry, contributing to titles such as The Green Room Experiment, Just a Guy, and as a sound designer at Ukiyo on Transhumance. Additionally, in 2024, I worked on the F2P mobile game Need For Touring by Carfooly, and the musical shooter LavaLoop. My latest ongoing project is Maestro.",
  experience: [
    {
      id: "arcades",
      role: "Sound Designer",
      projectName: "Maestro",
      company: "Arcades, Double Jack",
      period: "Since 09/2025",
      url: "https://maestro-game.com/",
      details: [
        "Designed and produced original sound assets.",
        "Mix orchestral recordings."
      ]
    },
    {
      id: "slope",
      role: "Trainer & Content Creator",
      projectName: "FMOD Online formation",
      company: "Slope Training (France)",
      period: "Since 08/2025",
      url: "https://slopetraining.com/",
      details: [
        "Designed and produced a video training course on FMOD.",
        "Created educational content to support game audio professionals.",
        "Provide student monitoring and support."
      ]
    },
    {
      id: "universe",
      role: "Sound Designer",
      projectName: "Persevere",
      company: "Universe or Nothing Limited (Ireland)",
      period: "Since 08/2025",
      url: "https://perseveregame.com/",
      details: [
        "Designed and produced original sound assets.",
        "Responsible for FMOD implementation of sound design and music and in-game mixing."
      ]
    },
    {
      id: "awesome-1",
      role: "Composer, Sound Designer",
      projectName: "Witch Hunters",
      company: "Awesome Game Concepts (France)",
      period: "Since 02/2025",
      url: "https://store.steampowered.com/app/3528000/Witch_Hunters/",
      details: [
        "Defined and implemented in FMOD the audio direction for Witch Hunters.",
        "Created sound assets and original music."
      ]
    },
    {
      id: "fractal",
      role: "Sound Designer",
      projectName: "LavaLoop",
      company: "Fractal Edge Music / Louis Rigaud",
      period: "09/2024 - 12/2024",
      url: "https://store.steampowered.com/app/3017100/LavaLoop/",
      details: [
        "Designed and integrated sound assets.",
        "Managed integration in Wwise and mixing in Unity.",
        "Contributed to a project featured in the finals of the 2024 Game Cup."
      ]
    },
    {
      id: "awesome-2",
      role: "Audio Producer",
      projectName: "Need for Touring",
      company: "Awesome Game Concepts, Carfooly",
      period: "07/2024 - 09/2024",
      url: "https://needfortouring.com/",
      details: [
        "Defined and implemented the audio direction.",
        "Created sound assets and original music.",
        "Set up FMOD sessions and mixed the entire game audio."
      ]
    },
    {
      id: "ukiyo",
      role: "Sound Designer",
      projectName: "Transhumance",
      company: "Ukiyo Studio",
      period: "05/2024 - 07/2024",
      url: "https://store.steampowered.com/curator/44733926",
      details: [
        "Designed and recorded sound assets.",
        "Integrated assets via FMOD in Unreal Engine 5.",
        "Produced and mixed trailers and integrated music."
      ]
    },
    {
      id: "amanclo",
      role: "Sound Designer, Composer",
      projectName: "The Green Room Experiment",
      company: "Amanclo Video Games",
      period: "01/2023 - 05/2024",
      details: [
        "Created ambient sound assets for The Green Room Experiment game series.",
        "Composed non-diegetic music for in-game use and trailers."
      ]
    }
  ],
  education: [
    {
      id: "cap",
      institution: "Studio Capitale Enseignement (Paris)",
      degree: "Degree in Film Scoring",
      year: "Dec 2022",
      certificateUrl: "https://drive.google.com/file/d/1uNCf4pFDBEfr79JBhZyR20BWF3YUG7II/view?usp=sharing"
    },
    {
      id: "wwise-201",
      institution: "WWISE - Audiokinetic",
      degree: "WWISE - 201 - Interactive Music",
      year: "Jan 2021",
      certificateUrl: "https://drive.google.com/file/d/1E5lnL5YndTJl5nA64onjM1IkLL9AO-cS/view?usp=sharing"
    },
    {
      id: "cfsm",
      institution: "CFSM Center (Lyon)",
      degree: "Mixing and Mastering",
      year: "2018"
    }
  ],
  skills: [
    "Composer",
    "Sound Design",
    "Mix Engineer",
    "FMOD",
    "Wwise",
    "Attentive Listener",
    "Open to Feedback",
    "Versatile",
    "Creative"
  ]
};