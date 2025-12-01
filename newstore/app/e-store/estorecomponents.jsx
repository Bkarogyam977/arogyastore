'use client';
import { Layout, Flex } from 'antd';
import React, { useState, useEffect } from 'react';
import { LongBsnnerAdds } from './home/advertising_banner';
import Frequently_Asked_Questions from './home/faq';
import TopSellingProducts from './topsellingproducts';
import MainCarousel from './home/main_carousel';
import useUserStore from '../doctor/justand';
import InfoCards from './home/infocards';
import Image from 'next/image';
import SubcategoryProductView from './subcategorieswiseallproducts/page';
import ProductCategoryScroller from '../homepage/ArogyaAppCompnents/ProductCategoryScroller';
import BrandsSection from '../homepage/ArogyaAppCompnents/brands';

const E_Shop = ({ practice: initialPractice, categoryproduct: initialCategoryProduct, latestproduct: initialLatestProduct }) => {
  const userdata = useUserStore((state) => state.currentPatient);
  const { setCustomer } = useUserStore();
  const [customerdata, setCustomerdata] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  const [practice, setPractice] = useState(initialPractice);
  const [categoryproduct, setCategoryproduct] = useState(initialCategoryProduct);
  const [latestproduct, setLatestproduct] = useState(initialLatestProduct);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return isLoading ? (
    <div>
      <Flex gap="small" vertical>
        <p>loading</p>
      </Flex>
    </div>
  ) : (
    <Layout className="overflow-hidden">
      <MainCarousel />

      <InfoCards />

      <div className="md:hidden w-screen overflow-hidden mt-2">
        <Image
          src="/images/upto20percentoffmedicines.gif"
          alt="Arogya Bharat Store"
          layout="responsive"
          width={1920}
          height={300}
          className="object-cover"
        />
      </div>

      <div className="px-2 md:px-10">
        <TopSellingProducts
          categoryproduct={categoryproduct}
          practice={practice}
          latestproduct={latestproduct}
        />
      </div>

      <div className="">
        <LongBsnnerAdds categoryproduct={categoryproduct} practice={practice} />
      </div>

      <ProductCategoryScroller categoryproduct={categoryproduct} practice={practice} />

      <div className="">
        <LongBsnnerAdds categoryproduct={categoryproduct} practice={practice} />
      </div>

      <BrandsSection />

      <SubcategoryProductView categoryproduct={categoryproduct} practice={practice} />
    </Layout>
  );
};

export default E_Shop;