export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
                children: [
                  {
                    label: "Prague",
                    to: "prague",
                    children: 
                    [
                      {
                        label: "Some Street",
                        to: "some-street"   
                      },
                      {
                        label: "Next Street",
                        to: "next street"
                      }
                    ]
                  },
                  {
                    label: "Lysá nad Labem",
                    to: "lysá-nad-labem",
                  },
                  { 
                    label: "Mělník",
                    to: "melnik",
                  },
                  {
                    label: "Kladno",
                    to: "kladno",
                  }
                ]   
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children : [
                {
                    label : 'Random data',
                    to : ''
                }
            ]
          },
        ],
      },
    ],
  },
];

export default menus;
