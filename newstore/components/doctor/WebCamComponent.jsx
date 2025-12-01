import React, { useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "antd";

const WebCamField = ({ getScreenShot }) => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (getScreenShot) getScreenShot(imageSrc);
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <div style={{ width: 680 }}>
      <Webcam
        audio={false}
        height={480}
        width={640}
        ref={webcamRef}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
      />
      <Button onClick={capture}>Capture photo</Button>
    </div>
  );
};

export default WebCamField;
