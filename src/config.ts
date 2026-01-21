export const SITE = {
  title: 'Ethan P Lee',
  description: 'Personal website of Ethan Lee',
  author: 'Ethan Lee',
  github_username: 'ELtrebolt',
  linkedin_url: 'https://linkedin.com/in/ethanpl',
  email: 'leeep.dev@gmail.com',
  url: 'https://eltrebolt.github.io',
};

export const NAVIGATION = [
  { title: 'About', url: '/about/' },
  { title: 'Projects', url: '/projects/' },
  { title: 'Music', url: '/music/' },
  { title: 'Blog', url: '/blog/' },
];

export interface AuthorLink {
  label: string;
  icon: string;
  url: string;
  color?: string;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  quote?: string;
  location: string;
  email?: string;
  links: AuthorLink[];
}

export const AUTHORS: Record<string, Author> = {
  Home: {
    name: 'Ethan Lee',
    avatar: '/assets/profile-pics/Chargers.jpg',
    bio: 'Software Engineer',
    quote: 'Automate everything.',
    location: 'Los Angeles, California',
    links: [
      { label: 'LinkedIn', icon: 'fab fa-fw fa-linkedin', url: 'https://linkedin.com/in/ethanpl', color: 'text-[#0077b5]' },
      { label: 'GitHub', icon: 'fab fa-fw fa-github', url: 'https://github.com/eltrebolt', color: 'text-[#181717]' },
    ],
  },
  Projects: {
    name: 'Ethan Lee',
    avatar: '/assets/profile-pics/Personal.jpg',
    bio: 'Full-Stack Software Engineer',
    quote: 'Why pay for an app when you can build it yourself?',
    location: '',
    links: [
      { label: 'LinkedIn', icon: 'fab fa-fw fa-linkedin', url: 'https://linkedin.com/in/ethanpl', color: 'text-[#0077b5]' },
      { label: 'GitHub', icon: 'fab fa-fw fa-github', url: 'https://github.com/eltrebolt', color: 'text-[#181717]' },
    ],
  },
  About: {
    name: 'Ethan Lee',
    avatar: '/assets/favicon/apple-touch-icon.png',
    bio: 'Sports lover, Eagle Scout, and amateur music maker',
    quote: 'Stay Hydrated!',
    location: '',
    links: [
      { label: 'LinkedIn', icon: 'fab fa-fw fa-linkedin', url: 'https://linkedin.com/in/ethanpl', color: 'text-[#0077b5]' },
      { label: 'YouTube', icon: 'fab fa-fw fa-youtube', url: 'https://www.youtube.com/@Ukudabs', color: 'text-[#ff0000]' },
    ],
  },
  Music: {
    name: 'Ukudabs',
    avatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZVoNI5392nte2uFW4PNCWHYu5nyhcMAud5mo-4=s176-c-k-c0x00ffffff-no-rj',
    bio: 'Amateur Ukulele/Guitar Player',
    quote: 'Yes, dabbing is awesome.',
    location: '',
    email: 'ukudabs@gmail.com',
    links: [
      { label: 'LinkedIn', icon: 'fab fa-fw fa-linkedin', url: 'https://linkedin.com/in/ethanpl', color: 'text-[#0077b5]' },
      { label: 'YouTube', icon: 'fab fa-fw fa-youtube', url: 'https://www.youtube.com/@Ukudabs', color: 'text-[#ff0000]' },
    ],
  },
  Blog: {
    name: 'Ethan Lee',
    avatar: '/assets/profile-pics/Golf.jpg',
    bio: 'Writing Enthusiast',
    quote: 'Always learning, creating, exploring!',
    location: '',
    links: [
      { label: 'LinkedIn', icon: 'fab fa-fw fa-linkedin', url: 'https://linkedin.com/in/ethanpl', color: 'text-[#0077b5]' },
      { label: 'GitHub', icon: 'fab fa-fw fa-github', url: 'https://github.com/eltrebolt', color: 'text-[#181717]' },
    ],
  },
};
