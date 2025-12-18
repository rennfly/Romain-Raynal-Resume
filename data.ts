import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Romain Raynal",
  title: "Composer, Producer & Sound Designer",
  avatarUrl: "https://drive.google.com/thumbnail?id=11oUP7a-5BWNktFp5q46VF9R7zudEr3kw&sz=w1000", 
  cvUrl: "https://drive.google.com/uc?export=download&id=10xaRkQnm9pVIMsD8-iXliKzcz9DwNCUb",
  contact: {
    location: "Sigean (Aude), France",
    phone: "06.63.68.03.30",
    email: "romainraynalpro@gmail.com",
    website: "www.romainraynal.fr",
    portfolioUrl: "https://www.romainraynal.fr/portfolio"
  },
  summary: "I present here a selection of projects illustrating my work in sound design, composition, and music design. My approach emphasises the care taken in the execution and attention to detail, with the aim of creating immersive sound experiences that serve the narrative and engage the player.",
  fullBio: "Romain Raynal is a French composer, producer, and sound designer based in Sigean, Aude. He studied at the conservatory and worked as a freelance musician for nearly 15 years, primarily as a bassist in jazz bands. In 2017, he completed a mixing course at the CFSM Center in Lyon. Following this, he founded his studio in Occitanie. In 2021, he earned a certification in film scoring from Studio Cap’ in Paris, as well as certifications in interactive music using Wwise, and more recently, FMOD. Since 2023 he has been working as a composer and sound designer in the video game industry, contributing to titles such as The Green Room Experiment, Just a Guy, and as a sound designer at Ukiyo, founded by Thierry Platon (2Dark), on Transhumance, among others. Additionally, in 2024, he worked on the F2P mobile game Need For Touring by Carfooly, and the musical shooter LavaLoop, created by Louis Rigaud. His latest ongoing project is Maestro (Arcades, Double Jack), where he works as a sound designer and mix engineer.",
  experience: [
    {
      id: "arcades",
      role: "Sound Designer & Mix Engineer",
      projectName: "Maestro",
      company: "Arcades, Double Jack",
      period: "Since 09/2025",
      url: "https://maestro-game.com/",
      details: [
        "Designed and produced original sound assets.",
        "Mixed orchestral recordings for in-game implementation."
      ]
    },
    {
      id: "slope",
      role: "Trainer & Content Creator",
      projectName: "FMOD Online Course",
      company: "Slope Training (France)",
      period: "Since 08/2025",
      url: "https://slopetraining.com/",
      details: [
        "Designed and produced a comprehensive video training course on FMOD middleware.",
        "Created educational content to support game audio professionals.",
        "Provided technical support and student monitoring."
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
        "Designed and produced original sound assets for sci-fi environments.",
        "Responsible for FMOD implementation, interactive music systems, and in-game mixing."
      ]
    },
    {
      id: "awesome-1",
      role: "Composer & Sound Designer",
      projectName: "Witch Hunters",
      company: "Awesome Game Concepts (France)",
      period: "Since 02/2025",
      url: "https://store.steampowered.com/app/3528000/Witch_Hunters/",
      details: [
        "Defined and implemented the audio direction in FMOD.",
        "Created custom sound assets and original musical score."
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
        "Designed and integrated rhythmic sound assets for a musical shooter.",
        "Managed Wwise integration and mixing within Unity.",
        "Project reached the finals of the 2024 Game Cup."
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
        "Audio direction lead for a F2P mobile racing game.",
        "Created vehicle sound assets and original music.",
        "Handled FMOD sessions and global game mixing."
      ]
    },
    {
      id: "ukiyo",
      role: "Sound Designer",
      projectName: "Transhumance",
      company: "Ukiyo Studio",
      period: "05/2024 - 07/2024",
      url: "https://afjv.com/societe/1381-ukiyo-studio.htm",
      details: [
        "Recorded and designed original sound assets.",
        "Implemented assets via FMOD into Unreal Engine 5.",
        "Produced and mixed game trailers."
      ]
    },
    {
      id: "amanclo",
      role: "Sound Designer & Composer",
      projectName: "The Green Room Experiment",
      company: "Amanclo Video Games",
      period: "Since 01/2023",
      url: "https://store.steampowered.com/curator/44733926",
      details: [
        "Created ambient soundscapes for a first-person puzzle series.",
        "Composed non-diegetic music for in-game sequences and marketing trailers."
      ]
    }
  ],
  education: [
    {
      id: "cap",
      institution: "Studio Capitale Enseignement (Paris)",
      degree: "Certification in Film Scoring",
      year: "2022",
      certificateUrl: "https://drive.google.com/file/d/1uNCf4pFDBEfr79JBhZyR20BWF3YUG7II/view?usp=sharing",
      institutionUrl: "http://www.studiocapitale.com/"
    },
    {
      id: "wwise-201",
      institution: "Audiokinetic",
      degree: "Wwise-201 - Interactive Music Certification",
      year: "2021",
      certificateUrl: "https://drive.google.com/file/d/1E5lnL5YndTJl5nA64onjM1IkLL9AO-cS/view?usp=sharing",
      institutionUrl: "https://www.audiokinetic.com/fr/"
    },
    {
      id: "cfsm",
      institution: "CFSM Center (Lyon)",
      degree: "Professional Mixing and Mastering Course",
      year: "2018",
      institutionUrl: "https://cfsm-center.fr/"
    }
  ],
  skills: [
    "FMOD",
    "Wwise",
    "Reaper",
    "Musical Composition",
    "Music Design",
    "Creative and open to feedback",
    "Sound Design"
  ]
};