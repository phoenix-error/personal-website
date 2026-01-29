import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'GridVote F1',
    description: 'Social Formula 1 prediction game focused on competition, seasons, and friends.',
    status: 'In Development' as const,
    link: '#',
  },
  {
    title: 'BilliardRank',
    description: 'Ranking and competition management system for billiard players and clubs.',
    status: 'Active' as const,
    link: '#',
  },
  {
    title: 'MinimaFinance',
    description: 'Minimalist finance tracking and analysis tool focused on clarity and control.',
    status: 'In Development' as const,
    link: '#',
  },
  {
    title: 'Client Projects',
    description: 'Multiple commercial projects including websites, internal tools, and automations.',
    status: 'Ongoing' as const,
    link: '#',
  },
];

export function ProjectsSection() {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.55,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2"
        >
          Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.58,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-sm text-foreground mb-5"
        >
          These are my personal projects, both past and ongoing:
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              status={project.status}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
