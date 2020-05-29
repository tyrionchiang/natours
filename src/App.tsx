import React from 'react'
import Header from './components/Header'
import SectionAbout from './components/SectionAbout'
import SectionFeatures from './components/SectionFeatures';
import SectionTours from './components/SectionTours/SectionTours';
import SectionStories from './components/SectionStories';
import SectionBook from './components/SectionBook';

const App: React.FC = () => {
return (
<div className="App">

  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

    <label htmlFor="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <div className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Natous</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benfits</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular tours</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
      </ul>
    </div>
  </div>


  <Header />

  <main>
    <SectionAbout />

    <SectionFeatures />

    <SectionTours />

    <SectionStories />

    <SectionBook />

  </main>

  <footer className="footer">
    <div className="footer__logo-box">
        <picture className="footer__logo">
          <source srcSet={`${require('./img/logo-green-small-1x.png')} 1x, ${require('./img/logo-green-small-2x.png')} 2x`} 
                  media="(max-width: 37.5em)"/>
          <img srcSet={`${require('./img/logo-green-1x.png')} 1x, ${require('./img/logo-green-2x.png')} 2x`} alt="Full logo" src={require('./img/logo-green-2x.png')} />
        </picture>



    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
          Built my <a href="#" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" className="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtnabb, is of course highly appreciated!
        </p>
      </div>
    </div>
  </footer>

  <div className="popup" id="popup">
    <div className="popup__content">
      <div className="popup__left">
        <img src={require('./img/nat-8.jpg')} alt="Tour Photo" className="popup__img"/>
        <img src={require('./img/nat-9.jpg')} alt="Tour Photo" className="popup__img"/>
      </div>

      <div className="popup__right">
        <a href="#section-tours" className="popup__close">&times;</a>
        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">Important &ndsh; Please read these terms before booking</h3>
        <p className="popup__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ad, sed commodi reiciendis dolore, harum officiis accusamus doloremque recusandae voluptatibus culpa nihil pariatur sunt neque? Dolor fuga explicabo laboriosam, eos delectus modi nesciunt obcaecati corrupti totam nisi cupiditate libero omnis placeat doloribus odio ut dignissimos iure ex ad quas doloremque possimus error quisquam aliquid? Ut omnis fuga temporibus, suscipit quia minima magnam consectetur repudiandae voluptate totam sit facilis odit sapiente accusantium deleniti impedit.
        </p>
        <a href="#" className="btn btn--green">Book now</a>
      </div>
    </div>
  </div>
  
</div>
);
}

export default App;