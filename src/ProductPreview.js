import classes from './ProductPreview.module.css';


const ProductPreview= (props)=> {
    const hour = new Date().getHours()
  const minutes = new Date().getMinutes()
  const currentHour = hour > 9 ? hour : '0'+hour;
  const currentMinutes = minutes > 9 ? minutes : '0'+minutes;
    return (
        <div className={classes.ProductPreview}>
            <img src='https://imgur.com/iOeUBV7.png' />

            <div className={classes.TimeSection}>
                <p >{`${currentHour}:${currentMinutes}`}</p>
            </div>

            <div className={classes.HeartBeatSection}>
                {/* <i class='bx bxs-heart' color='white'></i> */}
                <box-icon type='solid' name='heart' color='red' size='md'></box-icon>
                <p>89</p>
            </div>

        </div>
    );
}


export default ProductPreview;