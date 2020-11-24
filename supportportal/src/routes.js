/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import FilterTickets from "views/examples/FilterTickets.js";
import ResolvedTickets from "views/examples/ResolvedTickets.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-purple",
    component: Index,
    layout: "/supportprotal"
  },
  {
    path: "/icons",
    name: "Manage Tickets",
    icon: "ni ni-single-copy-04 text-blue",
    component: Icons,
    layout: "/supportprotal"
  },
  {
    path: "/maps",
    name: "Manage Team",
    icon: "ni ni-single-02 text-orange",
    component: Maps,
    layout: "/supportprotal"
  },
  {
    path: "/user-profile",
    name: "My Tickets",
    icon: "ni ni-circle-08 text-yellow",
    component: Profile,
    layout: "/supportprotal"
  },
  {
    path: "/filter-tickets",
    name: "Filter Tickets",
    icon: "ni ni-scissors text-red",
    component: FilterTickets,
    layout: "/supportprotal"
  },
  {
    path: "/resolved-ticket",
    name: "Resolved Tickets",
    icon: "ni ni-satisfied text-green",
    component: ResolvedTickets,
    layout: "/supportprotal"
  },
  // {
  //   path: "/tables",
  //   name: "Logout",
  //   icon: "ni ni-button-power text-red",
  //   component: Tables,
  //   layout: "/supportprotal"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
