import React from 'react';

import { Product, FooterBanner, TopBanner } from '../components';

const Home = () => (
  <div>
    <TopBanner/>
    <div className="products-heading">
      <h2>Produits Les Plus Vendus</h2>
    </div>

    <div className="products-container">
      {['Product 1', 'Product 2'].map((product) => product)}
    </div>

    <FooterBanner/>
  </div>
);

export default Home;