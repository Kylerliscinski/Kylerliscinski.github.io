import { cwChallenges, grantReady, threaditAI, gamePursuit } from '../assets/img/projects/_index';
import { github } from '../assets/img/icons/_index';

const projectData = {
  id: "projects",
  title: "Projects",
  subtitle: "",
  text: "",
  projects: [
    {
      id: "cw-challenges",
      name: "CodeWorks Challenges",
      description: "An innovative platform designed to empower students and alumni of CodeWorks by providing carefully curated coding challenges tailored to enhance and showcase their skills to other users and potential employers with earned badges and rank. Our interactive front-end is built with Vue 3, a robust Node/Express back-end with Auth0 integration, MongoDB, and Mongoose, fostering seamless UX and efficient challenge moderation. Users can explore a variety of coding exercises, track their progress, and connect with an active community of fellow developers.",
      image: cwChallenges,
      source_code_link: "https://github.com/codeworksacademy/challenges.codeworksacademy.com",
      source_code_icon: github,
      cssSelector: "cw-challenges",
      tags: [
        {
          name: "vuejs",
          color: "green-text-gradient"
        },
        {
          name: "nodejs",
          color: "blue-text-gradient"
        },
        {
          name: "expressjs",
          color: "pink-text-gradient"
        },
        {
          name: "javascript",
          color: "yellow-text-gradient"
        },
        {
          name: "coding-challenges",
          color: "green-text-gradient"
        },
        {
          name: "community",
          color: "orange-text-gradient"
        },
        {
          name: "datamanipulation",
          color: "purple-text-gradient"
        }
      ]
    },
    {
      id: "grant-ready",
      name: "Grant Ready",
      description: "Grant Ready isn't just about securing funds; it's about empowering nonprofits to make a lasting difference in their communities. By providing technical assistance, templates, and expert guidance, Grant Ready sets their clients up for success, allowing them to focus on what truly matters – their mission.  As the developer behind this innovative platform,  I had the privilege of collaborating with a client based in Portland, OR, to create Grant Ready, a cutting-edge application designed to revolutionize the way nonprofits approach grant funding. Grant Ready isn't just about securing funds; it's about empowering nonprofits to make a lasting difference in their communities.",
      image: grantReady,
      source_code_link: "https://github.com/AJVancattenburch/grant_ready",
      source_code_icon: github,
      cssSelector: "grant-ready",
      tags: [
        {
          name: "vuejs",
          color: "green-text-gradient"
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "frontend",
          color: "purple-text-gradient"
        },
        {
          name: "staticwebsite",
          color: "pink-text-gradient"
        },
        {
          name: "landingpage",
          color: "orange-text-gradient"
        },
        {
          name: "scss",
          color: "pink-text-gradient"
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient"
        }
      ]
    },
    {
      name: "ThreadIt AI",
      description: "ThreadIt is a cutting-edge platform that allows users to upload images of clothing items and receive recommendations for other items that pair well with their selection.  The application is built using a React front-end and a Node.js/Express.js back-end that utilizes three.js to render realistic 3D models, and the OpenAI API to generate recommendations based on the user's input. ThreadIt AI is designed to provide a seamless and intuitive user experience, making it easy for creative fashion designers and enthusiasts to almost effortlessly explore new styles and discover fresh ideas.",
      image: threaditAI,
      hyper_link: "https://threaditai.web.app",
      source_code_link: "https://github.com/AJVancattenburch/ThreadItAI",
      source_code_icon: github,
      cssSelector: "threadit-ai",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient"
        },
        {
          name: "threejs",
          color: "green-text-gradient"
        },
        {
          name: "javascript",
          color: "yellow-text-gradient"
        },
        {
          name: "tailwind",
          color: "purple-text-gradient"
        },
        {
          name: "openaiapi",
          color: "orange-text-gradient"
        },
        {
          name: "cloudinary",
          color: "blue-text-gradient"

        },
        {
          name: "webapi",
          color: "yellow-text-gradient"
        }
      ]
    }
  ]
};

export default projectData;