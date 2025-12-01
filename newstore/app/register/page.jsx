'use client'
import React, { useEffect, useState } from 'react'
import Register from '../doctor/Register'
import DoctorsComponent from '@/components/registercomponent/DoctorComponent';
import AccordianComponent from '@/components/registercomponent/AccordianComponent';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Modal } from 'antd';
import Image from 'next/image';




const page = () => {
  return (
    <div>
      <RegisterPage />
      <div className='md:w-[50vw] mx-auto'>

      </div>
    </div>
  )
}

export default page;


const RegisterPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const loadRoleData = () => {

    that.setState({
      loading: true,
    });
    const successFn = function (data) {
      console.log(data);

      that.setState({
        loading: true,
        roledata: data
      });


    };
    const errorFn = function (data) {
      that.setState({
        loading: false,
      });
    };

    getAPI('role_commission/agent_roles/', successFn, errorFn);
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };


  const iconurldata = [
    {
      iconUrl: "/images/capsule.png",
      quantity: "1223",
      topic: "Medicine"

    }, {
      iconUrl: "/images/assets (1)/medical-doctor--v4.png",
      quantity: "11723",
      topic: "Partener Doctor"

    }, {
      iconUrl: "/images/icons8-shopping-cart.gif",
      quantity: "30030",
      topic: "Patient Order"

    }, {
      iconUrl: "/images/external-hospital.png",
      quantity: "400",
      topic: "Online Clinics"

    }]

  const AccordianData = [
    {
      "header": " Does a Doctor get patients leads also",
      "data": "Yes, as a Nirog Partner Plus member Doctors do get patient's leads from Arogya Bharat side"
    },
    {
      "header": " How does the payout work ",
      "data": "Arogya Bharat makes a payout against delivered orders every week to the Partner Doctors"
    },
    {
      "header": " Does Arogya Bharat charge consultation from Patients? ",
      "data": "Doctors are independent to charge any consultation from Patients"
    },
    {
      "header": " How long does it take for medicines to be delivered ",
      "data": "It takes 5-7 working days for medicines to be delivered"
    },

  ]



  return (
    <section className=' relative  md:mt-28' style={{ overflowX: "clip" }}>
      <section className='flex flex-col w-full'>

        <div className="  w-full    mx-auto  backdrop-contrast-200   bg-[#d8e0e4]">
          <div className='relative box-border h-[42vh] md:h-[70vh] mx-auto'>


            <div className=" relative  mx-auto   ">


              <Image
                className="absolute inset-0 mx-auto hue-rotate-15 z-0"
                src="/images/Abhyanga.jpg"
                alt=""
                width={500}
                height={300}
              />
            </div>

            <div className="absolute inset-0 bg-blue-300 opacity-50 z-10 "></div>

            <div className='absolute h-full inset-y-auto z-20 '>
              <div className='flex flex-col h-[50vh] md:h-full  justify-center px-3 ml-2 pl-4'>

                <div className='text-2xl md:text-5xl md:w-1/2 font-bold'>
                  Became a Arogya Bharat Foundation Partner Today
                </div>
                <div className=' md:text-2xl md:w-1/2'>
                  Access our world class solutions specifically designed for Ayurveda Doctors
                </div>

              </div>

            </div>
            <section className=' hidden md:block absolute top-6 right-8   w-1/3 bg-white rounded-lg shadow-lg p-4 z-30'>

              <Register />

            </section>


          </div>


        </div>
      </section >

      <section className='flex w-full justify-center'>

        <div className="container flex flex-row gap-4">

          {iconurldata.map((e, i) =>

            <IconCountComponent key={i} iconUrl={e.iconUrl} quantity={e.quantity} topic={e.topic} />

          )}


        </div>

      </section>


      <ExclusiveOffer />


      <section className=' container md:w-[80vw] h mx-auto'>
        <div>
          <SimpleSlider />

        </div>
      </section>

      <section>

      </section>
      <section className='my-4 md:mt-3 p-2'>
        <div className='text-center w-full mx-auto font-bold md:text-2xl p-2'>
          Frequently Asked Question(FAQs):
        </div>
        <AccordianComponent data={AccordianData} />

      </section>


      <div className='md:hidden fixed z-50 bottom-3 right-5 left-5'>

        <div className=' p-2 bg-blue-400 text-center font-bold text-gray-100  shadow-lg rounded-xl' onClick={() => showModal()}>
          Become A Partner
        </div>

      </div>
      <Modal title="Doctor Registration " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Register />
      </Modal>
    </section>

  );
}

