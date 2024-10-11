import { useEffect } from "react";
import clsx from "clsx";

// import other
import { PolaroidImage } from "@components/displays";
import { usePageAnimate } from "@hooks/usePageAnimate";
import { sequence } from "./Splash.animate";

// import styles
import styles from "./Splash.module.scss";

interface SplashProps {
  onAnimationComplete: () => void;
}

/**
 * The loading screen that first plays when the site is loaded.
 *
 * @page
 */
export function Splash({ onAnimationComplete }: SplashProps) {
  const { scope, play, stop } = usePageAnimate({ animate: sequence });

  useEffect(() => {
    (async () => {
      await play();
      onAnimationComplete();
    })();

    return () => stop();
  }, []);

  return (
    <div
      ref={scope}
      className={styles.container}
    >
      {[
        {
          src: "/splash/football.jpg",
          alt: "football stadium",
          className: clsx("public-football", styles.football),
        },
        {
          src: "/splash/camera.jpg",
          alt: "camera selfie",
          className: clsx("public-camera", styles.camera),
        },
        {
          src: "/splash/library.jpg",
          alt: "small cozy library",
          className: clsx("public-library", styles.library),
        },
        {
          src: "/splash/shower.jpg",
          alt: "my face in the shower",
          className: clsx("public-shower", styles.shower),
        },
        {
          src: "/splash/family.jpg",
          alt: "my family",
          className: clsx("public-family", styles.family),
        },
        {
          src: "/splash/dinosaur.jpg",
          alt: "picture of dinosaur museum",
          className: clsx("public-dinosaur", styles.dinosaur),
        },
        {
          src: "/splash/japan.jpg",
          alt: "picture of urban japan",
          className: clsx("public-japan", styles.japan),
        },
      ].map(({ src, alt, className }, idx) => (
        <PolaroidImage
          key={idx}
          src={src}
          alt={alt}
          className={clsx("public-image", styles.image, className)}
        />
      ))}
    </div>
  );
}
