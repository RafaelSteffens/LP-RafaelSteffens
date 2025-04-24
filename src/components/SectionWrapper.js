// src/components/SectionWrapper.js
import { useEffect, useRef, useState } from "react";
import "./SectionWrapper.css";

function SectionWrapper({ children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // mais responsivo à rolagem
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} className={`section-wrapper ${isVisible ? "visible" : "hidden"}`}>
      {children}
    </div>
  );
}

export default SectionWrapper;
