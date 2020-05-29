
import React from 'react'
import Card from './Card';

const SectionTours: React.FC = () => {
    return (
        <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                Most popular tours
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <Card 
                    heading="The Snow Adventure" 
                    list={['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy']} 
                    styleNum={1} 
                    price={297} />
                </div>
                <div className="col-1-of-3">
                    <Card 
                    heading="The Snow Adventure" 
                    list={['7 day tours', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium']} 
                    styleNum={2} 
                    price={497} />
                </div>
                <div className="col-1-of-3">
                    <Card 
                    heading="The Snow Adventure" 
                    list={['5 day tours', 'Up to 15 people', '3 tour guides', 'Sleep in provided tents', 'Difficulty: hard']} 
                    styleNum={3} 
                    price={897} />
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn btn--green">Discover all tours</a>
            </div>
        </section>
    )
}

export default SectionTours