import React from "react";
import "../styles/components/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a target="blank" href="google.com">
        <i class="fa-brands fa-github"></i>
      </a>
      <a target="blank" href="google.com">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
    </div>
  );
};

export default Sidebar;
