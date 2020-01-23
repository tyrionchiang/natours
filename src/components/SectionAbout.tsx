
import React from 'react'

const SectionAbout: React.FC = () => {
    return (
        <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
            Exiting tours for adventurous people
            </h2>
        </div>

        <div className="row">
            <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat harum doloribus nihil veniam qui consequuntur tenetur, autem, hic sed illo, repellat saepe reprehenderit modi molestiae.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat harum doloribus nihil veniam qui consequuntur tenetur, autem, hic sed illo.
            </p>

            <a href="#" className="btn-text">Learn more &rarr;</a>
            </div>
            <div className="col-1-of-2">
            <div className="composition">
                <img src={require('../img/nat-1-large.jpg')} alt="Photo1" className="composition__photo composition__photo--p1"/>
                <img src={require('../img/nat-2-large.jpg')} alt="Photo2" className="composition__photo composition__photo--p2"/>
                <img src={require('../img/nat-3-large.jpg')} alt="Photo3" className="composition__photo composition__photo--p3"/>
            </div>
            </div>
        </div>
        </section>
    )
}

export default SectionAbout