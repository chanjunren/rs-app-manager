import React from 'react';
import { applicationsData } from './application_data';
import './rs_applications.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Grid from '@material-ui/core/Grid';

import SwiperCore, { Pagination, EffectCoverflow } from 'swiper/core';

SwiperCore.use([Pagination, EffectCoverflow]);

const AppsSection = () => {
  const applications = applicationsData.map((app, idx) => {
    return (
      <SwiperSlide tag="li" key={`slider-slide-${idx}`}>
        <div className="app-card">
          <img
            className="app-icon"
            src={app.imageSrc}
            alt={`${app.title}-imageSrc`}
          />
          <h2 className="app-h2">{app.title}</h2>
          <p className="app-p">{app.description}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Grid container>
      <Grid item>

      </Grid>
      <Grid item>
        
      </Grid>
    </Grid>
    <div className="apps-container" id="apps">
      <h1 id="apps-h1">Custom Applications</h1>
      <div id="apps-wrapper">
        <Swiper
          id="swiper-list"
          tag="section"
          wrapperTag="ul"
          centeredSlides={true}
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          pagination
        >
          {applications}
        </Swiper>
      </div>
    </div>
  );
};

export default AppsSection;
