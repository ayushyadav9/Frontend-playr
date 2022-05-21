import React, { useState } from "react";
// import { baseURL } from "../api";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input, Radio, message, Card, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Login.css";
import { baseURL } from "../../api";
const { Meta } = Card;

const Login1 = () => {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
    sender: "",
  });
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const onFinish = (values) => {
    values.role = loginData.sender
    if (loginData.sender === "player" || loginData.sender === "scout" || loginData.sender === "official") {
        setisLoading(true)
        fetch(`${baseURL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((result, err) => {
            setisLoading(false)
            if (err) {
              console.log(err);
              message.error("Something went wrong");
              return;
            }
            if (result.success) {
              message.success(result.message);
              localStorage.setItem(`Token`, result.data.token);
                navigate("/")
            } else {
              message.info(result.message);
            }
            console.log(result);
          });
      } else {
        message.info("Please select yout role!");
      }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handelClick = (e) => {
    console.log(e);
    setloginData({ ...loginData, sender: e });
  };

  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img src="./login.jpg" alt="Login" />
          </div>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <p className="form-title">Welcome Back</p>
            <p>Login your PlayR Dashboard</p>
            <Form.Item>
              <Row>
                <Col span={8}>
                  <Card
                    size="small"
                    style={{margin:"10px"}}
                    onClick={() => {
                      handelClick("player");
                    }}
                    className={
                      loginData.sender === "player"
                        ? "card-selected"
                        : "card-notselected"
                    }
                    hoverable
                    cover={<img alt="Player" src="./player.png" />}
                  >
                    <Meta title=" Player" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    size="small"
                    style={{margin:"10px"}}
                    onClick={() => {
                      handelClick("scout");
                    }}
                    className={
                      loginData.sender === "scout"
                        ? "card-selected"
                        : "card-notselected"
                    }
                    hoverable
                    cover={<img alt="Scout" src="./scout.png" />}
                  >
                    <Meta title=" Scout" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    size="small"
                    style={{margin:"10px"}}
                    onClick={() => {
                      handelClick("official");
                    }}
                    className={
                      loginData.sender === "official"
                        ? "card-selected"
                        : "card-notselected"
                    }
                    hoverable
                    cover={<img alt="Official" src="./official.png" />}
                  >
                    <Meta title=" Official" />
                  </Card>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                className="login-form-button"
              >
                LOGIN
              </Button>
            </Form.Item>
            <div style={{ textAlign: "center" }}>
              Don't have a PlayR profile yet?
              <br />
              <span
                style={{ color: "#1890ff", cursor: "pointer" }}
                onClick={() => navigate("/register")}
              >
                Start your free playR profile now <b>→</b>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login1;
