// Cities data with European cities prioritized
// Format: { name: string, country: string, isEuropean: boolean }

export const cities = [
  // European cities (prioritized)
  { name: 'Paris', country: 'France', isEuropean: true },
  { name: 'London', country: 'United Kingdom', isEuropean: true },
  { name: 'Berlin', country: 'Germany', isEuropean: true },
  { name: 'Madrid', country: 'Spain', isEuropean: true },
  { name: 'Rome', country: 'Italy', isEuropean: true },
  { name: 'Amsterdam', country: 'Netherlands', isEuropean: true },
  { name: 'Vienna', country: 'Austria', isEuropean: true },
  { name: 'Prague', country: 'Czech Republic', isEuropean: true },
  { name: 'Barcelona', country: 'Spain', isEuropean: true },
  { name: 'Munich', country: 'Germany', isEuropean: true },
  { name: 'Milan', country: 'Italy', isEuropean: true },
  { name: 'Brussels', country: 'Belgium', isEuropean: true },
  { name: 'Stockholm', country: 'Sweden', isEuropean: true },
  { name: 'Copenhagen', country: 'Denmark', isEuropean: true },
  { name: 'Dublin', country: 'Ireland', isEuropean: true },
  { name: 'Edinburgh', country: 'United Kingdom', isEuropean: true },
  { name: 'Zurich', country: 'Switzerland', isEuropean: true },
  { name: 'Geneva', country: 'Switzerland', isEuropean: true },
  { name: 'Lyon', country: 'France', isEuropean: true },
  { name: 'Marseille', country: 'France', isEuropean: true },
  { name: 'Hamburg', country: 'Germany', isEuropean: true },
  { name: 'Frankfurt', country: 'Germany', isEuropean: true },
  { name: 'Cologne', country: 'Germany', isEuropean: true },
  { name: 'Stuttgart', country: 'Germany', isEuropean: true },
  { name: 'Düsseldorf', country: 'Germany', isEuropean: true },
  { name: 'Lisbon', country: 'Portugal', isEuropean: true },
  { name: 'Porto', country: 'Portugal', isEuropean: true },
  { name: 'Athens', country: 'Greece', isEuropean: true },
  { name: 'Warsaw', country: 'Poland', isEuropean: true },
  { name: 'Krakow', country: 'Poland', isEuropean: true },
  { name: 'Budapest', country: 'Hungary', isEuropean: true },
  { name: 'Bucharest', country: 'Romania', isEuropean: true },
  { name: 'Oslo', country: 'Norway', isEuropean: true },
  { name: 'Helsinki', country: 'Finland', isEuropean: true },
  { name: 'Reykjavik', country: 'Iceland', isEuropean: true },
  { name: 'Luxembourg', country: 'Luxembourg', isEuropean: true },
  { name: 'Valletta', country: 'Malta', isEuropean: true },
  { name: 'Nicosia', country: 'Cyprus', isEuropean: true },
  { name: 'Tallinn', country: 'Estonia', isEuropean: true },
  { name: 'Riga', country: 'Latvia', isEuropean: true },
  { name: 'Vilnius', country: 'Lithuania', isEuropean: true },
  { name: 'Bratislava', country: 'Slovakia', isEuropean: true },
  { name: 'Ljubljana', country: 'Slovenia', isEuropean: true },
  { name: 'Zagreb', country: 'Croatia', isEuropean: true },
  { name: 'Belgrade', country: 'Serbia', isEuropean: true },
  { name: 'Sofia', country: 'Bulgaria', isEuropean: true },
  { name: 'Tirana', country: 'Albania', isEuropean: true },
  { name: 'Skopje', country: 'North Macedonia', isEuropean: true },
  { name: 'Sarajevo', country: 'Bosnia and Herzegovina', isEuropean: true },
  { name: 'Podgorica', country: 'Montenegro', isEuropean: true },
  { name: 'Pristina', country: 'Kosovo', isEuropean: true },
  { name: 'Minsk', country: 'Belarus', isEuropean: true },
  { name: 'Kiev', country: 'Ukraine', isEuropean: true },
  { name: 'Moscow', country: 'Russia', isEuropean: true },
  { name: 'Saint Petersburg', country: 'Russia', isEuropean: true },
  { name: 'Istanbul', country: 'Turkey', isEuropean: true },
  { name: 'Ankara', country: 'Turkey', isEuropean: true },
  
  // Other major cities (non-European)
  { name: 'New York', country: 'United States', isEuropean: false },
  { name: 'Los Angeles', country: 'United States', isEuropean: false },
  { name: 'Chicago', country: 'United States', isEuropean: false },
  { name: 'Toronto', country: 'Canada', isEuropean: false },
  { name: 'Vancouver', country: 'Canada', isEuropean: false },
  { name: 'Sydney', country: 'Australia', isEuropean: false },
  { name: 'Melbourne', country: 'Australia', isEuropean: false },
  { name: 'Tokyo', country: 'Japan', isEuropean: false },
  { name: 'Seoul', country: 'South Korea', isEuropean: false },
  { name: 'Singapore', country: 'Singapore', isEuropean: false },
  { name: 'Hong Kong', country: 'Hong Kong', isEuropean: false },
  { name: 'Dubai', country: 'United Arab Emirates', isEuropean: false },
  { name: 'Mumbai', country: 'India', isEuropean: false },
  { name: 'Delhi', country: 'India', isEuropean: false },
  { name: 'Shanghai', country: 'China', isEuropean: false },
  { name: 'Beijing', country: 'China', isEuropean: false },
  { name: 'São Paulo', country: 'Brazil', isEuropean: false },
  { name: 'Rio de Janeiro', country: 'Brazil', isEuropean: false },
  { name: 'Buenos Aires', country: 'Argentina', isEuropean: false },
  { name: 'Mexico City', country: 'Mexico', isEuropean: false },
  { name: 'Cairo', country: 'Egypt', isEuropean: false },
  { name: 'Johannesburg', country: 'South Africa', isEuropean: false },
  { name: 'Cape Town', country: 'South Africa', isEuropean: false }
]

/**
 * Search cities by query string
 * Prioritizes European cities in results
 * @param {string} query - Search query
 * @param {number} limit - Maximum number of results (default: 10)
 * @returns {Array} Filtered and sorted cities
 */
export function searchCities(query, limit = 10) {
  if (!query || query.trim().length === 0) {
    return []
  }

  const lowerQuery = query.toLowerCase().trim()
  
  // Filter cities that match the query
  const matches = cities.filter(city => {
    const cityName = city.name.toLowerCase()
    const countryName = city.country.toLowerCase()
    return cityName.includes(lowerQuery) || countryName.includes(lowerQuery)
  })

  // Sort: European cities first, then by relevance (starts with query > contains query)
  matches.sort((a, b) => {
    // First, prioritize European cities
    if (a.isEuropean && !b.isEuropean) return -1
    if (!a.isEuropean && b.isEuropean) return 1
    
    // Then, prioritize cities that start with the query
    const aStarts = a.name.toLowerCase().startsWith(lowerQuery)
    const bStarts = b.name.toLowerCase().startsWith(lowerQuery)
    if (aStarts && !bStarts) return -1
    if (!aStarts && bStarts) return 1
    
    // Finally, sort alphabetically
    return a.name.localeCompare(b.name)
  })

  return matches.slice(0, limit)
}

