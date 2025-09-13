import React, { useState, useEffect } from "react";
import HomeIcon from "../../icons/HomeIcon";
import CtaButton from "../cta-button/CtaButton";
import "./Navigation.scss";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // List of section IDs
  const sections = [
    { id: "home", label: HomeIcon },
    { id: "about", label: "O mnie" },
    { id: "reviews", label: "Opinie" },
    { id: "packets", label: "Pakiety" },
    { id: "contact", label: "Kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const section = document.getElementById(id.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the top of the section is near the top of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(id.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navigation">
      <a href="#home">
        <h1 className="logo">Good Math</h1>
      </a>
      <ul className="navigation-menu">
        {sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`}>
            <li
              className="menu-item"
              style={{
                background: activeSection === id ? "-webkit-linear-gradient(#26ff00, #004300)" : "",
                backgroundClip: activeSection === id ? "text" : "border-box",
                WebkitTextFillColor: activeSection === id ? "transparent" : "inherit",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
            >
              {typeof label === "function" ? <HomeIcon /> : label}
            </li>
          </a>
        ))}

        {/* OLD SOLUTION */}
        {/* <a href="#about">
          <li className="menu-item">O mnie</li>
        </a>
        <a href="#reviews">
          <li className="menu-item">Opinie</li>
        </a>
        <a href="#packets">
          <li className="menu-item">Pakiety</li>
        </a>
        <a href="#contact">
          <li className="menu-item">Kontakt</li>
        </a> */}

        <CtaButton />
      </ul>
    </nav>
  );
};

export default Navigation;
