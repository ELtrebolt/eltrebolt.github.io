export const SITE = {
  title: 'ethanlee.me',
  description: 'Personal website of Ethan Lee',
  author: 'Ethan Lee',
  github_username: 'ELtrebolt',
  email: 'ethanpl@uci.edu',
  url: 'https://eltrebolt.github.io',
};

export const NAVIGATION = [
  { title: 'About Me', url: '/about/' },
  { title: 'Projects', url: '/projects/' },
  { title: 'Resume', url: '/assets/resume.pdf' },
  { title: 'Music', url: '/music/' },
  { title: 'Blog', url: '/blog/' },
];

export interface AuthorLink {
  label: string;
  icon: string;
  url: string;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  location: string;
  links: AuthorLink[];
}

export const AUTHORS: Record<string, Author> = {
  'Ethan Lee': {
    name: 'Ethan Lee',
    avatar: '/assets/profile-pics/Golf.jpg',
    bio: 'Always learning, creating, exploring!',
    location: 'Irvine, California',
    links: [
      { label: 'LinkedIn', icon: 'fab fa-fw fa-linkedin', url: 'https://linkedin.com/in/ethanpl' },
      { label: 'Spotify Statys', icon: 'fas fa-fw fa-chart-bar', url: 'https://spotify-statys.herokuapp.com' },
      { label: 'ME-DB', icon: 'fas fa-fw fa-list-ol', url: 'https://me-db.tech' },
      { label: 'YouTube', icon: 'fab fa-fw fa-youtube', url: 'https://www.youtube.com/@Ukudabs' },
    ],
  },
  Professional: {
    name: 'Ethan Lee',
    avatar: '/assets/profile-pics/Chargers.jpg',
    bio: 'Aspiring software and data engineer',
    location: 'Costa Mesa, California',
    links: [
      { label: 'LinkedIn', icon: 'fab fa-fw fa-linkedin', url: 'https://linkedin.com/in/ethanpl' },
      { label: 'GitHub', icon: 'fab fa-fw fa-github', url: 'https://github.com/eltrebolt' },
      { label: 'Spotify Statys', icon: 'fas fa-fw fa-chart-bar', url: 'https://spotify-statys.herokuapp.com' },
      { label: 'ME-DB', icon: 'fas fa-fw fa-list-ol', url: 'https://me-db.tech' },
    ],
  },
  Personal: {
    name: 'Ethan Lee',
    avatar: '/assets/profile-pics/Personal.jpg',
    bio: 'Stay Hydrated!',
    location: 'Irvine, California',
    links: [
      { label: 'Spotify Statys', icon: 'fas fa-fw fa-chart-bar', url: 'https://spotify-statys.herokuapp.com' },
      { label: 'ME-DB', icon: 'fas fa-fw fa-list-ol', url: 'https://me-db.tech' },
      { label: 'My Spotify', icon: 'fab fa-fw fa-spotify', url: 'https://open.spotify.com/user/qf26s87ilixm0wn6njz7amx2f' },
      { label: 'My #1 Playlist', icon: 'fas fa-fw fa-bolt', url: 'https://open.spotify.com/playlist/0fXEEXQLRVRKN68i7iCmtI?si=1bd4cab161064d33' },
      { label: 'YouTube', icon: 'fab fa-fw fa-youtube', url: 'https://www.youtube.com/@Ukudabs' },
    ],
  },
  Ukudabs: {
    name: 'Ethan Lee',
    avatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZVoNI5392nte2uFW4PNCWHYu5nyhcMAud5mo-4=s176-c-k-c0x00ffffff-no-rj',
    bio: 'Dabbing is awesome',
    location: 'San Diego, California',
    links: [
      { label: 'My Spotify', icon: 'fab fa-fw fa-spotify', url: 'https://open.spotify.com/user/qf26s87ilixm0wn6njz7amx2f' },
      { label: 'My #1 Playlist', icon: 'fas fa-fw fa-bolt', url: 'https://open.spotify.com/playlist/0fXEEXQLRVRKN68i7iCmtI?si=1bd4cab161064d33' },
      { label: 'YouTube', icon: 'fab fa-fw fa-youtube', url: 'https://www.youtube.com/@Ukudabs' },
    ],
  },
};
