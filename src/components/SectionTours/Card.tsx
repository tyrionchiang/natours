import React from 'react'

interface CardProps {
    styleNum: number
    heading: string
    list: string[]
    price: number
}

const Card: React.FC<CardProps> = props => {

    return (
        <div className="card">
            <div className="card__side card__side--front">
            <div className={ "card__picture card__picture--"+props.styleNum }>
                &nbsp;
            </div>
            <h4 className="card__heading">
                <span className={ "card__heading-span card__heading-span--"+props.styleNum }>{ props.heading }</span>
            </h4>
            <div className="card__details">
                <ul>
                    {props.list.map(detail => (
                        <li>{detail}</li>
                    ))}
                </ul>
            </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
                <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">${props.price}</p>
                </div>
                <a href="#" className="btn btn--white">Book now!</a>
            </div>
            </div>
        </div>       
    )
}

export default Card