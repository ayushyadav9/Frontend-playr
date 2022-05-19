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
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Meta } = Card;

function Photos() {
  const inputArray = [
    {
      src: "https://cdn3.iconfinder.com/data/icons/instagram-18/512/199_Instagram_Plus_Sets_Upload-512.png",
      alt: "example",
      title: "Upload",
      description: "Please upload a photo or video",
    },
    {
      src: "https://joeschmoe.io/api/v1/random",
      alt: "example",
      title: "Title",
      description: "Description",
    },
    {
      src: "https://joeschmoe.io/api/v1/random",
      alt: "example",
      title: "Title",
      description: "Description",
    },
    {
      src: "https://joeschmoe.io/api/v1/random",
      alt: "example",
      title: "Title",
      description: "Description",
    },
    {
      src: "https://joeschmoe.io/api/v1/random",
      alt: "example",
      title: "Title",
      description: "Description",
    },
    {
      src: "https://joeschmoe.io/api/v1/random",
      alt: "example",
      title: "Title",
      description: "Description",
    },
  ];

  const perChunk = 3;
  var mediaList = (array, chunk_size) =>
    Array(Math.ceil(array.length / chunk_size))
      .fill()
      .map((_, index) => index * chunk_size)
      .map((begin) => array.slice(begin, begin + chunk_size));

  return (
    <>
      <Card bordered={false} className="criclebox h-full">
        {mediaList(inputArray, perChunk).map((mediaRow) => (
          <Row>
            {mediaRow.map((phot) => (
              <Col span={8}>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt="example" src={phot.src} />}
                  // actions={[
                  //   <SettingOutlined key="setting" />,
                  //   <EditOutlined key="edit" />,
                  //   <EllipsisOutlined key="ellipsis" />,
                  // ]}
                >
                  <Meta title={phot.title} description={phot.description} />
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Card>
    </>
  );
}

export default Photos;
