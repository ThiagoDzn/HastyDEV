import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import PostContainer from "../../styles/post/Post.styles";
interface PostType {
  profilePic: string;
  userId: string;
  name: string;
  desc: string;
  img: string;
}

const Post = ({ post }: { post: PostType }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  // TEMPORARY
  const liked = false;

  return (
    <PostContainer>
      <div className="post">
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img src={post.profilePic} alt="" />
              <div className="details">
                <Link
                  to={`/profile/${post.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="name">{post.name}</span>
                </Link>
                <span className="date">2 Horas Atrás</span>
              </div>
            </div>
          </div>
          <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
          </div>
          <div className="info">
            <div className="item">
              {liked ? <FaHeart /> : <FaRegHeart />}1 Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <FaComment />2 Comentários
            </div>
            <div className="item">
              <FaShare />
              Compartilhe
            </div>
          </div>
          {commentOpen && <Comments />}
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
