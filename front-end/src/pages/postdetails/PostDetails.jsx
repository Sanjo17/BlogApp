import {  CommentSection } from "../../components/CommentSection";
import { Post } from "../../components/Post";



export const PostDetails = () => {
    
    return(
        <div className="postdetails mx-1 sm:mx-10 md:mx-12 lg:mx-16">
            <Post/>  
            <CommentSection/>      
            </div>
        
    );
}