import React from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
//this is so much imports and what if we've other more imports as well
// so there's an alternative which is importinfg everything at once by specifying the elemnts we wanna import like below:
import{ Cards, Chart, CountryPicker } from './components';
//this will not work right away we need to do sth --> which is index .js
import styles from './App.module.css';
//to call function inside app.js we need to import it
import { fetchData } from './api'

class App extends React.Component{

    state={
        data: {},
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }

    render(){
        const { data } = this.state;
        return(
            <div className = {styles.container}>
                <Cards data = {data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}
export default App;