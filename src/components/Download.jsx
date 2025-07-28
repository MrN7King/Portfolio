import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const DownloadPDFButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/VGurunivasan.pdf"; 
    link.download = "VGurunivasan.pdf";
    link.click();

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-black text-white w-[14rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.p
            key="downloaded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <img src="/assets/copy-done.svg" className="w-5" alt="Check Icon" />
            CV Downloaded
          </motion.p>
        ) : (
          <motion.p
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <img src="/assets/download.svg" className="w-5" alt="Download Icon" />
            Download CV
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DownloadPDFButton;
