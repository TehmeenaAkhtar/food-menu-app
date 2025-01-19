import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { GoDash } from "react-icons/go";
import { BiFoodMenu, BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook, FaShoppingCart } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import SearchResult from './components/SearchResult/SearchResult';
import LoginSignup from './components/LoginSignup';

export const BASE_URL="http://localhost:9000";

function App() {
  const[data, setData]=useState([]);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState(null);
  const[filteredData, setFilteredData]=useState("");
   

  useEffect (()=>{
    const fetchFoodData= async ()=>{
      setLoading(true);
  
      try {
      const response = await fetch(BASE_URL); 
      
      const json = await response.json();
  
      setData(json);
      setLoading(false);
      } catch(error) {
      setError ("Unable to fetch data");  
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) =>{
    console.log(e.target.value);
    setFilteredData(e.target.value);
}
let filterOut = data.filter((curValue)=>{
    return curValue.name.toLowerCase().includes(filteredData);
  }) 


  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>
  return (
    <div>
      <Header></Header>
      <input className="inp" onChange={searchFood}  placeholder=" Search Food.." /> 
        <div id="OurPizzasFlavours-section">
        <div className="sec">
          <GoDash style={{ fontSize: "190px", width: "57px", marginTop: "90px" }} />
          <h1 className='head'>Our Pizzas Flavours</h1>
          <GoDash style={{ fontSize: "190px", width: "57px", marginTop: "90px" }} />
        </div>
        </div>

        <SearchResult data={filterOut.slice(0,6)}/> 

        <div id="SpecificDeals-section">
        <div className="sec">
          <GoDash style={{ fontSize: "190px", width: "57px", marginTop: "90px" }} />
          <h1 className='head'>Specific Deals</h1>
          <GoDash style={{ fontSize: "190px", width: "57px", marginTop: "90px" }} />
        </div>
      </div>
      <SearchResult data={filterOut.slice(6, 12)} /> 

      <div id="Combo-section">
      <div className="sec">
    <GoDash style={{ fontSize: "190px",width:"57px",  marginTop:"90px" }} />
    <h1 className='head'>Combo</h1>
    <GoDash style={{ fontSize: "190px",width:"57px",  marginTop:"90px"}} />
    </div>
    </div> 
    <SearchResult data={filterOut.slice(12, 17)} /> 

    <div id="Appetizers-section">
    <div className="sec">
    <GoDash style={{ fontSize: "190px",width:"57px",  marginTop:"90px" }} />
    <h1 className='head'>Appetizer</h1>
    <GoDash style={{ fontSize: "190px",width:"57px",  marginTop:"90px"}} />
   </div>
   </div>
   <SearchResult data={filterOut.slice(17, 22)}/> 

   <div id="Beverages-section">
   <div className="sec"> 
    <GoDash style={{ fontSize: "190px",width:"57px",  marginTop:"90px" }} />
    <h1 className='head'>Beverages</h1>
    <GoDash style={{ fontSize: "190px",width:"57px",  marginTop:"90px"}} />
   </div>
   </div>
   <SearchResult data={filterOut.slice(22, 23)} />    

   <footer>
            <h1 className='heading'>
              <BiSolidPhoneCall style={{width:"45px", height:"44px", paddingTop:"50px", paddingRight:"10px"}} />
              Contact Us:</h1>
            <p>03358712963</p>
            <div className='icons'>
            <FaFacebook style={{width:"45px", height:"44px", paddingRight:"20px"}} />
            <FaInstagramSquare style={{width:"45px", height:"44px"}} />
            </div>
          </footer>

    <LoginSignup/>
    </div>
  );
}

export default App;










