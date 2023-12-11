import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/comparelogo.jpg';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';
import SubNavbar from './SubNavbar';
import { toast } from 'react-toastify';

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user); // Kullanıcı oturum açtıysa true, açmadıysa false
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false);
      toast.success('Çıkış işlemleri gerçekleştiriliyor...');
      // Çıkış yapıldıktan sonra yönlendirme
      history.push('/');
    } catch (error) {
      console.error('Çıkış yaparken bir hata oluştu:', error.message);
    }
  };

  const handleSearch = (e) => {
    
    if (e.key === 'Enter') {
      
      history.push(`/product?search=${searchTerm}`);
    }
  };

  return (
    <>
    
      <nav className="navbar navbar-expand-sm navbar-light py-0">
        <div className="container-fluid py-3">
          <Link to="/">
            <img className="img-fluid" style={{ height: '60px', cursor: 'pointer' }} src={logo} alt="" />
          </Link>
          <input
            className='searchBox h-100 d-sm-flex mt-2 ms-3 w-100'
            type='text'
            placeholder='Ara..'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch} 
          />
          <div className='SignLogin ms-2 p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#d96140" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <div className='mx-1'>
              {loggedIn ? (
                <button onClick={handleLogout}>Çıkış yap</button>
              ) : (
                <Link to="/login">Giriş yap</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <SubNavbar />
    </>
  );
}

export default Navbar;
