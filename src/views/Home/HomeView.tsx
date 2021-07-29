import React from 'react';
import Category from './components/Category/Category';
import HeaderOfert from './components/HeaderOfert/HeaderOfert';
import ItemOfert from './components/ItemOfert/ItemOfert';
import { listCategory, listItemOfert } from './Home';
import './Home.css';

const HomeView: React.FC = () => (
  <div>
    <div className="class-home-row">
      {listCategory.map(( item: any, i: number ) => (
        <div key={i.toString()}>
          <Category image={item.image} title={item.title} />
        </div>
      ))}
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <HeaderOfert
            title="DIPICSA S.A."
            subtitle="12 Ofertas"
            titlelink="Ir al perfil"
          />
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
      <div className="row">
        <div className="col">
          <HeaderOfert
            title="Chevrolet"
            subtitle="5 Ofertas"
            titlelink="Ir al perfil"
          />
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
      <div className="row">
        <div className="col">
          Column
        </div>
      </div>
    </div>
  </div>
);

export default HomeView;
