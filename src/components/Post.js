import React from "react";
import PostComponent from './PostComponent';
import image1 from "../png/Anakin.jpg";
import image2 from "../png/Ray.jpg";




function Post() {
    const photos = [image1];
    const images =[image2];
    const posts = [
           {
                id: '001',
                author:
                  {
                    name: "Anakin Skywalker",
                    photo: photos[0],
                    nickname: "@dart_vader"
                  },
                content: "WTF? Who is Ray? Why she is Skywalker? Luke...?", 
                image: images[0],
                date: "11 лют."
              },
        
    ]
    return (
    <div className='container-twitter'>
    {posts.map(post => <PostComponent data={post} key={post.id}></PostComponent>)}
</div>
  
);
}

export default Post;
  

