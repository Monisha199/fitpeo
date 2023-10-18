import '../styles/sidebar.css';


function Sidebar(){
    return(
        <div className='outerLayout'>
            <div className='dashboard'><p className='iconContainer'><img src="https://cdn-icons-png.flaticon.com/128/10097/10097320.png" className='icon' alt=""/>
            </p><p className='liContent' style={{height:30,width:50}}>Dashboard </p></div>
            
            
            <ul type="none">
                <li className='liSelected'><p className='iconContainer'><img src="https://cdn-icons-png.flaticon.com/128/11200/11200571.png" className='icon' alt="dashboard"/>
                </p><p className='liContent'>Dashboard </p> <img src="" className='rightArrow' alt=""/></li>
                <li><p className='iconContainer'><img src="https://cdn-icons-png.flaticon.com/128/11536/11536437.png" className='icon' alt="Products"/>
                </p><p className='liContent'>Products  </p><img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" className='rightArrow' alt="" /></li>
                <li><p className='iconContainer'><img src="https://cdn-icons-png.flaticon.com/128/3095/3095829.png" className='icon' alt="Customers"/>
                </p><p className='liContent'>Customers </p><img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" className='rightArrow' alt="" /></li>
                <li><p className='iconContainer'><img src="https://cdn-icons-png.flaticon.com/128/11214/11214464.png" className='icon' alt="Income"/>
                </p><p className='liContent'>Income </p><img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" className='rightArrow' alt="" /></li>
                <li><p className='iconContainer'><img src="https://cdn-icons-png.flaticon.com/128/10584/10584952.png" className='icon' alt="Promote"/>
                </p><p className='liContent'>Promote </p><img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" className='rightArrow' alt="" /></li>
                <li><p className='iconContainer'><img src="https://cdn-icons-png.flaticon.com/128/10342/10342464.png" className='icon' alt="Help"/>
                </p><p className='liContent'>Help </p><img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" className='rightArrow' alt="" /></li>
            </ul>
            <div className='evano'>
                <div className="inlineBlock">
                    <img src="https://t3.ftcdn.net/jpg/06/21/02/64/240_F_621026409_TDBPcX1JsGqypQe1yqINGNUwkWhfoNSy.jpg" className="product_img inlineBlock evano_img" alt=""/>
                </div>
                <div className="inlineBlock" style={{marginLeft:10}}>
                        <p className='textLeft inlineBlock'><span style={{fontWeight:'bold'}}>Evano</span><br/>
                        <span style={{fontSize:12,color:'grey'}}>Project Manager</span></p>&emsp;
                        <img src="https://cdn-icons-png.flaticon.com/128/8213/8213476.png" className='downArrow inlineBlock' style={{marginTop:-20}} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;