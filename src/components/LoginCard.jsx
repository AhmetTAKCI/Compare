import React, { useState } from 'react';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import './LoginCard.css';

const LoginCard = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({ email: '', password: ''});
  const [userName, setUserName] = useState(""); 

  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = async () => {
    if (signUp) {
     try {
        const data = await signInWithEmailAndPassword(auth, authData.email, authData.password);
        const user = data.user;
        if (user) {
         
          setUserName(user.displayName || "");

          window.location = "/"; 
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password);
        const user = data.user;
        if (user) {
          // Kullanıcının ad soyad bilgisini Firebase'e ekleyin
          await updateProfile(user, { displayName: authData.name });

          // Kullanıcı adını ve soyadını güncelle
          setUserName(authData.name);

          window.location = "/"; 
        }
      } catch (error) {
        toast.error(error.message);
      }
      
    }
  };

  return (
    <div className='body'>
      <div className='auth'>
        <h2>{signUp ? "Giriş yap" : "Kayıt Ol"}</h2>
        {signUp ? (
          <>
           
            <input type="email" value={authData.email} onChange={onChangeFunc} name="email" placeholder='Email' />
            <input type="password" value={authData.password} onChange={onChangeFunc} name="password" placeholder='Password' />
            </>

        ) : ( 
          <>
          <input type="text" value={authData.name} onChange={onChangeFunc} name="name" placeholder='Ad Soyad' />
          <input type="email" value={authData.email} onChange={onChangeFunc} name="email" placeholder='Email' />
          <input type="password" value={authData.password} onChange={onChangeFunc} name="password" placeholder='Password' />
          </>
          

        )}



        <p onClick={() => setSignUp(!signUp)}>
          {signUp ? "Kayıt mı olmak istiyor musunuz?" : "Daha önceden kayıt oldunuz mu?"}
        </p>

        <div className='auth-container-button' onClick={authFunc}>
          {signUp ? "Giriş Yap" : "Kayıt Ol"}
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
