import React from 'react';
import styles from './App.module.css';
import {Cards,Charts,CountryPicker} from './components'; 
import { fetchData } from './api/'; 


class App extends React.Component
{  
   constructor(props) {
     super(props)
   
     this.state = {
        data:{},
        country:'',       
     }
   }
   
  
  async componentDidMount() 
  {
    const data1 = await fetchData();
    // console.log(data1);
    this.setState({ data:data1 });
    console.log(this.state);
    /// printed once   
  }
  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
      // set the data   
    this.setState({ data:fetchedData,country:country });
  }
  render() 
  {
    const {data,country} = this.state;
    // console.log(this.state);
      return (
        <div className={styles.container} >
          
          <Cards data={data} /> 
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country}/>       
        </div>
      );
  }
}

export default App;