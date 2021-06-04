import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components-1/Contents'
import Filter from './components-1/Filter'

const App = () => {
  const [country, setCountry] = useState([])
  const [allCountry, setAllCountry] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountry(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if (newFilter) {
      const regex = new RegExp( newFilter, 'i' );
      const filteredCountries = () => allCountry.filter(country => country.name.match(regex))
      setCountry(filteredCountries)
    }
  }

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content country={country} setCountry={setCountry} />
    </div>
  )
}

export default App