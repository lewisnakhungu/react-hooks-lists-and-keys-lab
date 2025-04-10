import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((link) => (
      <a href={`#${link}`} key={link}>
        {link.charAt(0).toUpperCase() + link.slice(1)}
      </a>
    ))}
  </nav>;
}

export default NavBar;
