import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import { fetchData } from './api';
import { Cards , Chart , CountryPicker } from './components';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data:fetchedData });
    
  }
  render(){
    const { data } = this.state;
    return (
    <div className={styles.container} >
      < Cards data={data} />
      < CountryPicker />
      < Chart />
    </div>
  );
}
}

export default App;
