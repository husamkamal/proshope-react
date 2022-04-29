import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Slider from '../Slider';
import Section from '../Section';
import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

const Swiper1 = (props) => {
    
        return (
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            //   scrollbar={{ draggable: false }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={}
              style={{maxWidth:"80%",paddingBottom:"2rem"}}
            >
              {props.isSlider?props.items.map((item,index)=>{
                return <SwiperSlide><Slider key={item.id} index={index} info={props.items} /></SwiperSlide>
              }):props.items.map((item,index)=>{
                  return <SwiperSlide><Section  index={index} info={item}  /></SwiperSlide>
                  
              }) 
              }
              {/* <SwiperSlide>{props.inter}</SwiperSlide> */}
            </Swiper>
          );
}

  export default Swiper1