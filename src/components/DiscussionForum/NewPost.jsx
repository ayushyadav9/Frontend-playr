import React, { useState } from 'react'
import { Input } from 'antd';
import { NotificationTwoTone } from '@ant-design/icons'
const { TextArea } = Input;

const users = ['Sam', 'Jimmy', 'Sushil', 'Ayush', 'Chirag'];

const NewPost = ({ addPost }) => {

    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    const handelInputChange = (i, e) => {
        if (i === 1) setTitle(e.target.value);
        else setDesc(e.target.value);
    }

    const handelChanges = (e) => {

        e.preventDefault();

        let user = users[Math.floor(Math.random() * 5)];
        let newPost = {
            postedByUser: user,
            timeStamp: Date.now(),
            postId: user + Math.floor(Math.random() * 1000),
            title: title,
            content: desc,
            voteCount: 0,
            comments: []
        }
        addPost(newPost);
        setDesc('');
        setTitle('');
    }

    return (
        <>
            <form  className="jumbotron" onSubmit={handelChanges}>
                <>
                    <Input style={{ width: '80%' }} showCount maxLength={30} placeholder="Add a Title" onChange={(e) => handelInputChange(1, e)} value={title} required autoComplete="off" />
                    <NotificationTwoTone style={{ marginLeft:'20px' ,fontSize: '60px' }} onClick={handelChanges}/>
                    <br />
                    <br />
                    <TextArea showCount maxLength={100} placeholder="Compose a discussion" onChange={(e) => handelInputChange(2, e)} value={desc} required autoComplete="off" />
                </>
                {/* <input className="form-control" name="mainContent" placeholder="Add a Title" onChange={(e)=>handelInputChange(1,e)} value={title} required autoComplete="off" />
                <NotificationTwoTone style={{ fontSize: '50px'}} />
                <input className="form-control" name="mainContent" placeholder="Compose a discussion" onChange={(e)=>handelInputChange(2,e)} value={desc} required autoComplete="off" /> */}
            </form>
        </>
    )
}

export default NewPost