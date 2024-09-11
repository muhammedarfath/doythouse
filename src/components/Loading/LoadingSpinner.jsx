import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Loading() {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [loading, controls]);

  return (
    <motion.div
      className="fixed bg-[#D8E9E7] top-0 left-0 w-full h-full flex justify-center items-center z-10"
      animate={controls}
    >
      <div className="p-6 rounded-md max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            DOYT HOUSE
          </h1>
          <div className="flex items-center">
            <>
              <motion.span
                className="w-6 h-6 my-4 mx-2 bg-black rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [1, 0],
                  transition: { duration: 1, repeat: 2 },
                }}
              />
              <motion.span
                className="w-6 h-6 my-4 mx-2 bg-black rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [1, 0],
                  transition: { duration: 1, repeat: 1.8, delay: 0.2 },
                }}
              />
              <motion.span
                className="w-6 h-6 my-4 mx-2 bg-black rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [1, 0],
                  transition: { duration: 1, repeat: 1.6, delay: 0.4 },
                }}
              />
            </>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Loading;
