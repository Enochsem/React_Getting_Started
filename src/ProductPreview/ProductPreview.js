import classes from './ProductPreview.module.css';


const ProductPreview= (props)=> {

    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()
    const currentHour = hour > 9 ? hour : '0'+hour;
    const currentMinutes = minutes > 9 ? minutes : '0'+minutes;

    


    return (
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImage} />

            {
                props.showHeartBeatSection ?
                <div className={classes.HeartBeatSection}>
                    <box-icon type='solid' name='heart' color='red' size='md'></box-icon>
                    <p>89</p>
                </div>
                :
                <div className={classes.TimeSection}>
                    <p >{`${currentHour}:${currentMinutes}`}</p>
                </div>
            }

            

            

        </div>
    );
}


export default ProductPreview;