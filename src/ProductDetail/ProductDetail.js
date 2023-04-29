import classes from './ProductDetail.module.css'
// import ProductData from './ProductData';

const ProductDetail = (props)=>{


  const colorOptions = props.data.colorOptions.map((item,pos)=>{
    const classArrary = [classes.ProductImage];
    if(pos === 0){
      classArrary.push(classes.SelectedProductImage);
    }
    return (<img className={classArrary.join(' ')} src={item.imageUrl} key={pos} alt={item.styleName}/>); 
  });
  

  const featureList = props.data.featureList.map((item, pos)=>{
    const classArrary =[classes.FeatureItem]
    if(pos === 0){classArrary.push(classes.SelectedFeatureItem);}
    return (
    <button key={pos} className={classArrary.join(' ')}>{item}</button>
    );
  });


  
    return (
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div className={classes.SectionBlock}>
            {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png'/> */}
            {colorOptions}
            
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div className={classes.SectionBlock}>
            {featureList}
          </div>
          <br/>
          <button className={[classes.FeatureItem, classes.PrimaryButton].join(' ')}>Buy Now</button>

        </div>
    );
}


export default ProductDetail;