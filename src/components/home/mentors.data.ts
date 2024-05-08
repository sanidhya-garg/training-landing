import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    name: 'Arush Bansal',
    category: 'Full Stack Development',
    description:
      'I am Arush Bansal your coding buddy. With expertise in frontend/backend web development, frameworks like Node.js, and databases like MongoDB etc .I will provides guidance to help you navigate the complexities of Full Stack Development with confidence.',
    company: {
      name: 'Jaguar-LandRover',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg',
    name: 'Sanidhya Garg',
    category: 'Project Management',
    description:
      'I am Sanidhya Garg your PM Mentor.Excited to share my project management expertise, guiding you through planning, execution,delivery and feedback loops coupled with Technology and AI/AR. Let us leverage my industry insights ,skills and grow together.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
    name: 'Anushka P. Chowdary',
    category: 'UI/UX Design',
    description:
      'I am Anushka, your UI/UX design mentor.With a passion for creating seamless and intuitive user experiences, I blend technical expertise with creative flair to guide you in crafting user-centric designs. Let us collaborate to learn about UI/UX together!',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
]
