'use client'
import { Layout } from 'antd';
import React, { useEffect, useState } from "react";
import { Blogs } from '../homepage/ArogyaAppCompnents/blogs';
import Accordian from '../accordions/page';
import { getAPI } from "@/dataarrange/utils/common";
import { useAppContext } from '../providers';
import HopesScroller from '../homepage/ArogyaAppCompnents/Hopes';
import OfferCardScroller from '../homepage/ArogyaAppCompnents/OfferCards';
import BrandsSection from '../homepage/ArogyaAppCompnents/brands';
import SearchSolutions from '../homepage/ArogyaAppCompnents/searchSolution';
import ProductCategories from '../homepage/ArogyaAppCompnents/ProductCategories';
import Ad_BottomNavBar from './AdvisorComponents/BottomNavBar';
import NavBar from './AdvisorComponents/NavBar';
import HeroSection from '../homepage/ArogyaAppCompnents/HeroSection';
import EPT_Section from '../homepage/ArogyaAppCompnents/EPT_Section';
import ProcessSlider from '../homepage/ArogyaAppCompnents/ProcessSection';


function AdvisorPage() {
  const [practice, setPractice] = useState(null);
  const [categoryproduct, setCategoryproduct] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [setLatestproduct] = useState([])

  const [isHydrated, setIsHydrated] = useState(false);
  const { state } = useAppContext();


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const getPractive = () => {
    setIsloading(true);

    setIsloading(true)

    let successfn = (data) => {

      const filteredData = data.find((e) => e.name.toLowerCase().includes('online'));

      console.log(filteredData)

      setPractice(() => (filteredData))

      setIsloading(false)

    }
    let errorfn = (data) => {
      console.log('error')
    }

    getAPI('clinics', successfn, errorfn)

  }

  const fetchlatestProduct = () => {
    if (practice) {

      setIsloading(true)
      const succesfn = (data) => {

        setIsloading(false);
      }
      const errorfn = (data) => {
        console.log(data);
        setIsloading(false);
      }
      getAPI(`inventory_item/?practice=${practice.id}&maintain_inventory=true`, succesfn, errorfn)
    }
  }

  useEffect(() => {
    fetchProductcategory()
    getPractive();
  }, [])


  useEffect(() => {
    if (practice) {

      fetchlatestProduct()
    }
  }, [practice])


  const fetchProductcategory = () => {
    setIsloading(true)
    const successfn = (data) => {
      setCategoryproduct(data)
      setIsloading(false)
    }
    const errorfn = (data) => {
      console.log(data)
      setIsloading(false)
    }
    getAPI('inv_category', successfn, errorfn)
  }


  if (!isHydrated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">

        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>

        <p className="text-center text-gray-600">Loading, please wait...</p>
      </div>
    );
  }


  return (
    <Layout className='overflow-hidden'>

      <NavBar />

      <HeroSection />

      <EPT_Section />

      <OfferCardScroller />

      <SearchSolutions />

      <ProductCategories categoryproduct={categoryproduct} practice={practice} />

      <HopesScroller />

      <ProcessSlider />

      <BrandsSection />

      <Blogs />

      <Accordian />

        <Ad_BottomNavBar/>

    </Layout>
  )
}


export default AdvisorPage;
