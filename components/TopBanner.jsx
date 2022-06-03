import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Topbanner = ({ topBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{topBanner.smallText}</p>
        <h3>{topBanner.midText}</h3>
        <h1>{topBanner.largeText1}</h1>
        <img src={urlFor(topBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${topBanner.product}`}>
            <button type="button">{topBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{topBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbanner