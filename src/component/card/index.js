import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.css';

const Card = ({ economyCar }) => {
  // console.log(economyCar)
  economyCar.map((car, index) => {
    return (
      <div div className="card" key={car.name} >
        <img className="card-img-top" src={car.image} alt="" />
        <div className="card-body">
          <div className="card-title">
            <span className='car-title'>{car.name}</span><br />
            <span className='car-year'>2016</span>
          </div>
          <div className="card-text">
            <span className='text-lable-1'>Free cancellation up</span>&nbsp;
            <span className='text-lable-2'>to 48h before pick-up time</span>
          </div>
          <div className='car-details'>
            <ul>
              <li className='person-capacity'>
                <div className='icon-details'>
                  <div className='svg-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none"><circle cx="9.99997" cy="6" r="6" fill="#A2A2A3"></circle><path d="M17.2154 22C18.9233 22 20.347 20.8843 19.9252 19.5707C19.4517 18.0962 18.5507 16.738 17.2887 15.636C15.3556 13.9482 12.7338 13 10 13C7.26621 13 4.64439 13.9482 2.71131 15.636C1.44926 16.738 0.548269 18.0962 0.0748233 19.5706C-0.346982 20.8843 1.07671 22 2.78456 22L17.2154 22Z" fill="#A2A2A3"></path></svg>
                  </div>
                  <p className='icon-list-text'>5</p>
                </div>
              </li>
              <li className='person-capacity'>
                <div className='icon-details'>
                  <div className='svg-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path fill="#A2A2A3" d="M3.24 2.58v3.65H14.2L8.87 2.58H3.24zm18.09 5.8c0-.2-.1-.4-.27-.53L9.88.1a.72.72 0 00-.36-.1h-8.2a.66.66 0 00-.48.2.58.58 0 00-.17.43v16.2H15.8a6.6 6.6 0 014.9-2.14c.16 0 .32-.07.45-.2.12-.1.18-.28.18-.45V8.38zm-16.67 3.7H2.6a.65.65 0 01-.64-.65c0-.36.28-.64.64-.64h2.06c.36 0 .65.27.65.63s-.28.64-.64.64zm12.24-5a.64.64 0 01-.62.44H2.6a.65.65 0 01-.64-.65V1.93c0-.35.28-.64.64-.64h6.47c.13 0 .25.03.36.1l7.22 4.94c.23.16.33.46.25.73zM.67 18.13v3.23c0 .35.28.64.64.64H13.4c.36 0 .65-.3.65-.64 0-1.17.3-2.27.83-3.23H.66z"></path></svg>
                  </div>
                  <p className='icon-list-text'>5</p>
                </div>
              </li>
              <li className='person-capacity'>
                <div className='icon-details'>
                  <div className='svg-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none"><path fill="#A2A2A3" d="M20.17 3.58h-4.6v-.9c0-1.02-.8-1.85-1.82-1.85h-5.5c-1 0-1.83.83-1.83 1.84v.9h-4.6C.82 3.57 0 4.4 0 5.42v2.75C0 9.17.82 10 1.83 10h7.34v-.46c0-.25.2-.46.46-.46h2.74c.26 0 .46.2.46.46V10h7.34c1 0 1.83-.82 1.83-1.83V5.42c0-1-.82-1.84-1.83-1.84zm-6.42 0h-5.5v-.9h5.5v.9zm8 6.92c-.16-.08-.35-.07-.48.04-.33.25-.7.38-1.1.38h-7.34v1.37c0 .23-.2.44-.46.44H9.63c-.26 0-.46-.2-.46-.46V10.9H1.83c-.4 0-.77-.13-1.1-.38-.13-.1-.32-.12-.48-.05-.15.07-.25.23-.25.4v6.43c0 1 .82 1.84 1.83 1.84h18.34c1 0 1.83-.83 1.83-1.84v-6.4c0-.17-.1-.33-.25-.4z"></path></svg>
                  </div>
                  <p className='icon-list-text'>1</p>
                </div>
              </li>
              <li className='person-capacity'>
                <div className='icon-details'>
                  <div className='svg-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" fill="none"><path fill="#A2A2A3" d="M1.95 5.03l.48.5 1.3-1.2-.47-.5-1.3 1.2zm9.08 7.33H9v1.93h2.03v-1.95zM3.28 2.7l-.9-.87L0 4.03l.9.85 2.38-2.2zm9.92 7.62H6.83v6h6.35v-6zm-1.33 4.37c0 .1-.04.2-.12.26-.08.07-.2.1-.3.1H8.58c-.1 0-.22-.03-.3-.1-.08-.08-.12-.18-.12-.28v-2.74c0-.1.04-.2.12-.28.08-.07.2-.1.3-.1h2.87c.1 0 .22.03.3.1.08.08.12.18.12.28v2.73zM1.03 8.34v11.2c0 .65.27 1.27.76 1.73.47.46 1.13.72 1.8.72h12.8c.7 0 1.35-.26 1.83-.72.5-.46.76-1.08.76-1.73V1.03c0-.14-.04-.27-.1-.4-.03-.1-.1-.23-.2-.33s-.23-.17-.36-.22C18.2.03 18.06 0 17.92 0h-7.8c-.6 0-1.06.46-1.06 1.03v1.85c0 .1-.06.2-.14.3-.1.06-.2.1-.3.1H6.5c-.3 0-.56.1-.77.3L1.35 7.6c-.1.1-.18.22-.23.35-.06.12-.1.26-.1.4zm9.4-6.33c0-.3.13-.57.35-.78.23-.2.53-.33.84-.33h4.8c.05 0 .1.03.16.05.05.02.1.04.13.08.06.04.1.08.1.13.04.05.05.1.05.15 0 .7-.3 1.37-.82 1.86-.5.5-1.22.76-1.95.76h-3.2c-.24 0-.44-.15-.44-.37v-1.5zM3.8 7.96c-.05-.04-.1-.08-.1-.13-.03-.05-.04-.1-.04-.15 0-.05 0-.1.03-.15 0-.05.04-.1.1-.13.02-.04.06-.07.1-.1.07 0 .1-.02.18-.02.04 0 .1.02.15.04.05.02.1.05.13.08L6.6 9.53h6.83l2.25-2.13c.04-.03.08-.06.13-.08.08-.02.13-.03.18-.03.06 0 .1 0 .17 0 .05.03.1.06.13.1.04.03.07.07.1.12 0 .05.02.1.02.15 0 .06-.02.1-.04.15-.02.05-.05.1-.1.13l-2.23 2.13v6.46l2.24 2.1c.04.03.07.08.1.12 0 .05.03.1.03.16 0 .05 0 .1-.03.15-.02.04-.06.08-.1.12-.03.03-.08.06-.13.1-.05 0-.1 0-.16 0s-.1 0-.16-.02c-.05 0-.1-.04-.14-.08l-2.24-2.1H6.6l-2.22 2.1c-.08.07-.2.12-.3.12-.1 0-.2-.05-.3-.12-.07-.08-.12-.18-.12-.28 0-.1.05-.2.13-.28l2.2-2.1V10.1L3.8 7.95z"></path></svg>
                  </div>
                  <p className='icon-list-text'>6.5L/100 km</p>
                </div>
              </li>
            </ul>
          </div>
          <div className='car-rent'>
            <div className='car-rent-price'>
              <p className='price'>$20.00</p>
              <p className='price-day'>/ day</p>
            </div>
            <button className='car-rent-booking'>Rent Now</button>
          </div>
        </div>
      </div>
    );
  })
}

export default Card;