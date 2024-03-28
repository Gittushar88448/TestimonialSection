import Testimonials from "./componenets/Testimonials"
import reviews from "./data";

function App() {
  return (
    <div className="App">
      <div>

        <div>
          <h1>Our Testimonials</h1>
          <div></div>
        </div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
