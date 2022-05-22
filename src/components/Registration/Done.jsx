import React, { useState } from "react";
import { Result, Button, Spin } from "antd";
// import { baseURL } from "../../../api";
import {useNavigate} from "react-router-dom"

const Done = ({formData }) => {

  // eslint-disable-next-line
  const [status, setStatus] = useState(0);
  const navigate = useNavigate();

  if(status === 0){
    setInterval(() => {
      setStatus(1);
      console.log(formData);
      //handelStatus(3);
    }, 1000);
  }

  //After Saving data set status to 1
  //And set handel status to 3;

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
            <Button type="primary" key="console" onClick={()=>navigate("/")}>
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
            <Button shape="round" type="primary" key="console" onClick={()=>navigate("/")}>
              Go to Home
            </Button>,
          ]}
        />
      )}
    </>
  );
};

export default Done;