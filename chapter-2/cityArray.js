const cities = ['Athens', 'London', 'Paris']
cities[3] = 'Berlin'

console.log(cities)

cities.push('Rome')

for ( const city of cities) {
  console.log(city)
}