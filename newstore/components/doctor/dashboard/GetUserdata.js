// 'use client'
// import useUserStore from "@/app/doctor/justand";
// import { displayMessage, getAPI } from "@/dataarrange/utils/common";


// export const getuserData = ()=>{
//     // setLoading(true)
//     const {currentPatient,setCurrentPatientFn} = useUserStore();
    
//     getAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), (data) => {
//       // setLoading(false);
//       displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated User");
//       setCurrentPatientFn(data)
//       // history.push("/doctor");
//     }, () => {
//       // setLoading(false);
//     });
//   }