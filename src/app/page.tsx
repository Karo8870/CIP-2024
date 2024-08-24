'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className='bg-black'>
      <section className='flex flex-col items-center h-[300vh]'>
        <motion.h1
          className='text-white text-6xl py-80 sticky top-4'
          style={{ opacity }}
        >
          Schimbări climatice
        </motion.h1>
        <motion.div
          className='bg-rose-800 w-2/3 h-40 sticky top-4 origin-top'
          style={{ scaleY }}
        ></motion.div>
      </section>
    </main>
  );
}
