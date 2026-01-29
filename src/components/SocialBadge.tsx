import { motion } from 'framer-motion';

interface SocialBadgeProps {
  platform: string;
  url: string;
  index: number;
}

const iconMap: Record<string, string> = {
  'GitHub': '/socials/logo-github.svg',
  'X/Twitter': '/socials/logo-x:twitter.svg',
  'LinkedIn': '/socials/logo-linkedin.svg',
};

export function SocialBadge({ platform, url, index }: SocialBadgeProps) {
  const iconSrc = iconMap[platform];

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.85 + index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-sm text-foreground hover:bg-secondary transition-colors duration-200"
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={platform}
          className="w-4 h-4 object-contain"
        />
      )}
      <span>{platform}</span>
    </motion.a>
  );
}
