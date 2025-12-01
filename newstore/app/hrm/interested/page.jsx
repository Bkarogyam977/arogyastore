"use client";

import {
  CheckCircleFilled,
  PlusCircleFilled,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Input,
  Select,
  Checkbox,
  Upload,
  Button,
  DatePicker,
  message,
  Form,
  Modal,
} from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getOuterAPI, makeURL, postOuterAPI } from "@/dataarrange/utils/common";
import { FILE_UPLOAD_API } from "@/dataarrange/constants/api";
import { useSearchParams } from "next/navigation";
// import { useRouter } from 'next/router';

const { TextArea } = Input;
const { MonthPicker } = DatePicker;
const { Option } = Select;

const InterestedCandidate = () => {
  // const route = useRouter()

  const route = useSearchParams();
  const id = route.get("id");

  const [jobdata, setJobdata] = useState(null);
  const [skill, setSkill] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [is_modal, setIs_modal] = useState(false);

  const openmodal = () => {
    setIs_modal(!is_modal);
  };

  useEffect(() => {
    if (id) {
      fetchjobopening(id);
      fetchskillset();
    }
  }, []);

  const fetchjobopening = (id) => {
    setIsLoading(true);
    const successfn = (data) => {
      setJobdata(data);
      setIsLoading(false);
    };

    const errorfn = () => {
      setIsLoading(false);
    };

    getOuterAPI(
      `https://healdiway.bkarogyam.com/erp-api/hr_job_opening/${id}`,
      successfn,
      errorfn
    );
  };

  const fetchskillset = (id) => {
    setIsLoading(true);
    const successfn = (data) => {
      const mdata = data.map((e) => ({
        label: e.name,
        value: e.id,
      }));

      setSkill(mdata);
      setIsLoading(false);
    };

    const errorfn = () => {
      setIsLoading(false);
    };

    getOuterAPI(
      `https://healdiway.bkarogyam.com/erp-api/hr_skill`,
      successfn,
      errorfn
    );
  };

  const singleUploadprops = {
    name: "image",
    data: {
      name: "store_category_image",
    },
    action: makeURL(FILE_UPLOAD_API),
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const filterOption = (inputValue, option) => {
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  const onFinish = (data) => {
    const educationalDetails = data.educational_details
      ? data.educational_details.map((detail) => ({
          ...detail,
          start_month: detail.start_month
            ? detail.start_month.month() + 1
            : null, // moment month is zero-based
          start_year: detail.start_month ? detail.start_month.year() : null,
          end_month: detail.end_month ? detail.end_month.month() + 1 : null, // moment month is zero-based
          end_year: detail.end_month ? detail.end_month.year() : null,
        }))
      : null;

    const experainceDetails = data.experience_details
      ? data.experience_details.map((detail) => ({
          ...detail,
          start_month: detail.start_month
            ? detail.start_month.month() + 1
            : null, // moment month is zero-based
          start_year: detail.start_month ? detail.start_month.year() : null,
          end_month: detail.end_month ? detail.end_month.month() + 1 : null, // moment month is zero-based
          end_year: detail.end_month ? detail.end_month.year() : null,
        }))
      : null;

    const mdata = {
      ...data,
      job_opening_id: id,
      educational_details: educationalDetails,
      experience_details: experainceDetails,
    };

    const successfn = (data) => {
      message.success(`Send successfully`);

      openmodal();
    };

    const errorfn = () => {};

    console.log(data);

    postOuterAPI(
      "https://healdiway.bkarogyam.com/erp-api/hr_candidate_profile/applycandidate/",
      mdata,
      successfn,
      errorfn
    );
  };

  return isloading ? (
    <div>Loading...</div>
  ) : (
    jobdata && (
      <div className="max-w-4xl mx-auto bg-card text-foreground p-6 rounded-lg shadow-lg py-16">
        <Modal
          open={is_modal}
          closable={false}
          cancelButtonProps={{ hidden: true }}
          okButtonProps={{ hidden: true }}
        >
          <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-green-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Submission Successful!
                </h2>
                <p className="text-gray-600 mb-4">
                  Thank you for submitting your recruitment data. We will review
                  your submission and get back to you soon.
                </p>
                <a href="https://www.bkarogyam.com">
                  <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                    Visit Site
                  </a>
                </a>
              </div>
            </div>
          </div>
        </Modal>
        <div className="p-6 bg-card text-foreground rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Application Form</h2>
          <h4 className="font-semibold mb-2">
            Basic Info - <button className="text-primary">Clear</button>
          </h4>
          <Form onFinish={onFinish}>
            {jobdata.first_name && (
              <div className="mb-4">
                <label htmlFor="first-name" className="block mb-1">
                  First Name
                </label>
                <div className="flex flex-col md:flex-row gap-2">
                  <Select
                    className="border border-border rounded-lg  bg-white w-1/3  "
                    placeholder={"Suffix"}
                    size="large"
                  >
                    <Option key={"mr"}>Mr</Option>
                    <Option key={"mrs"}>Mrs</Option>
                  </Select>
                  <Form.Item
                    className="w-full"
                    name={"first_name"}
                    rules={[
                      {
                        required: jobdata.is_first_name,
                        message: "First name is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="first-name"
                      placeholder="First Name"
                      className="border border-border rounded-lg p-2 w-full"
                      required
                    />
                  </Form.Item>
                </div>
              </div>
            )}
            {jobdata.last_name && (
              <div className="mb-4">
                <label htmlFor="last-name" className="block mb-1">
                  Last Name *
                </label>
                <Form.Item
                  name={"last_name"}
                  rules={[
                    {
                      required: jobdata.is_last_name,
                      message: "Last name is required",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    id="last-name"
                    className="border border-border rounded-lg p-2 w-full"
                    required
                  />
                </Form.Item>
              </div>
            )}

            {jobdata.gender && (
              <div className="mb-4">
                <label htmlFor="gender" className="block mb-1">
                  Gender *
                </label>
                <Form.Item
                  name={"gender"}
                  rules={[
                    {
                      required: jobdata.is_gender,
                      message: "Gender is required",
                    },
                  ]}
                >
                  <Select
                    className="border border-border rounded-lg  bg-white w-1/3  "
                    placeholder={"Gender"}
                    size="large"
                  >
                    <Option key={"male"}>Male</Option>
                    <Option key={"female"}>Female</Option>
                    <Option key={"other"}>Other</Option>
                  </Select>
                </Form.Item>
              </div>
            )}

            {jobdata.email && (
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <Form.Item
                  name={"email"}
                  rules={[
                    {
                      required: jobdata.is_email,
                      message: "Email is required",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    id="email"
                    className="border border-border rounded-lg p-2 w-full"
                  />
                </Form.Item>
              </div>
            )}
            {jobdata.mobile && (
              <div className="mb-4">
                <label htmlFor="mobile" className="block mb-1">
                  Mobile
                </label>
                <Form.Item
                  name={"mobile"}
                  rules={[
                    {
                      required: jobdata.is_mobile,
                      message: "Mobile is required",
                    },
                  ]}
                >
                  <Input
                    type="tel"
                    id="mobile"
                    className="border border-border rounded-lg p-2 w-full"
                  />
                </Form.Item>
              </div>
            )}
            {jobdata.location && (
              <div>
                {" "}
                <h4 className="font-semibold mb-2">
                  Address Information -{" "}
                  <button className="text-primary">Clear</button>
                </h4>
                <div className="mb-4">
                  <label htmlFor="street" className="block mb-1">
                    Street *
                  </label>
                  <Form.Item
                    name={"street"}
                    rules={[
                      {
                        required: jobdata.is_location,
                        message: "street is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="street"
                      className="border border-border rounded-lg p-2 w-full"
                      required
                    />
                  </Form.Item>
                </div>
                <div className="mb-4">
                  <label htmlFor="city" className="block mb-1">
                    City
                  </label>
                  <Form.Item
                    name={"city"}
                    rules={[
                      {
                        required: jobdata.is_location,
                        message: "City is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="city"
                      className="border border-border rounded-lg p-2 w-full"
                    />
                  </Form.Item>
                </div>
                <div className="mb-4">
                  <label htmlFor="state" className="block mb-1">
                    State/Province
                  </label>
                  <Form.Item
                    name={"state"}
                    rules={[
                      {
                        required: jobdata.is_location,
                        message: "State is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="state"
                      className="border border-border rounded-lg p-2 w-full"
                    />
                  </Form.Item>
                </div>
                <div className="mb-4">
                  <label htmlFor="zip" className="block mb-1">
                    Zip/Postal Code
                  </label>
                  <Form.Item
                    name={"pincode"}
                    rules={[
                      {
                        required: jobdata.is_location,
                        message: "Zip is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="zip"
                      className="border border-border rounded-lg p-2 w-full"
                    />
                  </Form.Item>
                </div>
                <div className="mb-4">
                  <label htmlFor="country" className="block mb-1">
                    Country
                  </label>
                  <Form.Item
                    name={"country"}
                    initialValue={"India"}
                    rules={[
                      {
                        required: jobdata.is_location,
                        message: "Country is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="country"
                      className="border border-border rounded-lg p-2 w-full"
                    />
                  </Form.Item>
                </div>{" "}
              </div>
            )}
            <h4 className="font-semibold mb-2">
              Professional Details -{" "}
              <button className="text-primary">Clear</button>
            </h4>
            {jobdata.current_organisation && (
              <div className="mb-4">
                <label htmlFor="job-title" className="block mb-1">
                  Current Job Title *
                </label>
                <Form.Item
                  name={"current_job_title"}
                  rules={[
                    {
                      required: jobdata.is_current_organisation,
                      message: "Current Job  is required",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    id="job-title"
                    className="border border-border rounded-lg p-2 w-full"
                    required
                  />
                </Form.Item>
              </div>
            )}
            {jobdata.skill && (
              <div className="mb-4">
                <label htmlFor="skill-set" className="block mb-1">
                  Skill Set
                </label>
                <Form.Item
                  name={"skill"}
                  rules={[
                    {
                      required: jobdata.is_skill,
                      message: "Skill is required",
                    },
                  ]}
                >
                  <Select
                    options={skill}
                    filterOption={filterOption}
                    mode="multiple"
                    showSearch
                  />
                </Form.Item>
              </div>
            )}
            <div className="mb-4 flex flex-col md:flex-row gap-2">
              {jobdata.join_in_days && (
                <div className="w-full md:w-1/4">
                  <label htmlFor="join-in-days" className="block mb-1">
                    Join in Days
                  </label>
                  <Form.Item
                    name={"join_in_days"}
                    rules={[
                      {
                        required: jobdata.is_join_in_days,
                        message: "In days is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="join-in-days"
                      className="border border-border rounded-lg p-2 w-full"
                    />
                  </Form.Item>
                </div>
              )}
              {jobdata.current_annual_ctc && (
                <div className="w-full md:w-1/4">
                  <label htmlFor="current-ctc" className="block mb-1">
                    Current Annual CTC
                  </label>
                  <Form.Item
                    name={"current_annual_ctc"}
                    rules={[
                      {
                        required: jobdata.is_current_annual_ctc,
                        message: "Current annual is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="current-ctc"
                      className="border border-border rounded-lg p-2 w-full"
                    />
                  </Form.Item>
                </div>
              )}
              {jobdata.expected_annual_ctc && (
                <div className="w-full md:w-1/4">
                  <label htmlFor="expected-ctc" className="block mb-1">
                    Expected Annual CTC
                  </label>
                  <Form.Item
                    name={"expected_annual_ctc"}
                    rules={[
                      {
                        required: jobdata.is_expected_annual_ctc,
                        message: "Expected is required",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      id="expected-ctc"
                      className="border border-border rounded-lg p-2 w-full"
                    />
                  </Form.Item>
                </div>
              )}
              {jobdata.notice_period && (
                <div className="w-full md:w-1/4">
                  <label htmlFor="notice-period" className="block mb-1">
                    Notice Period
                  </label>
                  <Form.Item name={"notice_period"}>
                    <Input
                      type="text"
                      id="notice-period"
                      className="border border-border rounded-lg p-2 w-full"
                    />
                  </Form.Item>
                </div>
              )}
            </div>

            {jobdata.qualification && (
              <div>
                {" "}
                <h4 className="font-semibold mb-2">Educational Details - </h4>
                <Form.List name={"educational_details"}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restfield }) => (
                        <div className="" key={key}>
                          <div className="mb-4">
                            <div className="flex justify-between">
                              <label
                                htmlFor="school-name"
                                className="block mb-1"
                              >
                                Institute / School
                              </label>
                              <button
                                type="button"
                                className="text-blue-400"
                                onClick={() => remove(name)}
                              >
                                Delete
                              </button>
                            </div>
                            <Form.Item name={[name, "institute"]}>
                              <Input
                                type="text"
                                id="school-name"
                                className="border border-border rounded-lg p-2 w-full"
                              />
                            </Form.Item>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="department" className="block mb-1">
                              Major / Department
                            </label>
                            <Form.Item name={[name, "department"]}>
                              <Input
                                type="text"
                                id="department"
                                className="border border-border rounded-lg p-2 w-full"
                              />
                            </Form.Item>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="degree" className="block mb-1">
                              Degree
                            </label>
                            <Form.Item name={[name, "degree"]}>
                              <Input
                                type="text"
                                id="degree"
                                className="border border-border rounded-lg p-2 w-full"
                              />
                            </Form.Item>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="duration" className="block mb-1">
                              Durations
                            </label>
                            <div className="flex flex-col md:flex-row gap-2">
                              <Form.Item name={[name, "start_month"]}>
                                <DatePicker
                                  className="w-full"
                                  placeholder="Select Month"
                                  picker="month"
                                />
                              </Form.Item>
                              <Form.Item name={[name, "start_year"]}>
                                <MonthPicker
                                  className="w-full"
                                  placeholder="Select Year"
                                  format="YYYY"
                                  picker="year"
                                />
                              </Form.Item>
                              <h4>To</h4>
                              <Form.Item name={[name, "end_month"]}>
                                <DatePicker
                                  className="w-full"
                                  placeholder="Select Month"
                                  picker="month"
                                />
                              </Form.Item>
                              <Form.Item name={[name, "end_year"]}>
                                <MonthPicker
                                  className="w-full"
                                  placeholder="Select Year"
                                  format="YYYY"
                                  picker="year"
                                />
                              </Form.Item>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="mb-2 w-full">
                        <Button
                          type="primary"
                          className="flex  border-1.5 border-gray-400 items-center w-full justify-center"
                          isIconOnly
                          onClick={() => add()}
                        >
                          <PlusCircleFilled className="text-blue-400" />
                        </Button>{" "}
                      </div>
                    </>
                  )}
                </Form.List>{" "}
              </div>
            )}

            {jobdata.experiance && (
              <div>
                {" "}
                <h4 className="font-semibold mb-2">Experience Details - </h4>
                <Form.List name={"experience_details"}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restfield }) => (
                        <div className="" key={key}>
                          <div className="mb-4">
                            <div className="flex justify-between">
                              <label
                                htmlFor="occupation"
                                className="block mb-1"
                              >
                                Occupation / Title
                              </label>
                              <button
                                type="button"
                                className="text-blue-400"
                                onClick={() => remove(name)}
                              >
                                Delete
                              </button>
                            </div>
                            <Form.Item
                              name={[name, "occupation"]}
                              rules={[
                                {
                                  required: jobdata.is_experiance,
                                  message: "Occupation is required",
                                },
                              ]}
                            >
                              <Input
                                type="text"
                                id="occupation"
                                className="border border-border rounded-lg p-2 w-full"
                              />
                            </Form.Item>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="company" className="block mb-1">
                              Company
                            </label>
                            <Form.Item
                              name={[name, "company"]}
                              rules={[
                                {
                                  required: jobdata.is_experiance,
                                  message: "Campany is required",
                                },
                              ]}
                            >
                              <Input
                                type="text"
                                id="company"
                                className="border border-border rounded-lg p-2 w-full"
                              />
                            </Form.Item>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="summary" className="block mb-1">
                              Summary
                            </label>
                            <Form.Item name={[name, "summary"]}>
                              <TextArea
                                rows={4}
                                id="summary"
                                className="border border-border rounded-lg p-2 w-full"
                              />
                            </Form.Item>
                          </div>

                          <div className="mb-4">
                            <label htmlFor="duration" className="block mb-1">
                              Work Durations
                            </label>
                            <div className="flex flex-col md:flex-row gap-2">
                              <Form.Item name={[name, "start_month"]}>
                                <DatePicker
                                  className="w-full"
                                  placeholder="Select Month"
                                  picker="month"
                                />
                              </Form.Item>
                              <Form.Item name={[name, "start_year"]}>
                                <MonthPicker
                                  className="w-full"
                                  placeholder="Select Year"
                                  format="YYYY"
                                  picker="year"
                                />
                              </Form.Item>
                              <h4>To</h4>
                              <Form.Item name={[name, "end_month"]}>
                                <DatePicker
                                  className="w-full"
                                  placeholder="Select Month"
                                  picker="month"
                                />
                              </Form.Item>
                              <Form.Item name={[name, "end_year"]}>
                                <MonthPicker
                                  className="w-full"
                                  placeholder="Select Year"
                                  format="YYYY"
                                  picker="year"
                                />
                              </Form.Item>
                            </div>
                          </div>
                          <div className="mb-4">
                            <Form.Item name={[name, "is_currently"]}>
                              <Checkbox>I Currently Work Here</Checkbox>
                            </Form.Item>
                          </div>
                        </div>
                      ))}

                      <div className="mb-2 w-full border hover:text-white">
                        <Button
                          type="primary"
                          className="flex  border-1.5 border-gray-400 items-center w-full justify-center"
                          isIconOnly
                          onClick={() => add()}
                        >
                          <PlusCircleFilled className=" text-black" />
                        </Button>{" "}
                      </div>
                    </>
                  )}
                </Form.List>{" "}
              </div>
            )}

            <h4 className="font-semibold mb-2">
              Social Network - <button className="text-primary">Clear</button>
            </h4>
            <div className="mb-4">
              <label htmlFor="linkedin" className="block mb-1">
                Linkedin
              </label>
              <Form.Item name={"linkedin"}>
                <Input
                  type="text"
                  id="linkedin"
                  className="border border-border rounded-lg p-2 w-full"
                />
              </Form.Item>
            </div>
            <div className="mb-4">
              <label htmlFor="facebook" className="block mb-1">
                Facebook/Meta
              </label>
              <Form.Item name={"facebook"}>
                <Input
                  type="text"
                  id="facebook"
                  className="border border-border rounded-lg p-2 w-full"
                />
              </Form.Item>
            </div>
            <div className="mb-4">
              <label htmlFor="twitter" className="block mb-1">
                Twitter
              </label>
              <Form.Item name={"twitter"}>
                <Input
                  type="text"
                  id="twitter"
                  className="border border-border rounded-lg p-2 w-full"
                />
              </Form.Item>
            </div>
            <section className="p-4 rounded-lg shadow-sm">
              {/* Heading */}
              <div className="flex justify-center mb-6 relative">
                <h4 className="font-semibold text-lg">
                  Attachment Information
                </h4>
              </div>

              {/* Upload Section: Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {jobdata.upload_document && (
                  <div>
                    <label htmlFor="photo" className="block mb-2 font-medium">
                      Photo
                    </label>
                    <Form.Item
                      name={"upload_document"}
                      getValueFromEvent={(e) => e.file.response?.image_path}
                      rules={[
                        {
                          required: jobdata.is_upload_document,
                          message: "Photo is required",
                        },
                      ]}
                    >
                      <Upload {...singleUploadprops}>
                        <div className="cursor-pointer border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-blue-50">
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <UploadOutlined />
                          </div>
                          <p className="font-medium text-gray-700">
                            Click to Upload Photo
                          </p>
                        </div>
                      </Upload>
                    </Form.Item>
                  </div>
                )}

                <div>
                  <label htmlFor="resume" className="block mb-2 font-medium">
                    Resume
                  </label>
                  <Form.Item
                    name={"file"}
                    getValueFromEvent={(e) => e.file.response?.image_path}
                  >
                    <Upload {...singleUploadprops}>
                      <div className="cursor-pointer border-2 border-dashed border-gray-300 hover:border-green-500 rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-green-50">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                          <UploadOutlined />
                        </div>
                        <p className="font-medium text-gray-700">
                          Click to Upload Resume
                        </p>
                      </div>
                    </Upload>
                  </Form.Item>
                </div>
              </div>

              {/* Submit Button - Centered */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-red-500 text-white hover:bg-red-600 px-8 py-3 font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </section>
          </Form>
        </div>
      </div>
    )
  );
};

export default InterestedCandidate;
