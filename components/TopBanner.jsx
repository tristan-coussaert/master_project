import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Topbanner = ({ topBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{topBanner.smallText}</p>
        <h3>{topBanner.midText}</h3>
    
            <h5>Description</h5>
            <p>{topBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbanner