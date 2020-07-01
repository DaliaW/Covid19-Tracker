import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
      <h1>  <img src="https://cdn2.iconfinder.com/data/icons/covied-19-line-two-color/154/Corona_corona_virus_covid19_virus-128.png" alt="COVID-19"/> Corona Tracker  </h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        
        <container><h4><div>Designed by: Dalia Walid ... </div>
        <div> Inspired by: JavaScript Mastery</div></h4>
        </container> 
        </div>
      
    );
  }
}

export default App;