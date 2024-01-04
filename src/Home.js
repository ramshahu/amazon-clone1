import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        <div className="home_row">
          <Product id="12321341"
            title="HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, NVIDIA RTX 3050 GPU, 15.6-inch (39.6 cm), FHD, IPS, 144Hz, 9 ms Response time, 16GB DDR4, 512GB SSD, Backlit KB (MSO, Blue, 2.29 kg) fa0666TX"
            price={899}
            rating={3}
            image="https://m.media-amazon.com/images/I/71h9nOTd93L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product id="49538094"
            title="LG 9 Kg 5 Star Wi-Fi Inverter AI Direct Drive Fully-Automatic Front Load Washing Machine with In-Built Heater (FHP1209Z5M, 6 Motion DD & Steam for Hygiene Wash, Middle Black)"
            price={789.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PhPqy10xL._AC_UY327_FMwebp_QL65_.jpg"
          />

        </div>
        <div className="home_row">
          <Product id="4903850"
            title="Apple Watch Ultra 2 GPS + Cellular 49mm Titanium Case with Olive Alpine Loop - Small with AppleCare+ (2 Years)"
            price={873.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71eop3JGDpL._AC_UY327_FMwebp_QL65_.jpg" />

          <Product id="23445930"
            title="JBL Charge 5 Wi-Fi Portable Wireless Speaker"
            price={149.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Vp8S5aaJL._AC_UY327_FMwebp_QL65_.jpg" />

          <Product id="3254354345"
            title="Apple iPhone 15 Pro Max (256 GB) - Blue Titanium"
            price={900}
            rating={4}
            image="https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UY327_FMwebp_QL65_.jpg" />

        </div>
        <div className="home_row">
          <Product id="90829332"
            title="Sony OLED 65 inch BRAVIA XR A80K Series 4K Ultra HD TV: Smart Google TV with Dolby Vision HDR and Exclusive Gaming Features for The Playstation® 5 XR65A80K- 2022 Model"
            price={1399.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71tGmVyNI7L._AC_UY327_FMwebp_QL65_.jpg" />

        </div>
      </div>
    </div>
  )
}

export default Home