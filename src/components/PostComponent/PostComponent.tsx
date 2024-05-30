import React from 'react';
import {useForm} from "react-hook-form";
import {IPostModel} from "../../models/IPostModel";
import {joiResolver} from "@hookform/resolvers/joi";
import PostValidator from "../../validators/post.validators";

const PostComponent = () => {
    const{
        handleSubmit,
        register,
        formState:{errors, isValid}
    } = useForm<IPostModel>({mode:"all", resolver: joiResolver(PostValidator)});

    const customHandler=(formDataProps: IPostModel)=>{
        console.log("hello");
    }
    return (
        <div>
            <h3>Create a post</h3>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>User ID</label>
                <input type="number" {...register("userid")}/>
                {
                    errors.userid && <span>{errors.userid.message}</span>
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
        </div>
    );
};

export default PostComponent;