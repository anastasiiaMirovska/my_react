import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IPostModel} from "../../models/IPostModel";
import {joiResolver} from "@hookform/resolvers/joi";
import FormValidator from "../../validators/form.validators";
import {IFormModel} from "../../models/IFormModel";
import {postService} from "../../services/api.service";


const PostComponent = () => {
    const{
        handleSubmit,
        register,
        formState:{errors, isValid}
    } = useForm<IFormModel>({mode:"all", resolver: joiResolver(FormValidator)});


    const [post, setPost] = useState<IPostModel|null>(null)

    const customHandler=(post:IFormModel )=>{
    postService.savePost(post).then(value=> setPost(value.data))
    }
    return (
        <div>
            <h3>Create a post</h3>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>User ID</label>
                <input type="number" {...register("userId")}/>
                {
                    errors.userId && <span>{errors.userId.message}</span>
                }
                <br/>
                <label>Post title</label>
                <input type="text"{...register("title")}/>
                {
                    errors.title && <span>{errors.title.message}</span>
                }
                <br/>
                <label>Post body</label>
                <input type="text"{...register("body")}/>
                {
                    errors.body && <span>{errors.body.message}</span>
                }
                <br/>
                <button disabled={!isValid}>Submit</button>
            </form>
            {post && <h2>saved post with title {post.title}</h2>}
        </div>
    );
};

export default PostComponent;