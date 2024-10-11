// import libraries
import { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

// import other
import { Cursor } from "@components/interactives";
import { Splash } from "@pages/index";

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * Layout component that wraps every page,
 * providing the main header, footer, and a custom cursor.
 *
 * It also handles page transitions.
 *
 * @layout
 */
export function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useRouter();
  const [isSplashAnimating, setIsSplashAnimating] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isSplashAnimating ? (
          <Splash onAnimationComplete={() => setIsSplashAnimating(false)} />
        ) : (
          <motion.div
            key={pathname}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <Cursor />
    </>
  );
}
