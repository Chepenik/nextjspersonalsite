import Link from "next/link";
import { motion, useAnimation } from "framer-motion";  
import { useEffect } from "react";

const animateRainbow = (controls, rainbowColors) => {
  controls.start({
    backgroundColor: rainbowColors,
    transition: { 
      duration: 7,
      times: rainbowColors.length,
      repeat: Infinity,
      repeatType: "loop"
    }
  });
}

const Logo = () => {
  const controls = useAnimation();
  const rainbowColors = [
    "#FF69B4", "#FFD700", "#00FF7F", "#6495ED",
    "#FF4500", "#8A2BE2", "#1E90FF", "#FF6347"
  ];  
  useEffect(() => {
    const stopRainbow = () => {
      controls.stop();
    };   
    return () => {
      stopRainbow();
    };
  }, [controls]);

  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={controls}
        whileHover={() => animateRainbow(controls, rainbowColors)}
        onHoverEnd={() => controls.stop()} 
        className="bg-blue-400 rounded-full w-16 h-16 flex items-center justify-center"
      >
        <Link href="/">
          <span>Chep</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Logo;