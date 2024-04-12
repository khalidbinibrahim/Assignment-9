import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

const Header = () => {
    return (
        <div>
            <div className="bg-[url('https://saterdesign.com/cdn/shop/articles/y184DIXjxsSf2uv8uUODDQ0EslbkfRc41661192200_894x.jpg?v=1663357268')] bg-no-repeat bg-cover px-32 py-12 mb-12">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-bebasNeue mb-5 text-6xl font-medium text-white">LUXURY ESTATE</h1>
                        <p className="font-montserrat text-white font-medium mb-6">Welcome to our Luxury Real Estate, your gateway to luxury living. Discover <br /> exclusive properties that redefine opulence and sophistication. Explore our curated <br /> selection of estates, villas, and penthouses in the world most prestigious <br /> destinations. Find your dream home with us today.</p>
                        <a className="btn font-montserrat bg-[#FBB804] text-black font-bold px-7 text-center border-none">Booking <i className="text-lg"><FaArrowRightLong /></i></a>
                    </div>

                    <div className="w-[270px]">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff'
                            }}
                            speed={600}
                            parallax={true}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Parallax, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Luxurious Beachfront Villa</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Private Island Retreat</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Oceanfront Mansion</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1660673507748-6b66c15cb96d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Exclusive Penthouse</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1676517030737-5ac484676ea7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Seaside Resort</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Modern Mountain Retreat</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1561443883-b04d019d7675?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Exquisite Vineyard Estate</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Luxury Ski Chalet</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Historic Castle</p>
                                    </div>
                                </div>
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