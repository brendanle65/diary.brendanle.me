// import libraries
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

// import other
import { Cursor } from "@components/interactives";

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * AppLayout is a layout component that wraps every page,
 * providing the main header, footer, and a custom cursor.
 *
 * It also handles page transitions.
 *
 * @layout
 */
export function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useRouter();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <Cursor />
    </>
  );
}
