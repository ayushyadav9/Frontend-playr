import React, { useEffect, useState } from "react";
import { Result, Button, Spin, message } from "antd";
// import { baseURL } from "../../../api";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../api";

const Done = ({ formData }) => {
  // eslint-disable-next-line
  const [status, setStatus] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 0) {
      setStatus(1);
      formData.role = "player";
      console.log(formData);
      fetch(`${baseURL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((result, err) => {
          if (err) {
            console.log(err);
            message.error("Something went wrong");
            return;
          }
          if (result.success) {
            message.success(result.message);
            localStorage.setItem(`Token`, result.data.token);
            navigate("/");
          } else {
            message.info(result.message);
          }
          console.log(result);
        });
    }
    //handelStatus(3);
  }, [formData, navigate, status]);

  //After Saving data set status to 1
  //And set handel status to 3;

  return (
    <>
      {status === 0 ? (
        <Result
          status="info"
          title="Sending Data to Blockchain"
          subTitle="Your Personal Data is completely Safe on Blockchain"
          extra={[<Spin size="large" />]}
        />
      ) : status === 1 ? (
        <Result
          status="success"
          title="Successfully Registered for vKYC"
          subTitle="Login credentials sent via Email"
          extra={[
            <Button type="primary" key="console" onClick={() => navigate("/")}>
              Proceed to Login
            </Button>,
          ]}
        />
      ) : (
        <Result
          status="error"
          title="Failed To Register"
          subTitle="You can try again after sometime"
          extra={[
            <Button
              shape="round"
              type="primary"
              key="console"
              onClick={() => navigate("/")}
            >
              Go to Home
            </Button>,
          ]}
        />
      )}
    </>
  );
};

export default Done;
