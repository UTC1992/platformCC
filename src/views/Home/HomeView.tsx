import React from 'react';
import Category from './components/Category/Category';
import FavoritesLine from './components/FavoritesLine/FavoritesLine';
import HeaderOfert from './components/HeaderOfert/HeaderOfert';
import ItemOfert from './components/ItemOfert/ItemOfert';
import { listCategory, listItemOfert, listItemTestimony } from './Home';
import './Home.css';
import Testimonials from './components/Testimonials/Testimonials';
import ItemTestimony from './components/ItemTestimony/ItemTestimony';
import Slider from '../../components/Layout/Slider/Slider';

const HomeView: React.FC = () => (
  <div className="class-home-root">
    <div className="class-home-container-slider">
      <Slider />
    </div>
    <div className="class-home-row class-home-container-categories">
      {listCategory.map(( item: any, i: number ) => (
        <div key={i.toString()}>
          <Category image={item.image} title={item.title} />
        </div>
      ))}
    </div>
    <div className="class-home-container-oferts">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <div className="class-home-header-ofert">
              <HeaderOfert
                title="DIPICSA S.A."
                subtitle="12 Ofertas"
                titlelink="Ir al perfil"
              />
            </div>
            <div className="class-home-row">
              {listItemOfert.map(( item: any, i: number ) => (
                <div key={i.toString()}>
                  <ItemOfert
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                    available
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <div className="class-home-header-ofert">
              <HeaderOfert
                title="Chevrolet"
                subtitle="5 Ofertas"
                titlelink="Ir al perfil"
              />
            </div>
            <div className="class-home-row">
              {listItemOfert.map(( item: any, i: number ) => (
                <div key={i.toString()}>
                  <ItemOfert
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-10">
          <FavoritesLine />
        </div>
      </div>
    </div>
    <div className="class-home-testimonials-div">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-12">
            <Testimonials />
            <div className="class-home-row">
              {listItemTestimony.map(( item: any, i: number ) => (
                <div key={i.toString()}>
                  <ItemTestimony
                    image={item.image}
                    username={item.username}
                    comment={item.comment}
                    priceBase={item.priceBase}
                    priceSale={item.priceSale}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default HomeView;
