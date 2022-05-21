import { useState } from "react";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
  Upload,
  Typography,
  Divider,
  TimePicker,
  Space,
} from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

const layout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const UpdateMatchResult = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Card>
      <Form
        {...layout}
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Tournament Name"
          name="name"
          rules={[{ required: true, message: "Please input the name of the tournament" }]}
        >
          <Input disabled defaultValue="Manchester United v/s Tottenham Hotspur" />
        </Form.Item>

        <Form.Item
          label="Organizer"
          name="organizer"
          rules={[{ required: true, message: "Please input the Organizer" }]}
        >
          <Input disabled defaultValue="World Baseball Classic" />
        </Form.Item>

        <Divider orientation="left">First Half</Divider>

        <Form.List name="first-half">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    rules={[{ required: true, message: "Missing Scoring Team" }]}
                  >
                    <Select placeholder="Select Scoring Team" allowClear>
                      <Option value="teamA">Manchester United</Option>
                      <Option value="teamB">Tottenham Hotspur</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    rules={[{ required: true, message: "Missing Goal Time" }]}
                  >
                    <TimePicker />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Goal
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Divider orientation="left">Second Half</Divider>
        <Form.List name="second-half">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    rules={[{ required: true, message: "Missing Scoring Team" }]}
                  >
                    <Select placeholder="Select Scoring Team" allowClear>
                      <Option value="teamA">Manchester United</Option>
                      <Option value="teamB">Tottenham Hotspur</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    rules={[{ required: true, message: "Missing Goal Time" }]}
                  >
                    <TimePicker />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Goal
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Divider orientation="left">Fouls</Divider>
        <Form.List name="Fouls">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    rules={[{ required: true, message: "Choose a Team" }]}
                  >
                    <Select placeholder="Select Team" allowClear>
                      <Option value="teamA">Manchester United</Option>
                      <Option value="teamB">Tottenham Hotspur</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    rules={[{ required: true, message: "Missing Foul Time" }]}
                  >
                    <TimePicker />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "foul"]}
                    rules={[{ required: false }]}
                  >
                    <Input placeholder="Remarks" />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}

              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Foul
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item
          name="sheet-upload"
          label="Score Sheet"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra=""
        >
          <Upload name="sheet-upload" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UpdateMatchResult;
