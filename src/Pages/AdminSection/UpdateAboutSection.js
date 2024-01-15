import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateAboutSection = () => {

    const [about, setAbout] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      fetch(`https://canva-templates-fiest-project-60ed7bdc5f20.herokuapp.com/about-us/${id}`)
        .then((res) => res.json())
        .then((info) => setAbout(info));
    }, [id]);
  


    const handleAboutSection = (event) => {
        event.preventDefault();
        const aboutText = event.target.aboutText.value;
        const aboutHeading = event.target.aboutHeading.value;
        const aboutDetails = event.target.aboutDetails.value;
        const aboutPointone = event.target.aboutPointone.value;
        const aboutPointwo = event.target.aboutPointwo.value;
  
        const aboutImage = event.target.aboutImage.value;


        const aboutSection = {
            aboutText,
            aboutHeading,
            aboutDetails,
            aboutPointone,
            aboutPointwo,

            aboutImage,

        };

        const url = `https://canva-templates-fiest-project-60ed7bdc5f20.herokuapp.com/update-about/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
            });
    };



    return (
        <div>
       
                    <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update About </h2>

                            
                                <form class="contact-form " onSubmit={handleAboutSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="aboutText" defaultValue={about.aboutText} placeholder="About Text" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" name="aboutHeading" defaultValue={about.aboutHeading} placeholder="About Heading" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <textarea type="text" name="aboutDetails" defaultValue={about.aboutDetails} placeholder="About Details" required />
                                        </div>
                                    </div>


                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="aboutPointone" defaultValue={about.aboutPointone} placeholder="About Point One" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="aboutPointwo" defaultValue={about.aboutPointwo} placeholder="About Point Two" required />
                                        </div>
                                    </div>

                                 

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text"  name="aboutImage" defaultValue={about.aboutImage} placeholder="About Image" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
                                    </div>
                                </div>

                            </form>

                            

                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateAboutSection;