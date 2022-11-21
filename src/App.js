import './App.css';
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Data from "./Components/data"

function App() {
  const cardData = Data.map((item) => {
    return (
      <Card 
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />

    )
  })

  return (
<div className = "travel-page"> 
    <Navbar />
    {cardData}
</div>
  )
}

export default App;
