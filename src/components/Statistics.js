import '../styles/statistics.css';


function Statistics(props){
    let text_color= props.text[5]
    return(
        <div className='card'>
            <div className='card_img'><div className='rounded' id={props.id}><img src={props.icon} className="rounded_bg" alt=""/></div></div>
            <div className='card_content'>
                <p><span style={{fontSize:12,color:'grey'}}>{props.text[0]}</span><br/><span style={{fontSize:18, fontWeight: 'bold'}}>{props.text[1]}</span><br/>
                <img src={props.text[2]} className='arrow' alt=""/><span style={{fontSize:12, fontWeight: 'bold',color:text_color}}>{props.text[3]}</span> 
                <span style={{fontSize:12}}>&ensp;{props.text[4]}</span></p>
            </div>
        </div>
    )
}

export default Statistics;