import React, { useEffect, useRef, useState } from "react";

interface NavItem {
  name: string;
  icon: string;
}

const Navbar = ({
  index,
  callback,
}: {
  index: number;
  // eslint-disable-next-line no-unused-vars
  callback: (value: number) => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(index);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const updateNavbar = () => {
      const activeItemNewAnim = itemRefs.current[activeIndex];
      if (!activeItemNewAnim) return;
      const itemPosNewAnim = activeItemNewAnim.getBoundingClientRect();
      const horiSelector = document.querySelector(
        ".hori-selector"
      ) as HTMLElement;
      if (horiSelector) {
        horiSelector.style.top = `${itemPosNewAnim.top + window.scrollY}px`;
        horiSelector.style.left = `${
          itemPosNewAnim.left + window.scrollX - 220
        }px`;
        horiSelector.style.height = `${itemPosNewAnim.height}px`;
        horiSelector.style.width = `${itemPosNewAnim.width}px`;
      }
    };

    updateNavbar();
    window.addEventListener("resize", updateNavbar);
    callback(activeIndex);
    return () => window.removeEventListener("resize", updateNavbar);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const items: NavItem[] = [
    { name: "Home", icon: "fas fa-tachometer-alt" },
    { name: "About", icon: "far fa-address-book" },
    { name: "Skills", icon: "far fa-clone" },
    { name: "Experience", icon: "far fa-clone" },
    { name: "Education", icon: "far fa-clone" },
    { name: "Projects", icon: "far fa-clone" },
    { name: "Blog", icon: "far fa-calendar-alt" },
  ];

  return (
    <nav className=" navbar navbar-expand-custom navbar-mainbg navbar-fixed-top">
      <button className="navbar-toggler" type="button">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        ref={navRef}
      >
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          {items.map((item, index) => (
            <li
              className={`nav-item ${index === activeIndex ? "active" : ""}`}
              key={index}
              onClick={() => setActiveIndex(index)}
              ref={(ref) => (itemRefs.current[index] = ref)}
            >
              <a className="nav-link" href="#">
                <i className={item.icon}></i>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
