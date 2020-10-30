import React,{useState,useEffect} from 'react'; 
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchcountries} from '../../api';

const CountryPicker =({handleCountryChange}) =>{
    const [fetchedCountries,setfetchcountries] = useState([]);
    useEffect(()=>
    {
       const fetchAPI = async () =>{
        setfetchcountries(await fetchcountries());
       }
       fetchAPI();   
    },[setfetchcountries]);
    console.log(fetchedCountries);
    return (
         <FormControl className={styles.formControl}>
             <NativeSelect default="" onChange={(e)=> handleCountryChange(e.target.value)}>
                 <option value="global">Global</option>
                {fetchedCountries.map((country,i) => <option value={country} key={i}>{country}</option>)}
             </NativeSelect>
         </FormControl>
    )
}

export default CountryPicker;