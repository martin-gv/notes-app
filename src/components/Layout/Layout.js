import React from "react";

import Main from "./Main/Main";
import Topbar from "./Topbar/Topbar";
import Modals from "./Modals/Modals";
import Menus from "./Menus/Menus";

function Layout() {
  return (
    <>
      <Topbar />
      <Main />
      <Modals />
      <Menus />
    </>
  );
}

export default Layout;
