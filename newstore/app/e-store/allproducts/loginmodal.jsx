import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import axios from "axios";
import { displayMessage, makeURL } from "@/dataarrange/utils/common";
import { AUTH_TOKEN, SUCCESS_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import useUserStore from "@/app/doctor/justand";
import * as Lockr from "lockr";

const LoginModal = ({ isVisible, setmodal}) => {
    const {setCurrentPatient,setActive_practiceId,setToken,setRole } = useUserStore();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(isVisible);

  const sendOtp = () => {
    axios
      .post(makeURL("patient_login/send_otp_lr_cart/"), { phone_no: phoneNumber })
      .then((response) => {
        displayMessage(SUCCESS_MSG_TYPE, response.data.detail);
        setStep(2); // Move to OTP input step
      })
      .catch((error) => {
        console.error("Error sending OTP:", error.response?.data || error.message);
      });
  };

  const handleLogin = () => {
    axios
      .post(makeURL("patient_login/verify_otp_lr_cart/"), { phone_no: phoneNumber, otp })
      .then((response) => {
        displayMessage(SUCCESS_MSG_TYPE, response.data.detail);
        setCurrentPatient(response.data.patient);
                      setActive_practiceId(response.data.patient.practice_list);
                      setToken( response.data.token);
                      setRole(response.data.patient.user);
                      // Lockr.set(ROLE, data.user);
                      // Lockr.set("patient" , data.patient)
                      Lockr.set(AUTH_TOKEN, response.data.token);
        // onLoginSuccess(response.data); // Pass login data back to parent
        setIsModalOpen(false); // Close the modal
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error.response?.data || error.message);
      });
  };

  return (
    <Modal
      title="Login To Add To Your Cart"
      visible={isModalOpen}
      onCancel={() => {setIsModalOpen(false)
        setmodal(false)
      }}
      footer={[
        <Button key="cancel" onClick={() =>{ setIsModalOpen(false)
            setmodal(false)
        }}>
          Cancel
        </Button>,
        step === 2 && (
          <Button
            key="login"
            type="primary"
            onClick={handleLogin}
            disabled={!otp}
          >
            Login
          </Button>
        ),
      ]}
    >
      <div>
        {step === 1 && (
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <Input
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mb-4"
            />
            <Button
              type="primary"
              onClick={sendOtp}
              disabled={!phoneNumber}
            >
              Send OTP
            </Button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label className="block text-sm font-medium mb-2">OTP</label>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mb-4"
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default LoginModal;
