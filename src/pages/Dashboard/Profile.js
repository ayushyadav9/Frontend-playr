/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";
import ava1 from "../../assets/images/logo-shopify.svg";
import ava2 from "../../assets/images/logo-atlassian.svg";
import ava3 from "../../assets/images/logo-slack.svg";
import ava4 from "../../assets/images/logo-spotify.svg";
import ava5 from "../../assets/images/logo-jira.svg";

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
  Typography,
  Table,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

import BgProfile from "../../assets/images/bg-profile.jpg";
import profilavatar from "../../assets/images/face-1.jpg";
import convesionImg from "../../assets/images/face-3.jpg";
import convesionImg2 from "../../assets/images/face-4.jpg";
import convesionImg3 from "../../assets/images/face-5.jpeg";
import convesionImg4 from "../../assets/images/face-6.jpeg";
import convesionImg5 from "../../assets/images/face-2.jpg";
import project1 from "../../assets/images/home-decor-1.jpeg";
import project2 from "../../assets/images/home-decor-2.jpeg";
import project3 from "../../assets/images/home-decor-3.jpeg";
const { Title, Text } = Typography;

function Profile() {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(false);
      });
    }
  };

  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );

  const list = [
    {
      img: ava1,
      Title: "Rajura Football League",
      level: "District",
      date: "03/05/2022",
      result: "Semi-Finals",
    },
    {
      img: ava2,
      Title: "Rajura Football League 2",
      level: "District",
      date: "03/05/2022",
      result: "Winners",
    },
    {
      img: ava3,
      Title: "Rajura Football League 3",
      level: "District",
      date: "03/05/2022",
      result: "Qualifiers",
    },
    {
      img: ava4,
      Title: "Rajura Football League 4",
      level: "District",
      date: "03/05/2022",
      result: "Semi-Finals",
    },
    {
      img: ava5,
      Title: "Rajura Football League 5",
      level: "District",
      date: "03/05/2022",
      result: "Winners",
    },
    {
      img: ava1,
      Title: "Rajura Football League",
      level: "District",
      date: "03/05/2022",
      result: "Semi-Finals",
    },
    {
      img: ava2,
      Title: "Rajura Football League 2",
      level: "District",
      date: "03/05/2022",
      result: "Winners",
    },
    {
      img: ava3,
      Title: "Rajura Football League 3",
      level: "District",
      date: "03/05/2022",
      result: "Qualifiers",
    },
    {
      img: ava4,
      Title: "Rajura Football League 4",
      level: "District",
      date: "03/05/2022",
      result: "Semi-Finals",
    },
    {
      img: ava5,
      Title: "Rajura Football League 5",
      level: "District",
      date: "03/05/2022",
      result: "Winners",
    },
    {
      img: ava1,
      Title: "Rajura Football League",
      level: "District",
      date: "03/05/2022",
      result: "Semi-Finals",
    },
    {
      img: ava2,
      Title: "Rajura Football League 2",
      level: "District",
      date: "03/05/2022",
      result: "Winners",
    },
    {
      img: ava3,
      Title: "Rajura Football League 3",
      level: "District",
      date: "03/05/2022",
      result: "Qualifiers",
    },
    {
      img: ava4,
      Title: "Rajura Football League 4",
      level: "District",
      date: "03/05/2022",
      result: "Semi-Finals",
    },
    {
      img: ava5,
      Title: "Rajura Football League 5",
      level: "District",
      date: "03/05/2022",
      result: "Winners",
    },
  ];
  const data = [
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description: "Hi! I need more information…",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg2,
      description: "Awesome work, can you…",
    },
    {
      title: "Ivan",
      avatar: convesionImg3,
      description: "About files I can…",
    },
    {
      title: "Peterson",
      avatar: convesionImg4,
      description: "Have a great afternoon…",
    },
    {
      title: "Nick Daniel",
      avatar: convesionImg5,
      description: "Hi! I need more information…",
    },
  ];

  const project = [
    {
      img: project1,
      titlesub: "Project #1",
      title: "Modern",
      disciption: "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "Project #2",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "Project #3",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  const columns = [
    {
      title: "TOURNAMENT NAME",
      dataIndex: "name",
      key: "name",
      width: "32%",
    },
    {
      title: "LEVEL",
      dataIndex: "level",
      key: "level",
    },

    {
      title: "DATE",
      key: "date",
      dataIndex: "date",
      sorter: (a, b) => {
        a = a.date.props.children ? a.date.props.children : "";
        b = b.date.props.children ? b.date.props.children : "";
        a = a.split("/").reverse().join("");
        b = b.split("/").reverse().join("");
        return a.localeCompare(b);
      },
    },
    {
      title: "RESULT",
      key: "result",
      dataIndex: "result",
    },
    {
      title: "",
      key: "more",
      dataIndex: "more",
    },
  ];

  const dataproject = [
    {
      key: "1",
      name: <h6>Rajura Premier League</h6>,
      level: "District",
      date: <span className="text-xs font-weight-bold">03/01/2018</span>,
      result: "Semi-Finals",
      more: <button>Details</button>,
    },
    {
      key: "2",
      name: <h6>Rajura Premier League</h6>,
      level: "District",
      date: <span className="text-xs font-weight-bold">03/03/2019</span>,
      result: "Semi-Finals",
      more: <button>Details</button>,
    },
    {
      key: "3",
      name: <h6>Rajura Premier League</h6>,
      level: "District",
      date: <span className="text-xs font-weight-bold">03/03/2021</span>,
      result: "Semi-Finals",
      more: <button>Details</button>,
    },
    {
      key: "4",
      name: <h6>Rajura Premier League</h6>,
      level: "District",
      date: <span className="text-xs font-weight-bold">03/05/2020</span>,
      result: "Semi-Finals",
      more: <button>Details</button>,
    },
    {
      key: "5",
      name: <h6>Rajura Premier League</h6>,
      level: "District",
      date: <span className="text-xs font-weight-bold">03/07/2022</span>,
      result: "Semi-Finals",
      more: <button>Details</button>,
    },
  ];

  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">Sarah Jacob</h4>
                  <p>CEO / Co-Founder</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">OVERVIEW</Radio.Button>
                <Radio.Button value="b">TEAMS</Radio.Button>
                <Radio.Button value="c">PROJECTS</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Card
            bordered={false}
            className="header-solid h-full"
            title={<h6 className="font-semibold m-0">Bio</h6>}
          >
            <Descriptions title="">
              <Descriptions.Item label="Full Name" span={3}>
                Sarah Emily Jacob
              </Descriptions.Item>
              {/* <Descriptions.Item label="Mobile" span={3}>
                (44) 123 1234 123
              </Descriptions.Item> */}
              <Descriptions.Item label="Email" span={3}>
                sarahjacob@mail.com
              </Descriptions.Item>
              <Descriptions.Item label="Age" span={3}>
                21
              </Descriptions.Item>
              <Descriptions.Item label="Height" span={3}>
                165 cm
              </Descriptions.Item>
              <Descriptions.Item label="Weight" span={3}>
                53 Kg
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={3}>
                USA
              </Descriptions.Item>
              <Descriptions.Item label="Social" span={3}>
                <a href="#pablo" className="mx-5 px-5">
                  {<TwitterOutlined />}
                </a>
                <a href="#pablo" className="mx-5 px-5">
                  {<FacebookOutlined style={{ color: "#344e86" }} />}
                </a>
                <a href="#pablo" className="mx-5 px-5">
                  {<InstagramOutlined style={{ color: "#e1306c" }} />}
                </a>
              </Descriptions.Item>
            </Descriptions>
            {/* <ul className="list settings-list">
              <li>
                <h6 className="list-header text-sm text-muted">ACCOUNT</h6>
              </li>
              <li>
                <Switch defaultChecked />

                <span>Email me when someone follows me</span>
              </li>
              <li>
                <Switch />
                <span>Email me when someone answers me</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Email me when someone mentions me</span>
              </li>
              <li>
                <h6 className="list-header text-sm text-muted m-0">
                  APPLICATION
                </h6>
              </li>
              <li>
                <Switch defaultChecked />
                <span>New launches and projects</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Monthly product updates</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Subscribe to newsletter</span>
              </li>
            </ul> */}
          </Card>
        </Col>
        <Col span={12}>
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Field Information</h6>}
            className="header-solid h-full card-profile-information"
            extra={<Button type="link">{pencil}</Button>}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            {/* <p className="text-dark">
              {" "}
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If
              two equally difficult paths, choose the one more painful in the short term
              (pain avoidance is creating an illusion of equality).{" "}
            </p>
            <hr className="my-25" /> */}
            <Descriptions title="">
              <Descriptions.Item label="Team" span={3}>
                Deccan Tigers
              </Descriptions.Item>
              {/* <Descriptions.Item label="Mobile" span={3}>
                (44) 123 1234 123
              </Descriptions.Item> */}
              <Descriptions.Item label="Jersey Number" span={3}>
                27
              </Descriptions.Item>
              <Descriptions.Item label="Preferred Foot" span={3}>
                Left
              </Descriptions.Item>
              <Descriptions.Item label="Player Position" span={3}>
                LB
              </Descriptions.Item>
              <Descriptions.Item label="Rating" span={3}>
                1600
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        {/* <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Conversations</h6>}
            className="header-solid h-full"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              split={false}
              className="conversations-list"
              renderItem={(item) => (
                <List.Item actions={[<Button type="link">REPLY</Button>]}>
                  <List.Item.Meta
                    avatar={<Avatar shape="square" size={48} src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col> */}
      </Row>
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="All Tournaments"
        // extra={
        //   <>
        //     <Radio.Group onChange={onChange} defaultValue="all">
        //       <Radio.Button value="all">All</Radio.Button>
        //       <Radio.Button value="online">ONLINE</Radio.Button>
        //       <Radio.Button value="store">STORES</Radio.Button>
        //     </Radio.Group>
        //   </>
        // }
      >
        <div className="ant-list-box table-responsive">
          <Table
            columns={columns}
            dataSource={dataproject}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            className="ant-border-space"
          />
          {/* <table className="width-100">
            <thead>
              <tr>
                <th>NAME</th>
                <th>LEVEL</th>
                <th>DATE</th>
                <th>RESULT</th>
              </tr>
            </thead>
            <tbody>
              {list.map((d, index) => (
                <tr key={index}>
                  <td>
                    <h6>
                      <img src={d.img} alt="" className="avatar-sm mr-10" /> {d.Title}
                    </h6>
                  </td>
                  <td>{d.level}</td>
                  <td>
                    <span className="text-xs font-weight-bold">{d.date} </span>
                  </td>
                  <td>
                    <div className="percent-progress">{d.result}</div>
                  </td>
                  <td>
                    <button>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </Card>
    </>
  );
}

export default Profile;