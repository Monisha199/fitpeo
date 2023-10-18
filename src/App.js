import './App.css';
import Sidebar from './components/sidebar';
import Statistics from './components/Statistics';
import BarGraph from './components/Bargraph';
import DonutChart from './components/Donutchart';
import Product from './components/product';



function App() {
  let wave ="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f44b.svg"

  let graphDimension=[
    {width:40,height:150,fill:"#CBCEF6",text:"Jan"},
    {width:40,height:100,fill:"#CBCEF6",text:"Feb"},
    {width:40,height:180,fill:"#CBCEF6",text:"Mar"},
    {width:40,height:162,fill:"#CBCEF6",text:"Apr"},
    {width:40,height:170,fill:"#CBCEF6",text:"May"},
    {width:40,height:80,fill:"#CBCEF6",text:"Jun"},
    {width:40,height:140,fill:"#CBCEF6",text:"Jul"},
    {width:40,height:220,fill:"#573BE0",text:"Aug"},
    {width:40,height:190,fill:"#CBCEF6",text:"Sep"},
    {width:40,height:162,fill:"#CBCEF6",text:"Oct"},
    {width:40,height:148,fill:"#CBCEF6",text:"Nov"},
    {width:40,height:184,fill:"#CBCEF6",text:"Dec"}
  ]

  let productData=[
    ["","Product Name","","Stock","Price","Total Sales"],
    ["https://t3.ftcdn.net/jpg/06/22/79/90/240_F_622799070_4rNg2Vd1vo9HNAjwb7D5lYchortTHzrm.jpg","Abstarct 3D","Abstract 3d image and profile", "32 in stock","$45.99","20"],
    ["https://t4.ftcdn.net/jpg/05/96/91/21/240_F_596912148_4SvbV1VNYL24hoXAk7baqbpkfCk2ClOy.jpg","Sarphens Illustration","Sarphens Illustration image", "32 in stock","$45.99","20"],
  ]
  return (
    <div className="App">
      <div className='sideLayout'><Sidebar/></div>
      <div className='mainLayout'>
        <div className='section_1'>
          <div style={{fontSize:20, paddingTop:18}}>Hello Shahrukh &ensp;<img src={wave} className="handEmoji" alt="wave"/></div>
          <div><input className='search' placeholder='Search'/></div>
        </div>
        <div class="section_2">
          <Statistics icon={"https://cdn-icons-png.flaticon.com/128/7245/7245115.png"} id="earning" text={["Earning","$198K","https://cdn-icons-png.flaticon.com/128/4227/4227687.png","37.8%","this month","green"]}/>
          <Statistics icon ={"https://cdn-icons-png.flaticon.com/128/1031/1031993.png"}id="orders" text={["Orders","$2.4K","https://cdn-icons-png.flaticon.com/128/5548/5548825.png","2%","this month","red"]}/>
          <Statistics icon ={"https://cdn-icons-png.flaticon.com/128/6908/6908846.png"} id="balance" text={["Balance","$2.4K","https://cdn-icons-png.flaticon.com/128/5548/5548825.png","2%","this month","red"]}/>
          <Statistics icon ={"https://cdn-icons-png.flaticon.com/128/11390/11390923.png"} id="sales" text={["Total sales","$89K","https://cdn-icons-png.flaticon.com/128/4227/4227687.png","11%","this week","green"]}/>
        </div>
        <div class="section_3">
          <div class="overview">
            <p className='textLeft'><span style={{fontWeight:'bold'}}>Overview</span><br/><span style={{fontSize:12,color:'grey'}}>Monthly Earning</span>
            <div className='dropdown' style={{marginTop:-15,marginRight:40}}>Quarterly &emsp;&emsp; <img src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png" className='downArrow' alt=""/></div>
            </p>
            
            {graphDimension.map((item)=>{
              return <BarGraph width={item.width} height={item.height} fill={item.fill} text={item.text}/>})}
          </div>
          <div class="customers">
            <p className='textLeft'><span className='bold'>Customers</span><br/><span className='smallText'>Customers that buy products</span></p>
            <div style={{paddingTop:20}}><DonutChart/></div>
          </div>
        </div>
        <div className='section_4'>
        <p  className='textLeft' style={{display:'inline-block'}}><span className='bold'>Product Sell</span></p>
          <div className='dropdown'>Last 30 days&emsp; <img src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png" className='downArrow' alt=""/></div>
          <input className='search' placeholder='Search' style={{backgroundColor:"#F5F5F6"}}/>
          <div style={{paddingLeft:20,paddingTop:20}}>
            <table>              
              <Product details={productData[0]}/>
              <hr/>
              <Product details={productData[1]}/>
              <Product details={productData[2]}/>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

