export const makePlanetCard = category => {
  const planetCard = category.map((item, i) => {
    return {
      name: item.name,
      id: i + 'planets',
      favorited: false,
      properties: [
        `Terrain: ${item.terrain}`,
        `Population: ${item.population}`,
        `Climate: ${item.climate}`,
        `Residents: ${item.residents.map(resident => {
          return resident.name
        })}`
      ]
    }
  })
  return planetCard
}