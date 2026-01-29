import { motion } from 'framer-motion';
import { Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex justify-center mb-6"
        >
          <motion.img
            src="/avatar.png"
            alt="Luca Becker"
            className="w-16 h-16 rounded-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-2xl sm:text-[28px] font-bold text-center mb-4 leading-tight tracking-tight"
        >
          Hey, I'm{' '}
          <span className="text-amber-500">Luca Becker</span>
          !
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-sm text-muted-foreground text-center mb-6 leading-relaxed"
        >
          Full stack developer building modern web and mobile products with a focus on clean systems and automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex flex-wrap justify-center gap-3 mb-4"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-4 py-2 text-sm font-medium flex items-center gap-2"
              asChild
            >
              <a href="mailto:luca.dev@outlook.de">
                <Calendar className="w-4 h-4" />
                Book a call
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              className="border-border bg-transparent hover:bg-secondary rounded-md px-4 py-2 text-sm font-medium flex items-center gap-2"
              asChild
            >
              <a href="mailto:luca.dev@outlook.de">
                <Mail className="w-4 h-4" />
                Send an email
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Availability Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex items-center justify-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-muted-foreground">
            Available for freelance and projects
          </span>
        </motion.div>
      </div>
    </section>
  );
}
