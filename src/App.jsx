import { BrowserRouter } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Navbar,
  DynamicHeader,
  Hero,
  About,
  Passions,
  Skills,
  Socials,
  Footer,
} from "./components/index.js";

function App() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      mainRef.current.style.opacity = "1";
      mainRef.current.style.transform = "translate3d(0, 0, 0)";
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <BrowserRouter>
      <DynamicHeader />
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black flex justify-center items-center text-white"
        >
          <motion.span
            className="text-lg text-center md:text-5xl text-white font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Fit. <br/>
            Code. <br/>
            Create.
          </motion.span>
        </motion.div>
      )}
      <div
        ref={mainRef}
        className="opacity-0 transform -translate-y-10 transition-all duration-1000 ease-in-out delay-1000"
        style={{
          opacity: 0,
          transform: "translate3d(0, -20px, 0)",
          contain: 'size style',
        }}
      >
        <Navbar />
        <div className="relative z-0 bg-beige">
          <Hero />
          <div className="bg-accent">
            <About />
          </div>
          <Passions />
          <Skills />
        </div>
        <div className="bg-black overflow-hidden">
          <Socials />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
