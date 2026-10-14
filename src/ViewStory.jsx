import React, { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";

function ViewStory() {
  const { id , tot} = useParams();

  const [story, setStory] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
  fetch("/db.json")
    .then((response) => response.json())
    .then((data) => {
      const selectedStory = data.ViewStory.find(
        (item) => Number(item.id) === Number(id)
      );

      setStory(selectedStory || null);
    })
    .catch((error) => console.log(error));
}, [id]);

  if(id > tot || id <= 0) {
    navigate("/")
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      {story ? (
        <div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <img
              src={story.profileImage}
              alt={story.username}
              className="rounded-circle"
              width="40"
              height="40"
            />
            <span>{story.username}</span>
            <small className="text-secondary">{story.time}</small>
          </div>
          <Link to={`/story/${Number(id) - 1}/${tot}`}><svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28 "
            fill="currentColor"
            class="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
          </Link>
          <img
            src={story.storyImage}
            alt="Story"
            style={{
              width: "500px",
              height: "800px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Link to={`/story/${Number(id) + 1}/${tot}`}><svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewStory;
