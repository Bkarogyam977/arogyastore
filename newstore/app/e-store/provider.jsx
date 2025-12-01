'use client'
import { getAPI } from '@/dataarrange/utils/common';
import React, { createContext, useContext, useState, useEffect } from 'react';
import useUserStore from '../doctor/justand';

const CustContext = createContext();

export const CustProvider = ({ children }) => {
    const userdata = useUserStore((state)=> state.currentPatient)
    const {setCustomer} = useUserStore();
 
  const [customerdata, setCustomerdata] = useState()
  const [isLoading , setIsloading] = useState(false);
  const [onlineclinic, setOnlineclinic] = useState(null)
  
  const [isError , setIsError] = useState(false)

  useEffect(() => {
    if(userdata){

        checkUserInCart()
        getOnlinePractie()
    }
  }, [userdata]);

  const checkUserInCart = () => {
    setIsloading(true)
    const successfn = (data) => {
          setCustomer(data)
          setCustomerdata(data)
          setIsloading(false)
    }
    const errorfn = (data) =>{
      console.log(data)
      setIsloading(false)
      setIsError(true)


    }
    getAPI(`inv_customer/userTocust/?user_id=${userdata.user.id}`, successfn, errorfn)
  }


  const getOnlinePractie = () => {
    setIsloading(true)
    const successfn = (data) => {
        setOnlineclinic(data[0])
        setIsloading(false)
    }
    const errorfn = () => {
      setIsloading(false)
    }
    getAPI('clinics?is_online=true', successfn, errorfn)
  }



  return (
    <CustContext.Provider value={{ userdata, customerdata, isLoading, isError , onlineclinic}}>
      {children}
    </CustContext.Provider>
  );
};

export const useCustContext = () => {
  return useContext(CustContext);
};
