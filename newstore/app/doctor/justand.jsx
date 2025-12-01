
'use client';

import { create } from 'zustand';

// import { ROLE } from '@/dataarrange/constants/dataKeys';
import {persist} from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set,get) => ({
      role: null,
      token : null,
      currentPatient:  null,
      active_practiceId:  null,
      medicalHistory: [],
      listModalVisible: false,
      customer : null,
      subdomain : null,
  
    setCurrentPatient : (newData) => set((state)=>({
      ...state, currentPatient : newData
    }) ),
    setActive_practiceId: (newData) => set((state)=>({
      ...state, active_practiceId : newData,
    }) ),

    setToken: (newData) => set((state)=>({
      ...state, token : newData,
    }) ),
    setRole: (newData) => set((state)=>({
      ...state, role : newData,
    }) ),
    setCustomer : (newcustomer) => set((state) => ({
      ...state, customer : newcustomer
    })),
    setSubdomain : (subdoman) => set((state) => ({
      ...state, subdomain : subdoman
    }))

  }),
  {
    name: 'authdata',
    
  }
  )

  );

export default useUserStore;




    // setUserdata: (newData) => set((state) => ({ ...state, userdata: { ...state.userdata, ...newData } })),
