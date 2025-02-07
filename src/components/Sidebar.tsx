// components/Sidebar.tsx
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Dashboard
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Reports
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