export { RegisterPage };







export function IconCountComponent(props) {
  return (
    <div className='flex flex-col justify-center items-center p-2  '>

      <div className='p-2'>
        <Image
          src={props.iconUrl}
          alt="capsule"
          width={100}
          height={100}
        />
      </div>
      <div className='font-bold text-xl'>


        {props.quantity}



      </div>
      <div className='font-bold text-gray-500 text-center text-base'>
        {props.topic}

      </div>


    </div>
  )
}



const ExclusiveOffer = () => {

  const topartner = [
    { "iconUrl": "/images/check-male.png", "topic": "Register your Account ", "step": "Step 1", "hidden": false },
    { "iconUrl": "/images/external-Working.png", "topic": "Verify Your Account ", "step": "Step 2", "hidden": false },
    { "iconUrl": "/images/handshake--v2.png", "topic": "Become a Partner & Start Ordering ", "step": "Step 3", "hidden": false },
    { "iconUrl": "/images/upload-to-cloud.png", "topic": "Upload Your Bank Details", "step": "Step 4", "hidden": false },
    { "iconUrl": "/images/money-bag-euro.png", "topic": "Recieve Your Earning", "step": "Step 5", "hidden": true }
  ];



  const SvgLineWithSmallScreenData = [

    {
      "imgUrl": "/images/external-money-finance-kiranshastry-lineal-color-kiranshastry.png",
      "data": "Earn more money every day from different sources of income"
    },
    {
      "imgUrl": "/images/group-foreground-selected.png",
      "data": "Get relevant patient leads based on your expertise"
    },
    {
      "imgUrl": "/images/trust.png",
      "data": " Increase patient satisfaction by delivering medicine to their doorstep for free"
    },
    {
      "imgUrl": "/images/fingerprint.png",
      "data": " Easily access patient records to save time and reduce administrative work"
    },

    {
      "imgUrl": "/images/meditation-guru.png",
      "data": " Say goodbye to the challenges of storing and dealing with expired stock"
    },
    {
      "imgUrl": "/images/external-webinar-new-normal-flaticons-flat-flat-icons.png",
      "data": " Increase your online presence, attract more patients, and improve your professional reputation"
    }

  ]



  return (
    <section className='mx-auto'>

      <div className='flex text-3xl justify-center font-bold text-center mt-12 p-12'>
    Arogya Partner is an exclusive program that offers
  </div>
      <div className='flex flex-col justify-center items-center p-3'>


        <div className='grid grid-cols1 md:grid-cols-4 gap-8 px-3'>



          <RoundedOffers iconUrl={'/images/truck.png'} info={'free delivery of medicine to your patient across 2000+ cities'} />
          <RoundedOffers iconUrl={'/images/crypto-trading-margin.png'} info={'Get more margin on medicines that you sell to your patient through us'} delay={'delay-200'} />
          <RoundedOffers iconUrl={'/images/pill.png'} info={'Access to 900+ medicines without spending a rupee to maintaining stock at your clinic'} delay={'delay-700'} />
          <RoundedOffers iconUrl={'/images/physical-therapy.png'} info={'Get Patients everyday from online appointment booked on the website'} delay={'delay-1000'} />



        </div>

        <div className='grid grid-cols1 md:grid-cols-4 gap-8 my-5'>



          <RoundedOffers iconUrl={'/images/external-efficiency-productivity-flaticons-lineal-color-flat-icons-2.png'} info={'Efficient Patient Management Software from appointment to managing medical historiacal and placing orders'} />
          <RoundedOffers iconUrl={'/images/domain.png'} info={'Doveloping a Wide digital Success - get free content,creative Videos to shares on your social media pages.'} delay={'delay-200'} />
          <RoundedOffers iconUrl={'/images/user-male-circle.png'} info={'Get your digital webpage at zero cost'} delay={'delay-700'} />
          <RoundedOffers iconUrl={'/images/physical-therapy.png'} info={'Dedicated Account manager- Personalizes guidence to assist you  every step of way'} delay={'delay-1000'} />



        </div>



        <div className='my-5 items-center'>

          <div className='mx-auto p-2 bg-blue-400 shadow-md rounded-lg px-4 font-bold text-xl'>

            Become A Partner !

          </div>

        </div>



      </div>



      {/* advantage of Arogyam Talk */}
      <section>
        <div className='flex mx-auto'>
          <div className=' text-2xl px-2 text-center flex mx-auto font-bold'>
            Become a Arogya Partner has many advantage for Vaidayas
          </div>

        </div>



        <div className='relative flex flex-row m-5 my-10 mx-auto w-full' >
          <div className='mx-auto hidden md:block w-[85vw]'>

            <div className="grid grid-cols-5  ">

              <div className=''>

                <svg height={'250px'} >
                  <line x1="0" y1="0" x2="90%" y2="90%" style={{ stroke: '#d1d1db', strokeWidth: 2, }} />
                </svg>
              </div>
              <div>
                <svg height={'250px'} >
                  {/* Mirror the line horizontally */}
                  <line x1="0" y1="90%" x2="90%" y2="0" style={{ stroke: '#d1d1db', strokeWidth: 2, }} />
                </svg>
              </div>
              <div>
                <svg height={'250px'}>
                  <line x1="0" y1="0" x2="90%" y2="90%" style={{ stroke: '#d1d1db', strokeWidth: 2, }} />
                </svg>
              </div>
              <div>
                <svg height={'250px'} >
                  {/* Mirror the line horizontally */}
                  <line x1="0" y1="90%" x2="90%" y2="0" style={{ stroke: '#d1d1db', strokeWidth: 2, }} />
                </svg>
              </div>
              <div>
                <svg height={'250px'} width={'250px'}>
                  <line x1="0" y1="0" x2="90%" y2="90%" style={{ stroke: '#d1d1db', strokeWidth: 2, }} />
                </svg>
              </div>


            </div>
          </div>

          <div className='hidden md:grid grid-cols-1 md:grid-cols-6 inset-0 -top-6  absolute '>

            <div className='flex relative mx-auto'>

              <div className='flex  '>

                < SvgLineWithGola imgUrl={SvgLineWithSmallScreenData[0].imgUrl} arrowposition={'-bottom-5'} arrowrotate={'rotate-90'} >
                  {SvgLineWithSmallScreenData[0].data}
                </SvgLineWithGola>

              </div>

            </div>

            <div className='flex relative mx-auto'>

              <div className='flex  '>

                < SvgLineWithGola imgUrl={SvgLineWithSmallScreenData[1].imgUrl} reverse={'flex-col-reverse'} arrowposition={'-top-5'} arrowrotate={'-rotate-90'}>
                  {SvgLineWithSmallScreenData[1].data}
                </SvgLineWithGola>

              </div>

            </div>

            <div className='flex relative mx-auto'>

              <div className='flex  '>

                < SvgLineWithGola imgUrl={SvgLineWithSmallScreenData[2].imgUrl} arrowposition={'-bottom-5'} arrowrotate={'rotate-90'} >
                  {SvgLineWithSmallScreenData[2].data}
                </SvgLineWithGola>

              </div>

            </div>

            <div className='flex relative mx-auto'>

              <div className='flex  '>

                < SvgLineWithGola imgUrl={SvgLineWithSmallScreenData[3].imgUrl} reverse={'flex-col-reverse'} arrowposition={'-top-5'} arrowrotate={'-rotate-90'}>
                  {SvgLineWithSmallScreenData[3].data}
                </SvgLineWithGola>

              </div>

            </div>

            <div className='flex relative mx-auto'>

              <div className='flex  '>

                < SvgLineWithGola imgUrl={SvgLineWithSmallScreenData[4].imgUrl} arrowposition={'-bottom-5'} arrowrotate={'rotate-90'} >
                  {SvgLineWithSmallScreenData[4].data}
                </SvgLineWithGola>

              </div>

            </div>

            <div className='flex relative mx-auto'>

              <div className='flex  '>

                < SvgLineWithGola imgUrl={SvgLineWithSmallScreenData[5].imgUrl} reverse={'flex-col-reverse'} arrowposition={'-top-5'} arrowrotate={'-rotate-90'}>
                  {SvgLineWithSmallScreenData[5].data}
                </SvgLineWithGola>

              </div>

            </div>


          </div >


          {/* for small screen handle the item */}


          <div className="flex  md:hidden flex-col ">
            <div>

              {SvgLineWithSmallScreenData.map((e, index) =>

                < SvgLineWithSmallScreen key={index}
                  imgUrl={e.imgUrl}

                >
                  {e.data}

                </SvgLineWithSmallScreen>
              )}


            </div>
          </div>

        </div>
      </section>


      <section className='mx-auto'>

        <div className='flex mx-auto w-full text-center text-2xl font-bold '>
          <div className='flex mx-auto'>
            How to Become Arogya Partner

          </div>


        </div>

        <HowtoPartner topartner={topartner} />

      </section>

      <section className='flex flex-col justify-center items-center gap-4'>

        <div className='flex  mx-auto text-2xl m-3 py-4 h-[12vh] font-bold '>
          What Our Partners Say

        </div>

      </section>



    </section>



  )

}


