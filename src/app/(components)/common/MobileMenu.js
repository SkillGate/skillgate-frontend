import React from "react";
import { actioTypes } from "../../reducers/uiReducer";
import Link from "next/link";

const MobileMenu = ({ links }) => {
  return (
    <div>
      <ul className="padding-container flex-align-left flex-col">
        {links.map(({ id, linkText, url }) => (
          <Link key={id} href={url} end>
            <div onClick={() => dispatch({ type: actioTypes.closeSidebar })}>
              {linkText} <br />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
