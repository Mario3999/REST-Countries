import React from 'react'
import styles from './Country.module.scss'

const Country = ({name, img, population, region, capital}) => {
  return (
    <div className={styles['card-container']}>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p><b>Population:</b>{population}</p>
        <p><b>Region:</b>{region}</p>
        <p><b>Capital:</b>{capital}</p>
    </div>
  )
}

export default Country