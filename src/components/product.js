function Product(props){
    let img_present = Boolean(props.details[0]);
    let showImg=<></>
    if(img_present){
        showImg=<img src={props.details[0]} className="product_img inlineBlock" alt=""/>
    }else{
        showImg=<></>
    }
    return (
        <div>
            <tr>
                <td style={{width:650}}>
                    <div className="inlineBlock">
                        {showImg}
                    </div>
                    <div className="inlineBlock" style={{marginLeft:20}}>
                        <p className='textLeft'><span>{props.details[1]}</span><br/>
                        <span style={{fontSize:12,color:'grey'}}>{props.details[2]}</span></p>
                    </div>
                </td>
                <td style={{width:150, textAlign:"center"}}>{props.details[3]}</td>
                <td style={{width:150,textAlign:"center"}}>{props.details[4]}</td>
                <td style={{width:150,textAlign:"center"}}>{props.details[5]}</td>
            </tr>
        </div>
    )
}

export default Product;