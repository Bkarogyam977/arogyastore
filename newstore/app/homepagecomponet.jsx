"use client";
import { Layout } from "antd";
import React, { useState } from "react";

import { Blogs } from "./homepage/ArogyaAppCompnents/blogs";
import Accordian from "./accordions/page";
import UpcommitEvents from "./homepage/events";
import OurStory from "./homepage/ourstory";
import { useAppContext } from "./providers";
import DomainAdvisorComponent from "./homepage/domainuserdata";
import HopesScroller from "./homepage/ArogyaAppCompnents/Hopes";
import OfferCardScroller from "./homepage/ArogyaAppCompnents/OfferCards";
import BrandsSection from "./homepage/ArogyaAppCompnents/brands";
import SearchSolutions from "./homepage/ArogyaAppCompnents/searchSolution";
import BottomNavBar from "./homepage/ArogyaAppCompnents/BottomNavBar";
import ProductCategoryScroller from "./homepage/ArogyaAppCompnents/ProductCategoryScroller";
import HeroSection from "./homepage/ArogyaAppCompnents/HeroSection";
import EPT_Section from "./homepage/ArogyaAppCompnents/EPT_Section";
import JoinNetwork from "./homepage/ArogyaAppCompnents/JoinNetwork";
import useUserStore from "./doctor/justand";
import Ad_BottomNavBar from "./Advisor/AdvisorComponents/BottomNavBar";
import TopSellingProducts from "./e-store/BestSellingProducts";
import Commonlist from "./e-store/commonlist";
import Newfile from "./e-store/newfile";
import ProcessSection from "./homepage/ArogyaAppCompnents/ProcessSection";
import WhyChose from "./homepage/whychose";
import PopUpScreen from "./homepage/pupupscreen";
import EventDisplay from "./homepage/ArogyaAppCompnents/WebinarEvent";
import Slider from "./homepage/ArogyaAppCompnents/Slider";
import DiwaliAnimation from "./homepage/ArogyaAppCompnents/DiwaliAnimation";
import DhanTeras from "./homepage/ArogyaAppCompnents/DhanTeras";

import AIDoctorAssistant from "./homepage/AssistantsAI";

function MainPage({
  practice: initialPractice,
  categoryproduct: initialCategoryProduct,
  latestproduct: initialLatestProduct,
}) {
  const [practice, setPractice] = useState(initialPractice);
  const [categoryproduct, setCategoryproduct] = useState(
    initialCategoryProduct
  );
  const [latestproduct, setLatestproduct] = useState(initialLatestProduct);
  const [isHydrated, setIsHydrated] = useState(false);
  const { state } = useAppContext();
  const [isLoading, setIsloading] = useState(false);
  const userdata = useUserStore((state) => state.currentPatient);

  return (
    <Layout className="overflow-hidden">
      {state.domaindata !== null && state.domaindata !== undefined && (
        <DomainAdvisorComponent advisor={state.domaindata} />
      )}

      {/* <HeroSection /> */}
      {/* <DiwaliAnimation />
      <DhanTeras /> */}
      <Slider />
      <Newfile />
      <Commonlist
        title="🔥 Herbal Tea Products"
        practice={{ id: 5 }}
        subcategories={[{ id: 237 }]}
      />

      {/* <EPT_Section /> */}
      {/* <WhyChose /> */}

      {/* <EventDisplay /> */}

      <ProductCategoryScroller
        categoryproduct={categoryproduct}
        practice={practice}
      />

      {/* <UpcommitEvents /> */}

      {/* <ProcessSection /> */}

      {/* <HopesScroller /> */}

      {/* <SearchSolutions /> */}
      <Commonlist
        title="🔥 Hair Care Products"
        practice={{ id: 5 }}
        subcategories={[{ id: 225 }]}
      />
      <BrandsSection />
      <OurStory />
      <Commonlist
        title="🔥 Immunity Booster Products"
        practice={{ id: 5 }}
        subcategories={[{ id: 340 }]}
      />
      <Blogs />

      <OfferCardScroller />
      <Accordian />

      {/* <TopSellingProducts
        categoryproduct={categoryproduct}
        practice={practice}
        latestproduct={latestproduct}
      /> */}
      {/* <Commonlist title="Skin Care Products" categoryId={297} limit={1} /> */}

      <PopUpScreen />

      <AIDoctorAssistant />

      {userdata?.user.is_active && <JoinNetwork />}

      {!userdata?.user.is_active && <BottomNavBar />}

      {userdata?.user.is_active && <Ad_BottomNavBar />}
    </Layout>
  );
}

export default MainPage;
