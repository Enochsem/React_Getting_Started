import { Component } from 'react';
import classes from './App.module.css';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductPreview from './ProductPreview';
import TopBar from './TopBar';
import ProductData from './ProductData';

class App extends Component {
  state = {
    productData : ProductData,
    currentPreviewImage : "https://imgur.com/iOeUBV7.png",
    showHeartBeatSection : false,
  }

  render(){
    return (
      <div className="App">
        <TopBar/>
  
        <div className={classes.MainContainer}>

          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviewImage} 
            showHeartBeatSection={this.state.showHeartBeatSection} />
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
