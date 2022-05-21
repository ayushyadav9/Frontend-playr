import React, { useState } from "react";
import { Layout, Menu, Button, Typography, Card, Form, Input, Checkbox } from "antd";
import logo1 from "../../assets/images/logos-facebook.svg";
import logo2 from "../../assets/images/logo-apple.svg";
import logo3 from "../../assets/images/Google__G__Logo.svg.png";
import { QrReader } from "react-qr-reader";
import { Link } from "react-router-dom";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "../../assets/styles/main.css";
import "../../assets/styles/responsive.css";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const Registration = (props) => {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            console.log(result);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
};

export default Registration;
