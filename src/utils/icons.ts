export const getSkillIcon = (skillName: string) => {
  const icons: Record<string, string> = {
    'Python': 'fab fa-python text-blue-500',
    'JavaScript': 'fab fa-js text-yellow-400',
    'React.js': 'fab fa-react text-blue-400',
    'ReactJS': 'fab fa-react text-blue-400',
    'Node.js': 'fab fa-node-js text-green-500',
    'NodeJS': 'fab fa-node-js text-green-500',
    'MongoDB': 'fas fa-leaf text-green-500',
    'SQL': 'fas fa-database text-gray-500',
    'Apex': 'fab fa-salesforce text-blue-400',
    'REST APIs': 'fas fa-cloud text-blue-400',
    'HTML/CSS': 'fab fa-html5 text-orange-500',
    'AWS': 'fab fa-aws text-orange-400',
    'Azure': 'fab fa-microsoft text-blue-500',
    'PowerShell': 'fas fa-terminal text-blue-600',
    'Power Platform': 'fas fa-bolt text-blue-400',
    'Flask': 'fas fa-flask text-gray-700',
    'Spotify API': 'fab fa-spotify text-green-500',
    'Data Viz': 'fas fa-chart-bar text-purple-500',
    'Dynamic Data-Vis Website': 'fas fa-chart-bar text-purple-500',
    'Astro/Tailwind CSS': 'fas fa-wind text-cyan-400',
    'Express.js': 'fas fa-server text-gray-600',
    'ExpressJS': 'fas fa-server text-gray-600',
    'Ruby': 'fas fa-gem text-red-500',
    'Jekyll': 'fas fa-vial text-red-400',
    'GitHub Pages': 'fab fa-github text-gray-700',
    'Minimal Mistakes': 'fas fa-palette text-blue-400',
    'Pandas': 'fas fa-table text-blue-500',
    'Matplotlib': 'fas fa-chart-line text-orange-500',
    'Kaggle': 'fab fa-kaggle text-blue-400',
    'Website': 'fas fa-globe text-blue-500',
    'Portfolio Website': 'fas fa-globe text-blue-500',
    'App': 'fas fa-mobile-alt text-gray-700',
    'Full-Stack Web App': 'fas fa-mobile-alt text-gray-700',
    'Astro': 'fas fa-rocket text-orange-500',
    'Tailwind CSS': 'fas fa-wind text-cyan-400',
    'TypeScript': 'fab fa-js text-blue-600'
  };
  
  // Try exact match first
  if (icons[skillName]) return icons[skillName];
  
  // Try case-insensitive match
  const lowerName = skillName.toLowerCase();
  const entry = Object.entries(icons).find(([key]) => key.toLowerCase() === lowerName);
  if (entry) return entry[1];
  
  return 'fas fa-code text-gray-400';
};
