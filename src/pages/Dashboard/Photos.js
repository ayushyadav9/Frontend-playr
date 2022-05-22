import { Row, Col, Card } from "antd";
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
// import { useState } from "react";
import "../../assets/styles/main.css";
import "../../assets/styles/responsive.css";
import fb1 from "../../assets/images/fb1.jpg";
import fb2 from "../../assets/images/fb2.jpg";
import fb3 from "../../assets/images/fb3.jpg";
import fb4 from "../../assets/images/fb4.jpg";
import fb5 from "../../assets/images/fb5.jpg";
const { Meta } = Card;

function Photos() {
  const inputArray = [
    {
      src: "./upload2.png",
      alt: "example",
      title: "Upload",
      description: "Please upload a photo or video",
    },
    {
      src: "./p2.jpg",
      alt: "example",
      title: "Title",
      description: "Description",
    },
    {
      src: "./p3.jpg",
      alt: "example",
      title: "Title",
      description: "Description",
    },
    {
      src: "./p4.jpg",
      alt: "example",
      title: "Title",
      description: "Description",
    },
    {
      src: "./p5.jpg",
      alt: "example",
      title: "Title",
      description: "Description",
    },
    {
      src: "./p6.jpg",
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
                  style={{ width: 300,height: 470 }}
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
