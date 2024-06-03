// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App({IMG}) {
 
   return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        key="2"
        modules={[Pagination]}
        className="mySwiper "
        
      >
        
       {IMG.map(function(i, index) {
        
  return <SwiperSlide key={index}><img className="m-auto h-[300px] md:h-96 rounded-lg object-fill w-[900px]" src={i.src}/></SwiperSlide>;
  })}
        
       
      </Swiper>
    </>
  );
}