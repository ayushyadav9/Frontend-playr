import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Space,
  Button,
  message,
  Row,
} from "antd";

const Personal = ({ formData, setformData, handelStatus }) => {
  const [isLoading, setisLoading] = useState(false);

  const handelNext = () => {
    if (
      formData.name.length &&
      formData.email.length &&
      formData.address.length &&
      formData.phone.length &&
      formData.dob.length &&
      formData.gender.length
    ) {
      setisLoading(true);
      handelStatus(1);
      setisLoading(false);
    } else {
      message.error("Please Fill Personal Details!");
    }
  };

  return (
    <>
      <Form
        layout="vertical"
        style={{ margin: "30px auto", width: "50%" }}
        size={"large"}
      >
        <Form.Item label="Full Name" style={{ marginTop: "-23px" }}>
          <Input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            required
          />
        </Form.Item>
        <Form.Item label="Email Id" style={{ marginTop: "-23px" }}>
          <Input
            type="email Id"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
            required
          />
        </Form.Item>
        <Form.Item label="Address" style={{ marginTop: "-23px" }}>
          <Input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setformData({ ...formData, address: e.target.value })
            }
            required
          />
        </Form.Item>
        <Row>
          <Form.Item
            label="Phone No"
            style={{ width: "45%", marginTop: "-23px" }}
          >
            <Input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setformData({ ...formData, phone: e.target.value })
              }
              required
            />
          </Form.Item>
          <Form.Item label="Password" style={{ width: "45%",marginLeft:"55px",marginTop:"-23px"}}>
          <Input
            type="text"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setformData({ ...formData, password: e.target.value })
            }
            required
          />
        </Form.Item>
        </Row>

        <Space
          style={{
            width: "100%",
            margin: "0 auto",
            justifyContent: "center",
            marginTop: "-30px",
          }}
        >
          <Form.Item
            label="DOB"
            style={{
              margin: "0 auto",
              width: "100%",
            }}
          >
            <DatePicker
              style={{ width: 260 }}
              onChange={(date, dateString) => {
                setformData({ ...formData, dob: dateString });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            style={{
              margin: "0 auto",
              width: "100%",
              marginLeft: "48px",
            }}
          >
            <Select
              size={"large"}
              style={{ width: 270 }}
              defaultValue="Select"
              onChange={(e) => setformData({ ...formData, gender: e })}
            >
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="primary"
          shape = "round"
          style={{ margin: "0 10px" }}
          onClick={handelNext}
          loading={isLoading}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Personal;
