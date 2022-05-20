import React, { useState } from 'react'
import Discussion from '../../components/DiscussionForum/Discussion'
import NewPost from '../../components/DiscussionForum/NewPost';
import { List, Avatar, Space, Row, Col, Button } from 'antd';
import { MessageOutlined, ShareAltOutlined, StarOutlined, InstagramOutlined, TwitterOutlined, EditOutlined,EditFilled } from '@ant-design/icons';
import { Modal, Card } from 'antd';
import CardHeader from '../../components/DiscussionForum/CardHeader';
import './Forum.css'

const topPosts = [ {
  postedByUser: 'Mario',
  timeStamp: Date.now(),
  postId: 'Mario69',
  title:  'What are the steps to be taken to bring the game Khokho into the olympics.',
  content: 'Test Desc',
  voteCount: 927,
  comments: []
},
{
  postedByUser: 'Jay',
  timeStamp: Date.now(),
  postId: 'Jay131',
  title: 'Future of Esports in India?',
  content: 'Test Desc',
  voteCount: 561,
  comments: []
}]

const dummyPosts = [
  {
    postedByUser: 'Mario',
    timeStamp: Date.now(),
    postId: 'Mario69',
    title: 'What are the steps to be taken to bring the game Khokho into the olympics.',
    content: 'Test Desc',
    voteCount: 1,
    comments: []
  },
  {
    postedByUser: 'Andrew',
    timeStamp: Date.now(),
    postId: 'Andrew220',
    title: 'HOW DIFFICULT IS IT TO BECOME A PROFESSIONAL FOOTBALLER?',
    content: 'Test Desc',
    voteCount: 1,
    comments: []
  }];

const Forum = () => {

  const [posts, setPosts] = useState(dummyPosts);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [modal, setModal] = useState({ post: "", key: 0 });

  const voteUp = (e) => {
    const newPostArray = [...posts];
    ++newPostArray[e].voteCount;
    setPosts(newPostArray);
  }

  const downVote = (e) => {
    const newPostArray = [...posts];
    --newPostArray[e].voteCount;
    setPosts(newPostArray);
  }

  const addPost = (newPost) => {
    const newPostArray = [...posts];
    newPostArray.push(newPost);
    console.log(newPost);
    setPosts(newPostArray);
    setVisible2(!visible2)
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {icon && React.createElement(icon)}
      {text}
    </Space>
  );

  const openModal1 = (item, key) => {
    setVisible1(true);
    setModal({ post: item, key: key });
  }

  const addComment = (comment) => {
    var newPostArray = [...posts];
    newPostArray[modal.key].comments.push(comment);
    console.log("After adding Comment  ", newPostArray);
    setPosts(newPostArray);
  }

  const voteUpComment = (key) => {
    var newPostArray = [...posts];
    ++newPostArray[modal.key].comments[key].upVoteCount;
    setPosts(newPostArray);
  }

  const downVoteComment = (key) => {
    var newPostArray = [...posts];
    --newPostArray[modal.key].comments[key].downVoteCount;
    setPosts(newPostArray);
  }

  return (
    <div className='forum'>
      
      <Card title={<><b>Trending Today</b><Button type="primary" shape="round" style={{marginLeft:620}} onClick={()=>setVisible2(true)}>{<b><EditFilled/>New Post</b>}</Button></>} style={{ width: "60%", margin: "50px auto" }} hoverable>
        
        <Modal
          footer={[]}
          title="Start a New Discussion"
          centered
          visible={visible2}
          onOk={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
          width={700}
        >
          <NewPost addPost={addPost}/>
        </Modal>
        <Modal
          footer={[]}
          title={modal.post.title}
          centered
          visible={visible1}
          onOk={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
          width={1000}
        >
          <Discussion data={modal.post} addComment={addComment} voteUp={() => voteUp(modal.key)} downVote={() => downVote(modal.key)} voteUpComment={voteUpComment} downVoteComment={downVoteComment} />
        </Modal>

        <List
          bordered={true}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={posts}

          renderItem={(item, key) => (

            <List.Item
              key={item.title}
              actions={[
                <div style={{ marginLeft: 60 }} onClick={() => openModal1(item, key)}><IconText icon={MessageOutlined} text={item.comments.length} key="list-vertical-message" /></div>,
                <div><IconText icon={ShareAltOutlined} text="69" key="list-vertical-star-o" /></div>,
                <div><IconText icon={StarOutlined} text="12" key="list-vertical-like-o" /></div>,
                <div><IconText icon={InstagramOutlined} key="list-vertical-like-o" /></div>,
                <div><IconText icon={TwitterOutlined} key="list-vertical-like-o" /></div>,
                <div><IconText text="Report" key="list-vertical-like-o" /></div>,
              ]}
            >
              <Row>
                <Col span={1}>
                  <img className="image-vote" src="https://static.thenounproject.com/png/341249-200.png" width="30px" onClick={() => voteUp(key)} alt="Vote Up" />
                  <div style={{ marginLeft: 11 }}>{item.voteCount}</div>
                  <img className="image-vote" src="https://static.thenounproject.com/png/341237-200.png" width="30px" alt="Down vote" onClick={() => downVote(key)} />
                </Col>
                <Col span={23}>
                  <List.Item.Meta
                    avatar={<Avatar src={'https://joeschmoe.io/api/v1/random'} />}
                    title={item.title}
                    description={<CardHeader postedByUser={item.postedByUser} timeStamp={item.timeStamp} />}
                  />
                  {item.content}
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </Card>



      
      <Card title={<><b>Top Posts</b></>} style={{ width: "30%", margin: "50px auto" }} hoverable>
      <List
          bordered={true}
          itemLayout="vertical"
          size="large"
          dataSource={topPosts}

          renderItem={(item, key) => (

            <List.Item
              key={item.title}
              actions={[
                <div style={{ marginLeft: 60 }} onClick={() => openModal1(item, key)}><IconText icon={MessageOutlined} text={item.comments.length} key="list-vertical-message" /></div>,
                <div><IconText icon={ShareAltOutlined} text="69" key="list-vertical-star-o" /></div>,
                <div><IconText icon={StarOutlined} text="12" key="list-vertical-like-o" /></div>,
                <div><IconText icon={InstagramOutlined} key="list-vertical-like-o" /></div>,
                <div><IconText icon={TwitterOutlined} key="list-vertical-like-o" /></div>,
                <div><IconText text="Report" key="list-vertical-like-o" /></div>,
              ]}
            >
              <Row>
                <Col span={1}>
                  <img className="image-vote" src="https://static.thenounproject.com/png/341249-200.png" width="30px" onClick={() => voteUp(key)} alt="Vote Up" />
                  <div style={{ marginLeft: -5 }}>{item.voteCount}</div>
                  <img className="image-vote" src="https://static.thenounproject.com/png/341237-200.png" width="30px" alt="Down vote" onClick={() => downVote(key)} />
                </Col>
                <Col span={23}>
                  <List.Item.Meta
                    avatar={<Avatar src={'https://joeschmoe.io/api/v1/random'} />}
                    title={item.title}
                    description={<CardHeader postedByUser={item.postedByUser} timeStamp={item.timeStamp} />}
                  />
                  {item.content}
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

export default Forum