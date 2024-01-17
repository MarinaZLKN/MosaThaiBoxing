import React, { useState }  from 'react';
import '../../../styles/Accordion.scss';
import { motion, AnimatePresence } from "framer-motion";



const Accordion: React.FC = () => {

    const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  return (
    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleTab(index)}
          >
            Tab {index + 1}
          </div>
          <AnimatePresence>
            {activeTab === index && (
              <motion.div
                key="content"
                className="accordion-content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                Content for Tab {index + 1}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Accordion;