import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from './Carousel';



export function Login() {
    return (
        <div className="App">
            <div className='container'>
                <Navbar></Navbar>

          <div className='row mt-1'>
          <Carousel></Carousel>
          
        </div>
                
            </div>

           
            <Footer></Footer>
        </div>
        
    );
}
