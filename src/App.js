import { Component } from 'react';
import classes from './App.module.css';
import ProductDetail from './ProductDetail';
import ProductPreview from './ProductPreview';
import TopBar from './TopBar';
import ProductData from './ProductData';

class App extends Component {
  state = {
    productData : ProductData,
  }

  render(){
    return (
      <div className="App">
        <TopBar/>
  
        <div className={classes.MainContainer}>

          <div className={classes.ProductPreview}>
            <ProductPreview/>
          </div>
          
          <div className={classes.ProductData}>
            <ProductDetail data={this.state.productData}/>
          </div>
  
        </div>
      </div>
    )
  }

}

export default App;
