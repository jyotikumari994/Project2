import React from 'react';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const images = {
  big: 'https://mobilecontent.costco.com/live/resource/img/24w10109/d_24w10109_banner_lg_03.jpg',
  small: 'https://mobilecontent.costco.com/staging/resource/img/24w08171/d_24w08171_may_mvm_cover_hero_v3.jpg',
  slides: [
    'https://mobilecontent.costco.com/live/resource/img/20240527_Cruise_Campaign_Imgs/20240527_Cruise_Campaign_US_ComHero_D.jpg',
    'https://mobilecontent.costco.com/live/resource/img/24w10077/d_24w10077_hero_june_connection.jpg',
    'https://mobilecontent.costco.com/live/resource/img/24w09105/d_24w09105_hero_gaming_v2.jpg',
    'https://mobilecontent.costco.com/live/resource/img/24w10101/d_24w10101_cat_hero_sonos.jpg',
    'https://mobilecontent.costco.com/live/resource/img/24w10111/d_24w10111_fathers_day_apparel_bms.jpg',
  ],
  grid: [
    'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1695478-847__1&recipeName=350',
    'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=4000203417-847&recipeName=350',
    // Add more paths up to 20 images
  ],
};

const HomePage = () => {
  return (
    <Box>
      <Box mb={4}>
        <Image src={images.big} alt="Big Picture" />
      </Box>

      <Box mb={4}>
        <Image src={images.small} alt="Small Picture" />
      </Box>

      <Box mb={4}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
        >
          {images.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image src={slide} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <SimpleGrid columns={4} spacing={4}>
        {images.grid.map((gridImage, index) => (
          <Image key={index} src={gridImage} alt={`Grid Image ${index + 1}`} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
