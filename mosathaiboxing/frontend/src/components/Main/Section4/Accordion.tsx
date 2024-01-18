import React, {CSSProperties, useState} from 'react';
import '../../../styles/Accordion.scss';
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="accordion">
      <motion.div
          initial={{
              color: 'var(--White)',
              fontFamily: 'var(--font-family)',
              fontSize: '68px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '32px',
              paddingBottom: '8px',
              cursor: 'pointer',
              marginBottom: '15px',

          }}
          onClick={() => setIsOpen(!isOpen)}>
          <div className="accordeion-title">{title}</div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
              initial={{
                  height: 'auto',
                  opacity: 0,
                  width: '924px',
                  paddingRight: '64px',
                  color: 'black',
                  fontFamily: 'var(--font-text)',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '28px',

              }}
              animate={{ height: 50, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
          >
            <div className="accordion-content">
                {content}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;