
import React from 'react'

const SectionStories: React.FC = () => {
    return (
        <section className="section-stories">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                <source src={require('../img/video.mp4')} type="video/mp4" />
                <source src={require('../img/video.webm')} type="video/webm" />
                Your browser is not supported!
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                We make people genuinely happy
                </h2>
            </div>

            <div className="row">
                <div className="story">
                <figure className="story__shape">
                    <img src={require('../img/nat-8.jpg')}  alt="Person on tour" className="story__img"/>
                    <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary">I had the best week ever with my family</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates saepe cumque nam doloribus magnam accusantium doloremque vel aperiam magni? Ullam temporibus deserunt, labore aperiam itaque dolore incidunt totam numquam eveniet possimus odit enim fuga consequatur, facilis ex tempora aut molestiae quod esse similique, nihil dicta. Libero eum quaerat itaque nihil.
                    </p>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="story">
                <figure className="story__shape">
                    <img src={require('../img/nat-9.jpg')}  alt="Person on tour" className="story__img"/>
                    <figcaption className="story__caption">Jake Wilson</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary">WOW! My life is completely different now</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates saepe cumque nam doloribus magnam accusantium doloremque vel aperiam magni? Ullam temporibus deserunt, labore aperiam itaque dolore incidunt totam numquam eveniet possimus odit enim fuga consequatur, facilis ex tempora aut molestiae quod esse similique.
                    </p>
                </div>
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn-text">Read all stories &rarr;</a>
            </div>
            </section>
    )
}

export default SectionStories