'use client';
import Link from "next/link";
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight * 0.8) {
          controls.start("visible");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        ref={containerRef}
      >
        <div className="container">
          <motion.div 
            className="-mx-4 flex flex-wrap items-center"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <div className="w-full px-4 lg:w-1/2">
              <motion.div 
                className="max-w-[570px] text-left"
                variants={itemVariants}
              >
                <h1 
                  className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                >
                  Empowering Businesses with Scalable Software Solutions
                </h1>
                <p 
                  className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl"
                >
                  We specialize in designing and developing custom software 
                  solutions that empower businesses to innovate, streamline 
                  operations, and achieve lasting success. Whether you need 
                  cutting-edge web applications, scalable mobile platforms, or 
                  complete digital transformation, we bring your vision to life 
                  with creativity, precision, and technology that grows with your business.
                </p>
                <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/services"
                      className="inline-block rounded-md bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:from-gray-600 dark:to-gray-800"
                    >
                      Our Services
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Graphics - Modern Tech Animation */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative py-12 lg:py-0">
                <div className="relative mx-auto max-w-[500px] lg:mr-0">
                  {/* Main animated graphic */}
                  <motion.div 
                    className="relative z-10 w-full"
                    variants={floatingVariants}
                    animate="float"
                  >
                    <svg
                      width="450"
                      height="450"
                      viewBox="0 0 450 450"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      {/* Modern tech circles */}
                      <motion.circle
                        cx="225"
                        cy="225"
                        r="180"
                        fill="url(#paint0_linear_25:217)"
                        variants={pulseVariants}
                        animate="pulse"
                      />
                      
                      {/* Circuit-like elements */}
                      <motion.path
                        d="M100 150 Q225 100 350 150"
                        stroke="url(#paint1_linear_25:217)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                      <motion.path
                        d="M100 300 Q225 350 350 300"
                        stroke="url(#paint1_linear_25:217)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.8 }}
                      />
                      <motion.path
                        d="M150 100 Q150 225 150 350"
                        stroke="url(#paint1_linear_25:217)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.1 }}
                      />
                      <motion.path
                        d="M300 100 Q300 225 300 350"
                        stroke="url(#paint1_linear_25:217)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.4 }}
                      />
                      
                      {/* Floating tech elements */}
                      <motion.circle
                        cx="150"
                        cy="150"
                        r="8"
                        fill="#4A6CF7"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                      />
                      <motion.rect
                        x="250"
                        y="250"
                        width="16"
                        height="16"
                        rx="4"
                        fill="#4A6CF7"
                        initial={{ rotate: 0, scale: 0 }}
                        animate={{ rotate: 45, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                      />
                      <motion.path
                        d="M200 300 L220 280 L240 300 L220 320 Z"
                        fill="#4A6CF7"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                      />
                      
                      <defs>
                        <linearGradient
                          id="paint0_linear_25:217"
                          x1="0"
                          y1="0"
                          x2="450"
                          y2="450"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4A6CF7" />
                          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.7" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_25:217"
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="100%"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4A6CF7" stopOpacity="0" />
                          <stop offset="0.5" stopColor="#4A6CF7" />
                          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                  
                  {/* Floating tech dots animation */}
                  <div className="absolute -left-7 -top-7 z-[-1]">
                    <motion.svg
                      width="134"
                      height="106"
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      {[...Array(12)].map((_, i) => (
                        <motion.circle
                          key={i}
                          cx={1.66667 + (i * 15)}
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#4A6CF7"
                          animate={{ 
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1]
                          }}
                          transition={{ 
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Infinity
                          }}
                        />
                      ))}
                    </motion.svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-[-2] overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>

        {/* Bottom wave animation */}
        <div className="absolute bottom-0 left-0 z-[-1] w-full opacity-30 lg:opacity-100">
          <svg
            width="1440"
            height="201"
            viewBox="0 0 1440 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <motion.path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.1 }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;