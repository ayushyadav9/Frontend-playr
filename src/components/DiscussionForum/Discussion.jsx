import React, { useState } from 'react';
import CardHeader from './CardHeader';
import ReplyPost from './ReplyPost';
import { MessageOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { List, Avatar, Space, Row, Col } from 'antd';

function Discussion(props) {

    const [showInput, setInput] = useState(false);

    const voteUp = (e) => {
        props.voteUpComment(e);
    }

    const downVote = (e) => {
        props.downVoteComment(e);
    }

    const addComment = (comment) => {
        props.addComment(comment);
        setInput(!showInput);
    }

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return (
        <div className="text-left card-div">
            <Row>
                <Col span={2}>
                    <div>
                        <div>
                            <img className="image-vote" src="https://static.thenounproject.com/png/341249-200.png" width="30px" onClick={props.voteUp} alt="Vote Up" />
                            <div style={{marginLeft:11}}>{props.data.voteCount}</div>
                            <img className="image-vote" src="https://static.thenounproject.com/png/341237-200.png" width="30px" alt="Down vote" onClick={props.downVote} />
                        </div>
                    </div>
                </Col>
                <Col span={22}>
                    <CardHeader postedByUser={props.data.postedByUser} timeStamp={props.data.timeStamp} />
                    <p className="content"> {props.data.content} </p>
                </Col>
            </Row>
            <List
                header={<b>Comments</b>}
                footer={<>
                    <Row>
                        <Col span = {3}><span className="cursor-pointer" onClick={() => setInput(!showInput)} ><MessageOutlined style={{ fontSize: '50 px', color: '#08c' }} /> <b>Reply</b></span></Col>
                        <Col span = {21}>{showInput ? <ReplyPost addComment={addComment} /> : null}</Col>
                    </Row>
                </>}
                itemLayout="horizontal"
                dataSource={props.data.comments}
                renderItem={(comment, key) => (
                    <List.Item
                        actions={[
                            <div onClick={() => voteUp(key)}><IconText icon={LikeOutlined} text={comment.upVoteCount} key="list-vertical-star-o" /></div>,
                            <div onClick={() => downVote(key)}><IconText icon={DislikeOutlined} text={comment.downVoteCount} key="list-vertical-like-o" /></div>
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<CardHeader postedByUser={comment.postedByUser} timeStamp={comment.timeStamp} />}
                            description={comment.content}
                        />
                    </List.Item>
                )}
            />


        </div>
    )
}

export default Discussion;