function RoundedOffers(props) {
  return (
    <div className='p-2'>
      <div className='relative flex flex-col justify-center items-center p-2 w-[20em] h-[20em] border border-blue-400  rounded-full shadow-md'>
        <div className='flex flex-col text-xl font-bold p-2'>

          <div className='flex justify-center p-1'>
            <Image
              src={props.iconUrl}
              alt="capsule"
              width={70}
              height={70}
            />
          </div>
          <div className='text-center'>
            {props.info}
          </div>



        </div>

        <div className={`absolute  inset-0 animate-spin ${props.delay}`}>
          <svg className="-top-5 absolute left-1/2 -translate-x-1/2" width="231" height="63" viewBox="0 0 231 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M230.823 54.8103C216.667 38.1582 199.11 24.7289 179.333 15.4251C159.556 6.12136 138.017 1.15856 116.163 0.870258C94.3087 0.581955 72.646 4.97483 52.6305 13.7537C32.6151 22.5325 14.7105 35.4939 0.120167 51.7669L9.32667 60.0214C22.739 45.0624 39.1978 33.1475 57.5972 25.0775C75.9966 17.0075 95.9102 12.9693 116 13.2344C136.089 13.4994 155.89 18.0615 174.07 26.614C192.25 35.1666 208.389 47.5115 221.402 62.8192L230.823 54.8103Z" fill="url(#paint0_linear_202_1584)"></path><defs><linearGradient id="paint0_linear_202_1584" x1="114.143" y1="0.85693" x2="225.171" y2="35.6969" gradientUnits="userSpaceOnUse"><stop stopColor="#4BC2E0"></stop><stop offset="1" stopColor="#9C6EC4"></stop></linearGradient></defs></svg>
        </div>

      </div>
    </div>
  )
}






