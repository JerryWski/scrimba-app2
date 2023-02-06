import Card from "./components/Card";
import Header from "./components/Header";
import offerData from "./data"

const App = () => {
  const dataElements = offerData.map((data)=> {
    return <Card
      key={data.id} {...data}
    />
   
  })
  return (
    <div>
      <Header />
      {dataElements}
    </div>
  );
};

export default App;
