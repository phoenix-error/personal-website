'use client';

import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 1.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="py-6 px-4 sm:px-6 border-t border-border"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Copyright */}
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} Built with{' '}
          <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Luca
        </p>

        {/* Open Source Link */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
        >
          This website is{' '}
          <span className="link-underline">open source</span>
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </a>
      </div>
    </motion.footer>
  );
}
