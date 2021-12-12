import React from "react";
import Product from "./Product"
import "./Home.css"


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=" amazon-hero" 
                />

                <div className="home__row">
                    <Product
                        id = "112345653"
                        title = " The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses  "
                        image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                        price = {14.49}
                        rating = {5}
                    />
                    <Product
                            id = '3456787654'
                            title = 'Kenwood mixer:  VIVOHOME Stand Mixer, 650W 6 Speed 6 Quart Tilt-Head Kitchen Electric Food Mixer with Beater, Dough Hook and Wire Whip, Red                '
                            image = 'https://m.media-amazon.com/images/I/81poj2KljLL._AC_SL1500_.jpg'
                            price = {570}
                            rating = {4}
                        />
                </div>

                <div className="home__row">
                    <Product
                            id = '3456787654'
                            title = 'Kenwood mixer:  VIVOHOME Stand Mixer, 650W 6 Speed 6 Quart Tilt-Head Kitchen Electric Food Mixer with Beater, Dough Hook and Wire Whip, Red                '
                            image = 'https://m.media-amazon.com/images/I/81poj2KljLL._AC_SL1500_.jpg'
                            price = {570}
                            rating = {4}
                        />
                    
                    <Product
                            id = '3456787654'
                            title = 'Kenwood mixer:  VIVOHOME Stand Mixer, 650W 6 Speed 6 Quart Tilt-Head Kitchen Electric Food Mixer with Beater, Dough Hook and Wire Whip, Red                '
                            image = 'https://m.media-amazon.com/images/I/81poj2KljLL._AC_SL1500_.jpg'
                            price = {570}
                            rating = {4}
                        /> 

                    <Product
                            id = '3456787654'
                            title = 'Kenwood mixer:  VIVOHOME Stand Mixer, 650W 6 Speed 6 Quart Tilt-Head Kitchen Electric Food Mixer with Beater, Dough Hook and Wire Whip, Red                '
                            image = 'https://m.media-amazon.com/images/I/81poj2KljLL._AC_SL1500_.jpg'
                            price = {570}
                            rating = {4}
                        />               
                </div>

                <div className="home__row">
                <Product
                            id = '3456787654'
                            title = 'Kenwood mixer:  VIVOHOME Stand Mixer, 650W 6 Speed 6 Quart Tilt-Head Kitchen Electric Food Mixer with Beater, Dough Hook and Wire Whip, Red                '
                            image = 'https://m.media-amazon.com/images/I/81poj2KljLL._AC_SL1500_.jpg'
                            price = {570}
                            rating = {4}
                        />  
                </div>
            </div>
        </div>
    )
}

export default Home
