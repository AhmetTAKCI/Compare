import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginCard from './components/LoginCard';
import { ToastContainer } from 'react-toastify';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import LastAddedProducts from './components/LastAddedProducts';
import PopulerProducts from './components/PopulerProducts';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import Product from './components/Product';



function App() {
  const [users, setUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const authInstance = getAuth();
    onAuthStateChanged(authInstance, (user) => {
      if (user) {
        const uid = user.uid;
        setUsers(user);
      } else {
        // Kullanıcı oturumu kapatmışsa yapılacak işlemler
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            <div className='row mt-1'>
              <Carousel></Carousel>
            </div>
            <LastAddedProducts></LastAddedProducts>
            <PopulerProducts></PopulerProducts>
          </Route>
          <Route path="/login" element={<LoginWithNavbar users={users} />}>
            <LoginCard />
          </Route>
          <Route path="/product" element={<ProductWithNavbar searchTerm={searchTerm} />}>
            <Product searchTerm={searchTerm} />
            
          </Route>
        </Switch>
      </Router>

   

      <>
        <Footer></Footer>
      </>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />

      <ToastContainer />
    </div>
  );
}

const LoginWithNavbar = ({ users }) => (
  <>
    <Navbar users={users} />
    <LoginCard />
  </>
);

const ProductWithNavbar = ({ searchTerm }) => (
  <>
    <Navbar searchTerm={searchTerm} />
    <Product searchTerm={searchTerm} />
  </>
);

export default App;
