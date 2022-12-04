import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'
import styles from './Home.module.scss'
import axios from 'axios'

const Home = () => {

    const [countries, setCountries] = useState();

    useEffect(()=>{fetchCountry();},[])

    const fetchCountry = async ()=>{
        try{
            const response = await axios.get(`https://restcountries.com/v3.1/all`)
            console.log(response.data)
            setCountries(response.data)
        }
        catch(error){

        }
    }
    if(!countries){
        return(
            <div>Loading</div>
        )
    }

  return (
    <div className={styles['container']}>
        <nav>
            <h6>Where in the World?</h6>    
        </nav>
        <div className={styles['contents-container']}>
            <input type="text" placeholder='Search for a Country...' />
            <div className={styles['filter-by']}>
                <select>
                    <option value="0">Filter by Region</option>
                    <option value="1">Africa</option>
                    <option value="2">America</option>
                    <option value="3">Asia</option>
                    <option value="4">Europa</option>
                    <option value="5">Oceania</option>
                </select>
            </div>
            <div className={styles['countries-container']}>
                {countries.map((country)=>(
                    <Country key={country.name.common} name={country.name.common} img={country.flags.svg} population={country.population} region={country.region} capital={country.capital}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home