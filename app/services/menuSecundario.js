const menuSecundario = `
  query MenuSecundario {
    menuItems(where: { location: SECONDARY }) {
      nodes {
        label
        path
        id
      }
    }
  }
`
export default menuSecundario