export function SvgLineWithGola(props) {
  return (
    <>
      <div className={`flex flex-col justify-center items-center ${props.reverse} `}>

        <div className={`${props.reverse} relative flex flex-col bg-white h-[10em] w-[10em] rounded-full justify-center items-center p-2 shadow-lg ${props.rotate} `} >

          <div className={`absolute  flex p-2 mx-auto rounded-full bg-blue-300  h-[9em] w-[9em] items-center justify-center z-10 ${props.rotateicon} `}>
            <Image
              src={props.imgUrl}
              alt=""
              width={65}
              height={65}
            />
          </div>

          <div className={`absolute  ${props.arrowposition}  z-0 ${props.arrowrotate}  animate-pulse `}>

            <Image
              src="/images/forward--v1.png"
              alt=""
              width={20}
              height={20}
            />


          </div>




        </div>

        <div className='p-2 my-4 font-bold text-center'>
          {props.children}
        </div>

      </div>
    </>
  )
}



export function SvgLineWithSmallScreen(props) {
  return (
    <>
      <div className={`flex p-2 shadow-xl rounded-lg m-2  ${props.reverse} `}>

        <div className={`${props.reverse} relative flex flex-col bg-white h-[10em] w-[10em] rounded-full justify-center items-center p-2 shadow-lg ${props.rotate} `} >

          <div className={` flex p-2 mx-auto rounded-full bg-blue-300  h-[9em] w-[9em] items-center justify-center z-10 ${props.rotateicon} `}>
            <Image
              src={props.imgUrl}
              alt=""
              width={65}
              height={65}
            />
          </div>

        </div>

        <div className='p-2 my-4 text-center'>
          {props.children}
        </div>

      </div>
    </>
  )
}







