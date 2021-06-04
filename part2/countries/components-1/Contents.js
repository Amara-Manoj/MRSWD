import React from 'react'
import Country from './Countries'

const Content = ({country, setCountry}) => {
  if (country.length > 10) {
      return (
        <p>
          Too many matches, specify another filter
        </p>
      )
  } else if ((country.length > 2 && country.length < 10) || country.length === 0) {
      return (
        <ul>
          {country.map((country, i) =>
            <li key={i}> {country.name} <button onClick={() => setCountry([country])}>show</button></li>
          )}
        </ul>
      )
  } else {
      return (
        <Country country={country[0]}/>
      )
  }
}

export default Content