// Gerekli kütüphaneleri import ediyoruz.
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SubNavbar.css';

const SubNavbar = () => {
  const [active, setActive] = useState([false, false, false]);
  const history = useHistory();

  // Her üst başlık için farklı alt başlıklar tanımlıyoruz.
  const subTitles = [
    ['cola', 'Alt Başlık 1.2', 'Alt Başlık 1.3'],
    ['Alt Başlık 2.1', 'Alt Başlık 2.2', 'Alt Başlık 2.3'],
    ['Alt Başlık 3.1', 'Alt Başlık 3.2', 'Alt Başlık 3.3']
  ];

  const handleItemClick = (subTitle) => {
    const searchQuery = `search=${subTitle}`;
    history.push(`/product?${searchQuery}`);
  };

  return (
    <nav className='titleNav'>
      <ul style={{ display: 'flex', justifyContent: 'center' }}>
        {['Market Ürünleri', 'Teknolojik Ürünler', 'Ev Yaşam Bahçe'].map((title, index) => (
          <li
            key={title}
            onMouseEnter={() => {
              let newActive = [...active];
              newActive[index] = true;
              setActive(newActive);
            }}
            onMouseLeave={() => {
              let newActive = [...active];
              newActive[index] = false;
              setActive(newActive);
            }}
          >
            {title}
            {active[index] && (
              <ul onMouseLeave={() => {
                let newActive = [...active];
                newActive[index] = false;
                setActive(newActive);
              }}>
                {subTitles[index].map(subTitle => (
                  <li key={subTitle} value={subTitle} onClick={() => handleItemClick(subTitle)}>{subTitle}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavbar;
