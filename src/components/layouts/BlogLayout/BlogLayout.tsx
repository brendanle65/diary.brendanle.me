// import libraries
import { useState } from "react";

// import other
import { LayoutProps, Layout } from "./(Layout)/Layout";

interface BlogLayoutProps extends LayoutProps {
  /** Optional splash screen to run before rendering the page. */
  splash?: ({ onMountReady }: { onMountReady: () => void }) => JSX.Element;
}

/**
 * Provides layout component for blogs and
 * handles its page transition.
 *
 * @layout
 */
export function BlogLayout({ splash: Splash, ...rest }: BlogLayoutProps) {
  const [isBlogMounted, setIsBlogMounted] = useState(!Splash || false);

  return (
    <>
      {Splash && <Splash onMountReady={() => setIsBlogMounted(true)} />}

      {isBlogMounted && <Layout {...rest} />}
    </>
  );
}
