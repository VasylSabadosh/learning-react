import React from 'react';
import './PostItem.css';
import FormButton from '../Form/FormButton';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='postContent'>
                <strong>{props.number}.{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btn'>
                <FormButton onClick={() => props.remove(props.post)}>Delete</FormButton>
            </div>

        </div>
    );
};

export default PostItem;