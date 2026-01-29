import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'In Development' | 'Active' | 'Ongoing' | 'Sold';
  link?: string;
  index: number;
}

const statusStyles = {
  'In Development': {
    bg: 'bg-badge-blue.bg',
    text: 'text-badge-blue.text',
  },
  'Active': {
    bg: 'bg-badge-green.bg',
    text: 'text-badge-green.text',
  },
  'Ongoing': {
    bg: 'bg-badge-orange.bg',
    text: 'text-badge-orange.text',
  },
  'Sold': {
    bg: 'bg-badge-orange.bg',
    text: 'text-badge-orange.text',
  },
};

export function ProjectCard({ title, description, status, link, index }: ProjectCardProps) {
  const statusStyle = statusStyles[status];

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.6 + index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -2 }}
      className="group relative p-5 border border-border rounded-lg bg-card hover:border-foreground/20 transition-colors duration-200 cursor-pointer"
    >
      <div className="flex items-start gap-3 mb-2">
        <Folder className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-medium text-foreground">{title}</h3>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${statusStyle.bg} ${statusStyle.text}`}
            >
              {status.toLowerCase()}
            </span>
          </div>
        </div>
        {link && link !== '#' && (
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed pl-8">
        {description}
      </p>
    </motion.div>
  );

  if (link && link !== '#') {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
