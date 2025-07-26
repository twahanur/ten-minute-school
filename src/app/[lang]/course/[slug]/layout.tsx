import React from "react";

const Layout = ({ children, rightContent }) => {
  return (
    <div className="grid grid-cols-12 gap-8 bg-amber-700">
      <div className="col-span-7">{children}</div>
      <div className="col-span-5">{rightContent}</div>
    </div>
  );
};

export default Layout;