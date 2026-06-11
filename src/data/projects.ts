// ─────────────────────────────────────────────────────────────────────────
// Your projects. To add one, copy a block and fill it in. `name` is the short
// label shown in the card's terminal bar; `image` lives in /public/images/projects/.
// Set `wip: true` for a "coming soon" placeholder card.
// ─────────────────────────────────────────────────────────────────────────

export interface Project {
  name: string;        // short repo-style name shown in the card's terminal bar
  title: string;
  description: string;
  image: string;       // path under /public
  link: string;        // where the card links to (GitHub, demo, etc.)
  wip?: boolean;       // renders as a dashed "coming soon" card
}

export const PROJECTS: Project[] = [
  {
    name: 'activity-recognition',
    title: 'Lightweight Smartwatch Activity Recognition',
    description: 'Can a lightweight tree-based model accurately classify raw sensor data on-device?',
    image: '/images/projects/activity_recognition.jpeg',
    link: 'https://github.com/nateburley/ActivityRecognitionPOC',
  },
  {
    name: 'wiki-knowledge-graphs',
    title: 'Automatic Wikipedia Knowledge Graph Construction',
    description: 'Extracting meaningful objects and relationships from Wikipedia, represented as a graph.',
    image: '/images/projects/kg_stock_image.jpg',
    link: 'https://github.com/nateburley/WikiKnowledgeGraphs',
  },
  {
    name: 'a3c-tb-research',
    title: 'Transformed Bellman Operator & A3C',
    description: 'How does adjusting reward scaling affect deep reinforcement learning stability?',
    image: '/images/projects/a3c_rl.png',
    link: 'https://github.com/nateburley/A3C_TB_Research',
  },
  {
    name: 'supergan',
    title: 'SuperGAN: Synthetic Time-Series Generation',
    description: "Can we synthesize time-series data that's statistically as good as the real thing?",
    image: '/images/projects/synth_time_series.jpeg',
    link: 'https://github.com/nateburley/SuperGAN',
  },
  {
    name: 'election-sentiment',
    title: 'Real-Time Election Sentiment Analysis',
    description: 'Tracking how candidate sentiment shifts on Twitter as live results are announced.',
    image: '/images/projects/twitter_election_crop.jpeg',
    link: 'https://github.com/nateburley/ELECTION_DM',
  },
  {
    name: 'next-project',
    title: 'Coming soon…',
    description: 'Something new is compiling. Check back shortly.',
    image: '/images/projects/nvidia_stock_image.jpg',
    link: '#',
    wip: true,
  },
];
