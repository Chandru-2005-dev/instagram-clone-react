import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stories() {
  const [stories, setStories] = useState([]);

  const navigate= useNavigate()
  let tot = 0;

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="stories d-flex justify-content-center gap-5">
      <div className="d-none">{tot = stories.length}</div>
      {stories.length > 0 ? (
        stories.map((storie) => (
          <div className="story-item text-center" key={storie.id} onClick={()=>{navigate(`/story/${storie.id}/${tot}`)}}>
            <div className="gradient-border">
              <img
                className="rounded-circle story"
                src={storie.profileImage}
                alt={storie.username}
              />
            </div>
            <p className="text-truncate mb-0" style={{ width: "65px" }}>
              {storie.username}
            </p>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Stories;
