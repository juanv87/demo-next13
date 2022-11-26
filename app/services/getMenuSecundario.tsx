import menuSecundario from './menuSecundario'

const getMenuSecundario = () => {
  return fetch('https://admin.prensaobrera.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: menuSecundario })
  })
    .then(res => res.json())
    .then(res => res.data.menuItems)
}

export default getMenuSecundario