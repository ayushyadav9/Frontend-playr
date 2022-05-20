import { Button, Form, Input, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
const Buffer = require('buffer/').Buffer
const { create } = require('ipfs-http-client');
const ipfs = create({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

const Documents = ({ formData, setformData, handelStatus }) => {
  const [buffer, setbuffer] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function getHash() {    
    try {
        const result = [];
        for(let i=0;i<3;i++){
          result[i] = await ipfs.add(Buffer.from(buffer[i]));
        }
        setformData({
          ...formData,
          birthCertificateIPFS: result[0].path,
          aadharIPFS: result[1].path,
          profilePhotoIPFS: result[2].path
        });
        setisLoading(false);
        handelStatus(2);
    } catch(e) {
        console.log(e)
        setisLoading(false);
        return
    }
}

  const handelNext = () => {

    if (buffer[0] && buffer[1] && buffer[2]) {
      setisLoading(true);
      getHash();
    } else {
      message.error("Please choose Documents");
    }
  };

  const captureFile = (e, i) => {
    const file = e.target.files[0];
    //console.log(file);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      let buf = buffer;
      //console.log(e, i);
      buf[i] = Buffer(reader.result);
      setbuffer(buf);
    };
  };

  return (
    <>
      <Form layout="vertical" style={{ margin: "50px auto", width: "30%" }}>
        <Form.Item label="Birth Cerificate">
          <Input
            type="file"
            suffix={<UploadOutlined />}
            required
            onChange={(e) => captureFile(e, 0)}
          />
        </Form.Item>
        <Form.Item label="Aadhar Card">
          <Input
            type="file"
            suffix={<UploadOutlined />}
            required
            onChange={(e) => captureFile(e, 1)}
          />
        </Form.Item>
        <Form.Item label="Photo">
          <Input
            type="file"
            suffix={<UploadOutlined />}
            required
            onChange={(e) => captureFile(e, 2)}
          />
        </Form.Item>
      </Form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="ghoast"
          shape="round"
          style={{ margin: "0 10px" }}
          onClick={() => handelStatus(0)}
        >
          Back
        </Button>
        <Button
          type="primary"
          shape="round"
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

export default Documents;