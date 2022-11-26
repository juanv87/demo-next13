export interface CamposMenuSecundario {
  menuSecundario: {
    nodes: [
      {
        label: string;
        path: string;
        id: string;
      }
    ];
  };
}

export interface MenuSecundarioPage {
  getMenuSecundario: {
    menuItems: {
      nodes: [
        {
          label: string;
          path: string;
          id: string;
        }
      ];
    };
  };
}
