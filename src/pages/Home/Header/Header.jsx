import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

const Header = () => {
    return (
        <div>
            <div className="bg-[url('https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] px-32 py-12 mb-12">
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-bebasNeue mb-5 text-6xl font-black text-white">LUXURY ESTATE</h1>
                        <p className="font-poppins text-white font-medium mb-6">Welcome to our Luxury Real Estate, your gateway to luxury living. Discover <br /> exclusive properties that redefine opulence and sophistication. Explore our curated <br /> selection of estates, villas, and penthouses in the world most prestigious <br /> destinations. Find your dream home with us today.</p>
                        <a className="btn bg-[#FBB804] text-black font-semibold px-7 text-center border-none">Booking <i className="text-lg"><FaArrowRightLong /></i></a>
                    </div>

                    <div className="w-[270px]">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}


        </div>
    );
};

export default Header;