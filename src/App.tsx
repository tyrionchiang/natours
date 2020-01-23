import React from 'react'
import Header from './components/Header'
import SectionAbout from './components/SectionAbout'

const App: React.FC = () => {
return (
<div className="App">
  <Header />

  <main>
    <SectionAbout />

    <section className="section-features">

      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam provident numquam ab id
              impedit dolores modi placeat quis sed.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam provident numquam ab id
              impedit dolores modi placeat quis sed.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam provident numquam ab id
              impedit dolores modi placeat quis sed.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam provident numquam ab id
              impedit dolores modi placeat quis sed.
            </p>
          </div>
        </div>
      </div>

    </section>

    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Most popular tours
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <a href="#" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>7 day tours</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$497</p>
                </div>
                <a href="#" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">The Snow Adventure</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$897</p>
                </div>
                <a href="#" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">Discover all tours</a>
      </div>
    </section>
  </main>
  {/* <section className="grid-test">
    <div className="row">
      <div className="col-1-of-2">
        col 1 of 2
      </div>
      <div className="col-1-of-2">
        col 1 of 2
      </div>
    </div>

    <div className="row">
      <div className="col-1-of-3">
        col 1 of 3
      </div>
      <div className="col-1-of-3">
        col 1 of 3
      </div>
      <div className="col-1-of-3">
        col 1 of 3
      </div>
    </div>

    <div className="row">
      <div className="col-1-of-3">
        col 1 of 3
      </div>
      <div className="col-2-of-3">
        col 2 of 3
      </div>
    </div>

    <div className="row">
      <div className="col-1-of-4">
        col 1 of 4
      </div>
      <div className="col-1-of-4">
        col 1 of 4
      </div>
      <div className="col-1-of-4">
        col 1 of 4
      </div>
      <div className="col-1-of-4">
        col 1 of 4
      </div>
    </div>

    <div className="row">
      <div className="col-1-of-4">
        col 1 of 4
      </div>
      <div className="col-1-of-4">
        col 1 of 4
      </div>
      <div className="col-2-of-4">
        col 2 of 4
      </div>
    </div>

    <div className="row">
      <div className="col-1-of-4">
        col 1 of 4
      </div>
      <div className="col-3-of-4">
        col 3 of 4
      </div>
    </div>
  </section> */}
</div>
);
}

export default App;