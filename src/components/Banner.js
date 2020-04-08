import React from 'react'
import logo from '../image/hinh-nen-phim-noi-tieng (13).jpg'
import logo_1 from '../image/https___hypebeast.com_image_2019_04_amc-marvel-cinematic-universe-marathon-avengers-endgame-2.jpg'
import logo_2 from '../image/hinh-nen-harry-potter-dep-nhat (11).jpg'
import logo_3 from '../image/the_hobbit_the_battle_of_the_five_armies-wallpaper-1280x800 (4).jpg'

export default function Banner() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner " style={{height: '525px'}}>
                    <div className="carousel-item active">
                        <img className="w-100 h-100" src={logo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 h-100" src={logo_1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 h-100" src={logo_2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 h-100" src={logo_3} className="d-block w-100" alt="..." />
                    </div>
                    {/* <div className="carousel-item">
                        <img className="w-100 h-100" src={logo_4} className="d-block w-100" alt="..." />
                    </div> */}
                    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
