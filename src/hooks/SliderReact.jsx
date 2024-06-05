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
        className="mySwiper rounded-3xl mx-8 " 
      >  
       {IMG.map(function(i, index) {
          return <SwiperSlide key={index}><img className="m-auto h-[250px] md:h-[550px]  object-cover w-full" src={i.src}/></SwiperSlide>;
        })}      
      </Swiper>
    </>
  );
}