export function HowtoPartner(props) {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);





  return (
    <div className="grid grid-cols-1 md:grid-cols-5 justify-items-start relative">
      <div className='absolute inset-x-0 inset-y-[5.1rem] z-0 container mx-auto px-16 divide-dashed'>
        <hr className=' hidden md:block border border-black' style={{ border: '2px dashed black' }} />
      </div>

      {
        props.topartner.map((e, i) => (

          <div key={i} className="flex flex-col items-center justify-center mx-auto p-2 py-3 z-10">
            <div className=" relative w-[10em] h-[10em] rounded-full flex justify-center items-center shadow-2xl p-2">
              <div className='w-[9em] h-[9em] bg-blue-900 rounded-full flex justify-center items-center shadow-md p-2'>
                <Image
                  src={e.iconUrl}
                  alt=""
                  width={80}
                  height={80}
                />
              </div>

              <div className={`absolute -right-24 ${width > 768 ? e.hidden ? 'hidden' : '' : 'hidden'} `}>
                <Image
                  className="rotate-90"
                  src="/images/gps-device.png"
                  alt=""
                  width={500}
                  height={500}
                />

              </div>
            </div>
            <div className='my-2 text-center '>
              {e.step}
            </div>
            <div className="font-bold text-xl h-[4rem] text-center w-[10em]">
              {e.topic}
            </div>
          </div>

        ))
      }

    </div>
  )
}




export function SliderPartenerSay({ url, name, about, profile }) {
  return (


    <div className='flex flex-col rounded-lg py-3 my-[4em] bg-blue-200 shadow-xl mx-auto relative pt-20 px-4 gap-3'>

      <div className='absolute flex mx-auto left-0 right-0 -top-[4em]'>
        <div className='  mx-auto flex justify-center  items-center p-3 shadow-xl rounded-full'>
          <Image
            className="rounded-full h-[6em] w-[6em] overflow-clip p-2"
            src={url}
            alt=""
            width={90}
            height={90}
          />
        </div>

      </div>


      <div className='flex text-center '>
        {about}
      </div>

      <div className="text-xl font-bold text-center">
        {name}
      </div>
      <div className='text-center'>
        {profile}
      </div>

    </div>

  )
}


const SimpleSlider = () => {

  const doctReveiwSay = [
    {
      name: `Dr Minakshi`,
      url: `/images/images55.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Ram Gopal`,
      url: `/images/doctortej.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorveda &apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },

    {
      name: `Tarak Ram`,
      url: `/images/photo-1612349317150-e413f6a5b16d.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Nilam Bano`,
      url: `/images/medical-concept-indian-beautiful-female-600nw-1635029716.jpg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Vinod Singh`,
      url: `/images/doctortendu.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `John Morgan`,
      url: `/images/doctorrahul.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Ellie Anderson`,
      url: `/images/doctorpatel.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Dr. Suresh Kumar`,
      url: `/images/doctorarvind.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Dr Sivani`,
      url: `/images/doctyorswqe.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Dr Salini`,
      url: `/images/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
  ]

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        return 4;
      } else {
        return 1;
      }
    };

    setSlidesPerView(calculateSlidesPerView);

    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 
  return (
    <div className='mx-2'  >

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay
        spaceBetween={50}
        slidesPerView={slidesPerView} >
        {doctReveiwSay.map((e, i) => (
          <SwiperSlide key={i}>
            < SliderPartenerSay url={e.url} about={e.about} name={e.name} profile={e.profile} />
          </SwiperSlide>

        ))}

      </Swiper>
    </div>
  );

}

export { SimpleSlider };

