import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageView = "home" | "production" | "distribution" | "studio";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: PageView) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      
      {/* NAVBAR */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Festival Cinemas</h1>
        <div className="flex gap-4 text-sm">
          <button onClick={() => handlePageChange("home")}>Home</button>
          <button onClick={() => handlePageChange("production")}>Production</button>
          <button onClick={() => handlePageChange("distribution")}>Distribution</button>
          <button onClick={() => handlePageChange("studio")}>Studio</button>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <AnimatePresence mode="wait">
        
        {/* HOME */}
        {currentPage === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-10 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Redefining Cinema</h2>
            <p className="text-gray-400">A cinematic production experience</p>
          </motion.div>
        )}

        {/* PRODUCTION */}
        {currentPage === "production" && (
          <motion.div
            key="production"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="p-10 text-center"
          >
            <h2 className="text-3xl font-bold">Production</h2>
            <p className="text-gray-400">Our featured films and projects</p>
          </motion.div>
        )}

        {/* DISTRIBUTION */}
        {currentPage === "distribution" && (
          <motion.div
            key="distribution"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="p-10 text-center"
          >
            <h2 className="text-3xl font-bold">Distribution</h2>
            <p className="text-gray-400">Movies across platforms</p>
          </motion.div>
        )}

        {/* STUDIO */}
        {currentPage === "studio" && (
          <motion.div
            key="studio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-10 text-center"
          >
            <h2 className="text-3xl font-bold">Studio & Vision</h2>
            <p className="text-gray-400">Creative direction and storytelling</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © 2026 Festival Cinemas
      </div>
    </div>
  );
};

export default App;
