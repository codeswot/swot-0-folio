import { useState } from "react";
import "../styles/NavBar.css";

export const NavBar =() => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
      
    <nav className="navigation">
      <a href="/" className="brand-name">
        {`{`}C{`}`}
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home"> <span className="nav-number">00.</span>About</a>
          </li>
          <li>
          <a href="/home"> <span className="nav-number">01.</span>Experience</a>
          </li>
          <li>
          <a href="/home"> <span className="nav-number">02.</span>Projects</a>
          </li>
          <li>
          <a href="/home"> <span className="nav-number">03.</span>Blog</a>
          </li>
          <li>
          <a href="/home"> <span className="nav-number">04.</span>Contact</a>
          </li>
        </ul>
      </div>
      <button>Resume</button>
    </nav>
  );
}
