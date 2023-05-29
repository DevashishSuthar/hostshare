'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import CategoryBox from '@/app/components/CategoryBox';
import categories from '@/app/static/categories.json';

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Swiper
      slidesPerView={15}
      spaceBetween={10}
      slidesPerGroup={14}
      cssMode={true}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {categories.map((item, index) => (
        <SwiperSlide key={index}>
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;
