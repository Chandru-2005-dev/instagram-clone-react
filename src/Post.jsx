import React, { useEffect, useState } from "react";

function Post() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setPost(data.posts))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="d-flex justify-content-center mt-3">
      {posts.length > 0 ? (
        <div className="mt-5 mb-5">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="d-flex my-5">
                <img
                  className="rounded-circle mx-3"
                  src={post.profileImage}
                ></img>
                <p className="mx-3">{post.username}</p>
                <b
                  className="text-primary ms-auto"
                  style={{ color: "#23bde8" }}
                >
                  Follow
                </b>
              </div>
              <img className="image" src={post.postImage} />
              <div className="d-flex gap-1 fs-4 mt-5 mx-3 icon">
                <i className="icon bi bi-heart"></i>
                <i className="icon bi bi-chat"> {post.comments}</i>
                <i className="icon bi bi-send"></i>
              </div>

              <b className="mx-3">{post.likes} Likes</b>
              <p className="mb-5 mx-3">{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Post;
