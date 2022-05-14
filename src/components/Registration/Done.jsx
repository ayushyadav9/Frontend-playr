import React, { useEffect, useState } from "react";
import { Result, Button, Spin, message } from "antd";
// import { baseURL } from "../../../api";
// import { useHistory } from "react-router-dom";

const Done = ({ formData }) => {

  const [status, setStatus] = useState(0);
  // const history = useHistory();

  useEffect(() => {
    console.log(formData)
  }, [formData]);

  return (
    <>
      {status === 0 ? (
        <Result
          status="info"
          title="Sending Data to Blockchain"
          subTitle="Your Personal Data is completely Safe on Blockchain"
          extra={[
            <Spin size="large" />
          ]}
        />
      ) : status === 1 ? (
        <Result
          status="success"
          title="Successfully Registered for vKYC"
          subTitle="Login credentials sent via Email"
          extra={[
            <Button type="primary" key="console" >
              Proceed to Login
            </Button>            
          ]}
        />
      ) : (
        <Result
          status="error"
          title="Failed To Register"
          subTitle="You can try again after sometime"
          extra={[
            <Button type="primary" key="console">
              Go to Home
            </Button>,
          ]}
        />
      )}
    </>
  );
};

export default Done;