function BarGraph(props){
    return (
        <div className="bar">
            <div style={{width:props.width, height:props.height, backgroundColor:props.fill,borderRadius:5}}>
            </div>
                {props.text}
        </div>
    )
}

export default BarGraph;

