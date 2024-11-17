import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Cards from './components/Cards';
import Block from './components/Block';

function App(props) {
  //1 method to access name
  // const itemonename="Nirma";
  //2. method to access name -> by fetching from api
  const response=[
    {
      ItemName:"Nirma",
      ItemDate:"8",
      ItemMonth:"May",
      ItemYear:"2003"
    },
    {
      ItemName:"SurfExcel",
      ItemDate:"10",
      ItemMonth:"July",
      ItemYear:"2024"
    },
    {
      ItemName:"Tide",
      ItemDate:"20",
      ItemMonth:"April",
      ItemYear:"1832"
    }
  ]
  function ClickHandler(){
    console.log("button is clicked");
}
  return (
   <div className='app'>
     <Cards>
    {/* <div className="App">Hello Jee</div> */}
    <Block>
    <button onClick={ClickHandler}>Add to Cart</button>

    <Item name={response[0].ItemName}></Item>
    <ItemDate date={response[0].ItemDate} month={response[0].ItemMonth} year={response[0].ItemYear}></ItemDate>
    </Block>
    {/* <div className="App">Hello Jee</div> */}
    <Block>
    <Item name={response[1].ItemName}></Item>
    <ItemDate date={response[1].ItemDate} month={response[1].ItemMonth} year={response[1].ItemYear}></ItemDate>
    </Block>
    {/* <div className="App">Hello Jee</div>/ */}
    <Block>
    <Item name={response[2].ItemName}></Item>
    <ItemDate date={response[2].ItemDate} month={response[2].ItemMonth} year={response[2].ItemYear}></ItemDate>
    </Block>
    </Cards>
    </div>
  );
}

export default App;
