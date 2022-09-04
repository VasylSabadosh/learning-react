import React from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
import { useState } from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }
    return (
        <form>
            <FormInput value={post.title} type='text' placeholder='назва поста' onChange={e => setPost({ ...post, title: e.target.value })} />
            <FormInput value={post.body} type='text' placeholder='опис поста' onChange={e => setPost({ ...post, body: e.target.value })} />
            <FormButton onClick={addNewPost}>new post</FormButton>
        </form>
    );
};

export default PostForm;