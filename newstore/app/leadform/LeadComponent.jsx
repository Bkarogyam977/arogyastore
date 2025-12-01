"use client";

import { getOuterAPI, postOuterAPI } from "@/dataarrange/utils/common";
import { useEffect, useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Image from "next/image";
import { toast } from "react-toastify";

export default function LeadComponent({ formId, partnerId }) {
  const [patientdata, setPatientdata] = useState(null);
  const [gallerydata, setGallerydata] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const fetchuser = useCallback(() => {
    const successfn = (data) => {
      setPatientdata(data);
    };
    const errorfn = () => {
      console.error("Error fetching user data");
    };
    getOuterAPI(`https://healdiway.bkarogyam.com/erp-api/patients/${partnerId}/`, successfn, errorfn);
  }, [partnerId]);

  const fetchFormdata = useCallback(() => {
    const successfn = (data) => {
      setGallerydata(data);
      if (data?.image_url) {
        setBackgroundImage(`url("https://healdiway.bkarogyam.com/media/${data.image_url}")`);
      }
    };
    const errorfn = () => {
      console.error("Error fetching form data");
    };
    getOuterAPI(`https://healdiway.bkarogyam.com/erp-api/yt-gallery/${formId}/`, successfn, errorfn);
  }, [formId]);

  useEffect(() => {
    fetchuser();
    fetchFormdata();
  }, [fetchuser, fetchFormdata]);

  const onFinish = (values) => {
    if (!patientdata?.user?.id) {
      toast.error("User data is missing. Please try again.");
      return;
    }

    const fdata = {
      ...values,
      title: gallerydata?.title || "",
      user_id: patientdata.user.id,
    };

    console.log("Form Submitted:", fdata);

    const successfn = () => {
      toast.success("Information sent successfully!");
    };

    const errorfn = () => {
      toast.error("Error submitting the form. Please try again.");
    };

    postOuterAPI("https://healdiway.bkarogyam.com/erp-api/leadformmobile/", fdata, successfn, errorfn);
  };

  return (
    <div className="flex items-center justify-center w-full h-[46rem] bg-gray-100">
      <div
        className="relative bg-cover bg-no-repeat bg-center max-w-sm w-full h-[44rem] overflow-y-auto flex flex-col justify-end shadow-lg rounded-lg p-6"
        style={{
          backgroundImage: backgroundImage || "none",
        }}
      >
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2">
            <div>
              <Image width={40} height={40} src={"/favicon.ico"} alt="leanform" />
            </div>
            <span>{patientdata?.user?.first_name || "Guest"}</span>
          </div>
        </div>

        <div className="w-full absolute bottom-14 left-0 right-0 px-4">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: "Please enter your mobile number" },
                { pattern: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" },
              ]}
            >
              <Input size="large" placeholder="Enter Mobile Number" />
            </Form.Item>

            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input size="large" placeholder="Enter Full Name" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
