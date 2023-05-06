
import './App.css';
import './style.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className='alan'>
        <div class="card" data-aos="fade-right">
          <div class="img-container">
            <div class="img">
              <img src="https://picsum.photos/id/111/600/600" alt="" />
            </div>
            <div class="description cardd">
              <span class="title">
                Card
              </span>
            </div>
          </div>
        </div>

        <div class="card" data-aos="fade-left">
          <div class="img-container">
            <div class="img">
              <img src="https://picsum.photos/id/115/600/600" alt="" />
            </div>
            <div class="description cardd">
              <span  class="title">
                Card
              </span>
            </div>
          </div>
        </div>

      
      </div>

    </div>
  );
}

export default App;
