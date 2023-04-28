import classes from './ProductDetail.module.css'
// import ProductData from './ProductData';

const ProductDetail = (props)=>{
  const colorOptions = props.data.colorOptions.map((item,pos)=>{
    return (<img className={classes.ProductImage} src={item.imageUrl} key={pos} alt={item.styleName}/>); 
  });
  // React_Getting_Started
  // getting started on react projects
    return (
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div className={classes.SectionBlock}>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png'/>
            {colorOptions}
            
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div className={classes.SectionBlock}>
            <button className={[classes.FeatureItem , classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>
          <br/>
          <button className={[classes.FeatureItem, classes.PrimaryButton].join(' ')}>Buy Now</button>

        </div>
    );
}


export default ProductDetail;