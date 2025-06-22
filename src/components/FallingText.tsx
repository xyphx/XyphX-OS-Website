// FallingText.jsx
import { useEffect } from "react";
import gsap from "gsap";

const FallingText = ({ trigger }) => {
  useEffect(() => {
    const words = document.querySelectorAll(".terminal-word");

    if (trigger) {
      words.forEach((word, i) => {
        gsap.to(word, {
          y: 100,
          rotation: Math.random() * 10 - 5,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.015,
        });
      });
    } else {
      // Make sure to cancel all current animations
      gsap.killTweensOf(words);

      gsap.to(words, {
        y: 0,
        rotation: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.01,
        clearProps: "transform", // ensures clean reset
      });
    }
  }, [trigger]);

  return null;
};

export default FallingText;
