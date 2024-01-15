import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`https://canva-templates-fiest-project-60ed7bdc5f20.herokuapp.com/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `https://canva-templates-fiest-project-60ed7bdc5f20.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (
    <>
      {
        banners.map(banner =>
          <section id="home" className="slider-area slider-four fix p-relative">
            <div className="slider-active">
              <div
                className="single-slider slider-bg d-flex align-items-center"
                style={{
                  background: "url(img/slider/slider_img_bg.png) no-repeat",
                  backgroundPosition: "center center",
                }}
              >
                <div className="container">
                  <div className="row justify-content-center pt-50 pb-150">
                    <div className="col-lg-7">

                      <div className="slider-content s-slider-content mt-200 banner-heading">
                        <h3 data-animation="fadeInUp" data-delay=".4s">
                          {banner.bannerHeading}
                        </h3>
                        <p data-animation="fadeInUp" data-delay=".6s">
                          {banner.bannerDetails}
                        </p>
                        <Link to='/order-now' class="btn ss-btn mt-5" data-animation="fadeInRight" data-delay=".8s">Buy Now $29 USD</Link>
                      </div>



                    </div>
                    <div className="col-lg-5">
                      <div
                        className="slider-img"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        <img src={banner.bannerImage} alt="slider_img05" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }
    </>
  );
};

export default Banner;
