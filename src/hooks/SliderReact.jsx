// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App({IMG}) {
 
   return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-3xl mx-8 "
        
      >
       {IMG.map(function(i, index) {
          return <SwiperSlide key={index}><img className="m-auto h-[250px] md:h-[550px]  object-cover w-full" src={i.src}/></SwiperSlide>;
        })}      
      </Swiper>
    </>
  );
}