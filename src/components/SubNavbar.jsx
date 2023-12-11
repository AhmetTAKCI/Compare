import React, { useState } from 'react'
import './SubNavbar.css'
import { useHistory } from "react-router-dom";

function SubNavbar() {
    const [dropDownType, setDropDownType] = useState(undefined)
    const subNavbarItems = ['TELEFON', 'EV-YAŞAM-BAHÇE', 'BİLGİSAYAR-TABLET']
    let parse = require('html-react-parser')
    const telefonSvgs = [
          
    ]
    const basliklar = [
        [
            { "header": "Akıllı Telefon", "subheaders": ['Xiaomi Telefon', 'Huawei Telefon', 'Samsung Telefon', 'iPhone Telefon'], "svgs": telefonSvgs[0] },
            { "header": "Telsiz", "subheaders": [], "svgs": telefonSvgs[1] },
            { "header": "Kulaklık", "subheaders": [], "svgs": telefonSvgs[2] },
            { "header": "Akıllı Saat", "subheaders": [], "svgs": telefonSvgs[3] }
        ],
        [
            { "header": "Beyaz Eşya", "subheaders": ['Xiaomi Telefon', 'Huawei Telefon', 'Samsung Telefon', 'iPhone Telefon'] },
            { "header": "Yapı/Bahçe", "subheaders": ['Batarya', 'Testere', 'Jeneratör', 'Mangal'] },
            { "header": "Mutfak Aletleri", "subheaders": ['Pişiriciler', 'Su Arıtma Cihazı', 'Kahvaltı Takımı', 'Kahve Makinesi'] },
            { "header": "Ev Gereçleri", "subheaders": ['Robot Süpürge', 'Çalışma Koltuğu', 'Valiz', 'Yatak'] }
        ],
        [
            { "header": "Bilgisayarlar", "subheaders": ['Dizüstü Bilgisayar', 'Masaüstü Bilgisayar', 'Tablet', 'Termal Macun'] },
            { "header": "Çevre Bileşenleri", "subheaders": ['Monitör', 'Anakart', 'İşlemci', 'Ekran Kartı'] },
            { "header": "Model ve Ağ", "subheaders": ['Modem', 'Router', 'Menzil Genişletici', 'Kablosuz Adaptör'] },
            { "header": "Depolama", "subheaders": ['SSD Disk', 'Sabit Disk', 'Taşınabilir Disk', 'USB Bellek'] }
        ]
    ]
    let history = useHistory();
    const routeChange = (data) => {
        if (data === undefined) return
        history.push({
            pathname: '/Liste',
            state: { category: data }
        });
    }

    const showDropDown = (value) => {
        const subNavbarItems = document.querySelectorAll('.subNavbarItems');
        for (let item of subNavbarItems) {
            item.removeAttribute("style");
        }
        setDropDownType(value)
    }
    const hideDropDown = (value) => {
        setDropDownType(undefined)
        if (value === undefined) {
            const subNavbarItems = document.querySelectorAll('.subNavbarItems');
            for (let item of subNavbarItems) {
                item.removeAttribute("style");
            }
            return
        }
        const subNavbarDropDown = document.querySelector('.subNavbarDropDown')
        const subNavbarItems = document.querySelectorAll('.subNavbarItems')[value];
        subNavbarDropDown.addEventListener('mouseenter', () => {
            showDropDown(value);
            subNavbarItems.style.backgroundColor = 'white';
            subNavbarItems.style.color = '#d96140'
        })
    }
    return (
        <div className='subNavbar'>
            {subNavbarItems.map((e, i) => (
                <div key={i} className='subNavbarItems p-2' onMouseEnter={() => showDropDown(i)} onMouseLeave={() => hideDropDown(i)} >
                    <p>{e}</p>
                </div>
            ))
            }
            {dropDownType !== undefined ?
                <div className='subNavbarDropDown p-2' onMouseLeave={() => hideDropDown()}>
                    <div className='container'>
                        {/* {dropDownType} */}
                        <div className='row justify-content-center'>
                            {basliklar[dropDownType].map((e, i) => (
                                <div key={i} className='col-4 py-2 col-md-3 d-flex flex-column'>
                                    <div className='subNavbarDropDownItems d-flex align-items-center' onClick={() => routeChange((i + 1) * (dropDownType + 1))}>
                                        <div>
                                            {e.svgs !== undefined ? parse(String(e.svgs)) : ''}
                                        </div>
                                        <div className='ms-1' style={{ fontSize: "14px", fontWeight: "500" }}>
                                            {e.header}
                                        </div>
                                    </div>
                                    <div className='ms-4'>
                                        {e.subheaders.map((e1, i1) => (
                                            <p key={i1} className='ms-1' style={{ fontSize: "13px" }}>- {e1}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> : ''}
        </div >
    )
}

export default SubNavbar