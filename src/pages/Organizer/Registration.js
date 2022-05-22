import React, { useState,useEffect } from "react";
import { Layout, Menu, Button, Typography, Card, Form, Input, Checkbox, Modal, Row, Col } from "antd";
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
  UserOutlined,
  NumberOutlined,
  TeamOutlined
} from "@ant-design/icons";
import "../../assets/styles/main.css";
import "../../assets/styles/responsive.css";
import "./Registration.css"

const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const dummyData = {
  id: "",
  name: "",
  age: "",
  jerseyNumber: "",
  team: ""
};

const Registration = (props) => {

  const [data, setData] = useState(dummyData);

  const [isLoading, setisLoading] = useState(false);
  const [QRScannerVisible, setQRScannerVisible] = useState(false);
  const openQRScanner = () => {
    setQRScannerVisible(!QRScannerVisible);
  };

  const onFinish = values => {
    
    if (!data.id) {
      values.id = 292182;
      countDown(values.id);
    }
    else values = data;
    //Final Submitted data here in values
    console.log(values);
    setData(dummyData)
  }

  const onScan = values => {
    console.log(values);
    setData(values);
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }

  function countDown(playerId) {
    let secondsToGo = 6;
    const modal = Modal.success({
      title: `Player Registered Successfully`,
      content: `Your Dummy player Id is ${playerId}`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `Your Dummy player Id is ${playerId} closing in ${secondsToGo}`,
      });
    }, 1000);
    setTimeout(() => {
      modal.destroy();
      clearInterval(timer);
    }, secondsToGo * 999);
  }

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      name: data.name,
      age:data.age,
      jerseyNumber:data.jerseyNumber,
      team:data.team
    });
  }, [data]);

  return (
    <>
      <Modal title="Scan a QR" visible={QRScannerVisible} onCancel={openQRScanner}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              const playerData = JSON.parse(result.text)
              onScan(playerData)
              openQRScanner();
            }
            if (!!error) {
              //console.info(error);
            }
          }}
          style={{ width: "60%" }}
        />
      </Modal>


      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">

            <div>
              <Card
                onClick={openQRScanner}
                className={'card-notselected'}
                hoverable

                cover={<img alt="Player" src="./scan2.png" />}
              >
                <Meta title="Apply Fast Scan a QR" />
              </Card>
            </div>

          </div>
          <div>OR</div>
          <Form
            form={form}
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <p className="form-title">Subroto Cup 2022</p>
            <p>Spot Registration</p>

            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Enter your name!' }]}
            >
              <Input
                placeholder="name"
                value={data.name.toString()}
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="age"
              rules={[{ required: true, message: 'Enter your age!' }]}
            >
              <Input
                placeholder="Age"
                value={data.age}
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="jerseyNumber"
              rules={[{ required: true, message: 'Enter your jersey Number!' }]}
            >
              <Input
                value={data.jerseyNumber}
                placeholder="Jersey Number"
                prefix={<NumberOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="team"              
              rules={[{ required: true, message: 'Enter your Team Name!' }]}
            >
              <Input
                placeholder="Team Name"
                value={data.team}
                prefix={<TeamOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading} className="login-form-button">
                Register
              </Button>
            </Form.Item>
            <div style={{ textAlign: "center" }}>If you don't have a PlayR account you will be given a dummy account<br />
              <span>Note : You should activate dummy account within 48 hours of registration</span></div>
          </Form>

        </div>
      </div>










    </>
  );
};

export default Registration;
