'use client'
import { Button } from "antd";
import React, { useState, useEffect } from "react";

const InfiniteFeedLoaderButton = (props) => {
  const [extraLoadingLabel, setExtraLoadingLabel] = useState("");

  const startLoading = () => {
    if (props.loaderFunction) {
      props.loaderFunction();
      startMakingExtraLabels();
    }
  };

  const startMakingExtraLabels = () => {
    if (extraLoadingLabel.length > 2) {
      setExtraLoadingLabel("");
    } else {
      setExtraLoadingLabel((prevLabel) => prevLabel + ".");
    }
  };

  useEffect(() => {
    if (props.loading) {
      const intervalId = setInterval(() => {
        startMakingExtraLabels();
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [props.loading]);

  if (props.hidden) {
    return (
      <div style={{ textAlign: "center", margin: "15px 0px" }}>
        <small>No More Data Found</small>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", margin: "15px 0px" }}>
      <Button type={"primary"} onClick={startLoading} loading={props.loading}>
        {props.loading ? "Loading" + extraLoadingLabel : "Load More"}
      </Button>
    </div>
  );
};

export default InfiniteFeedLoaderButton;
