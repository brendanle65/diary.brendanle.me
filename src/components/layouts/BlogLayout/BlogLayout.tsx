// import libraries
import { useState } from "react";

// import other
import { BlogHelmetProps, Layout } from "./(Layout)/Layout";

/**
 * Provides layout component for blogs and
 * handles its page transition.
 *
 * @layout
 */
export function BlogLayout({ splash: Splash, ...rest }: BlogHelmetProps) {
  const [isBlogMounted, setIsBlogMounted] = useState(!Splash || false);

  return (
    <>
      {Splash && !isBlogMounted && <Splash onMountReady={() => setIsBlogMounted(true)} />}

      {isBlogMounted && <Layout {...rest} />}
    </>
  );
}
