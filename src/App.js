import React from 'react';
import ProductData from './Api';
import './App.css';
import ListView from './listView';
import classes from './TopBar.module.css'

class App extends React.Component {

  state = {
    detailed : true,
    list : false
  }

  detailedview = () => {
    this.setState(() => {
      return{
        detailed : true,
        list : false
      }
    })
  }
  listview = () => {
    this.setState(() => {
      return{
        detailed : false,
        list : true
      }
    })
  }


  render(){
    return(
      <div>
        <nav className={classes.topBar}>
          <div className={classes.topBarDiv}>
            <button className={classes.butt} onClick={this.detailedview}><span className={classes.menuItem}>Detailed View</span></button>
            <button className={classes.butt} onClick={this.listview}><span className={classes.menuItem}>List View</span></button>
          </div>
        </nav>
        {this.state.detailed ? <ProductData/> : null}
        {this.state.list ? <ListView/> : null}
      </div>
    )
  }
}

export default App;


