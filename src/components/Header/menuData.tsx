import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Company",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Our Work",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "About us",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Capabilities",
    path: "/error",
    newTab: false,
  },
  {
    id: 6,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Development",
        path: "/about",
        newTab: false,
        submenu: [
          {
            id: 411,
            title: "Frontend",
            path: "/web/frontend",
            newTab: false,
          },
          {
            id: 412,
            title: "Backend",
            path: "/web/backend",
            newTab: false,
          },
        ],
      },
      {
        id: 42,
        title: "Digital Marketing",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Hire Developer",
        path: "/blog",
        newTab: false,
      },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
