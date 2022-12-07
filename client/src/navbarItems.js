export const navbarItems = [
  {
    title: "Homepage",
    url: "/",
  },
  {
    title: "About Me",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "Initial Consult",
        url: "/services/initial",
        class: "initial",
      },
      {
        title: "Life Review",
        url: "/services/life-review",
        class: "review",
      },
      {
        title: "Legacy Project",
        url: "/services/legacy",
        class: "legacy",
      },
      {
        title: "Vigil Planning",
        url: "/services/vigil-planning",
        class: "plan",
      },
      {
        title: "The Vigil",
        url: "/services/vigil",
        class: "vigil",
      },
      {
        title: "Additional Services",
        url: "/services/addl-services",
        class: "addl",
      },
      {
        title: "Rates",
        url: "/services/rates",
        class: "rates",
      },
    ],
  },
  {
    title: "Contact Me",
    url: "/contact",
  },
  {
    title: "Additional Resources",
    url: "/resources",
  },
];

// //should this go somewhere else better organized...? weird being just under src folder
