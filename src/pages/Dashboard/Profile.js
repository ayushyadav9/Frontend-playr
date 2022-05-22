import { useState } from "react";
import ava1 from "../../assets/images/logo-shopify.svg";
import ava2 from "../../assets/images/logo-atlassian.svg";
import ava3 from "../../assets/images/logo-slack.svg";
import ava4 from "../../assets/images/logo-spotify.svg";
import ava5 from "../../assets/images/logo-jira.svg";
import { QRCodeSVG } from "qrcode.react";
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
  Modal,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";

import TournamentBracket from "../../components/TournamentBrackets/Brackets";
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
import "../../assets/styles/main.css";
import "../../assets/styles/responsive.css";
const { Title, Text } = Typography;

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
      Title: "Subroto cup",
      level: "District",
      date: "03/05/2020",
      result: "Semi-Finals",
    },
    {
      img: ava5,
      Title: "TG Football League 5",
      level: "District",
      date: "05/07/2020",
      result: "Winners",
    },
    {
      img: ava1,
      Title: "Santosh Trophy",
      level: "National",
      date: "12/09/2021",
      result: "Semi-Finals",
    },
    {
      img: ava2,
      Title: "IFA Shield Cup",
      level: "State",
      date: "29/11/2021",
      result: "Winners",
    },
    {
      img: ava3,
      Title: "Federation Football League 3",
      level: "District",
      date: "03/01/2022",
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
      render: () => {
        return (
          <>
            <Button type="primary" onClick={showModal}>
              Details
            </Button>
          </>
        );
      },
    },
  ];

  const dataproject = [
    {
      key: "1",
      name: <h6>Rajura Premier League</h6>,
      level: "District",
      date: <span className="text-xs font-weight-bold">03/01/2018</span>,
      result: "Semi-Finals",
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

  const [QRVisible, setQRVisible] = useState(false);
  const openQR = () => {
    setQRVisible(!QRVisible);
  };

  return (
    <>
      <div>
        <Modal
          title="Tournament Details"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
          centered
        >
          <TournamentBracket />
        </Modal>
        <Modal
          title="Scan Me"
          visible={QRVisible}
          onCancel={openQR}
          footer={[]}
          width={350}
        >
          <div style={{ marginLeft: 110 }}>
            <Avatar size={74} shape="round" src={profilavatar} />
            <p>Sarah Jacob</p>
            <p>Id: 292180</p>
          </div>
          <QRCodeSVG
            style={{ marginLeft: 25 }}
            size={250}
            value="http://localhost:3000/profile"
          />
          <br />
          <p style={{ marginLeft: 21 }}>Any one with this QR can view your Profile</p>
        </Modal>
      </div>

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
                  <p>
                    Footballer
                    <br />
                    National Level
                  </p>
                </div>
                <div className="avatar-info">
                  <QrcodeOutlined style={{ fontSize: "60px" }} onClick={openQR} />
                </div>
              </Avatar.Group>
            </Col>
            {/* <Col
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
            </Col> */}
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
            <Descriptions title="">
              <Descriptions.Item label="Team" span={3}>
                Deccan Tigers
              </Descriptions.Item>
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
      </Row>
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="All Tournaments"
      >
        <div className="ant-list-box table-responsive">
          <Table
            columns={columns}
            dataSource={dataproject}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            className="ant-border-space"
          />
        </div>
      </Card>
    </>
  );
}

export default Profile;
