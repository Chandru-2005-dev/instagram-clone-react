import React, { useEffect, useState } from "react";

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggest, setSuggest] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggest(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-5 ms-10 mt-12 mb-10 profile " style={{ width: "350px" }}>
      {profile ? (
        <div className="d-flex align-items-center mb-4">
          <img
            className="rounded-circle"
            src={profile.profilePic}
            alt="Profile"
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
          />

          <h6 className="ms-3 mb-0">{profile.username}</h6>

          <b
            className="ms-auto"
            style={{ color: "#23bde8", fontSize: "13px", cursor: "pointer" }}
          >
            Follow
          </b>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
        <p className="text-secondary mb-0">Suggest for you</p>
        <b style={{ fontSize: "13px", cursor: "pointer" }}>See All</b>
      </div>

      {suggest.length > 0 ? (
        <div className="mt-5">
          {suggest.map((suggestion) => (
            <div key={suggestion.id} className="d-flex align-items-center mb-3 mt-4">
              <img
                className="rounded-circle"
                src={suggestion.profilePic}
                alt={suggestion.username}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />

              <div className="ms-3">
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  {suggestion.username}
                </p>
                <small className="text-secondary">Suggested for you</small>
              </div>

              <b
                className="ms-auto"
                style={{
                  color: "#23bde8",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                Follow
              </b>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Suggestion;
