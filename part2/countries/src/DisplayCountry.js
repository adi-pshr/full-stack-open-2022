import React from "react";

export default function DisplayCountry({ country }) {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital : {country.capital}</p>
      <p>Area : {country.area}</p>
      <h2>Languages : </h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="" />
    </>
  );
}
