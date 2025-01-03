"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname} className="sm-min-h-screen bg-primary">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-gradient-to-br from-primary via-secondary to-primary top-0 pointer-events-none"
        />
        {/* Optional: Subtle overlay for extra depth */}
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.8, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-gradient-to-tr from-accent/10 via-transparent to-accent/5 top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
