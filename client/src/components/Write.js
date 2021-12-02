import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      <div className="write_content">
        <div className="write_image">
          {!file ? (
            <img
              src="https://www.capernaum.rs/wp-content/themes/consultix/images/no-image-found-360x260.png"
              alt=""
            />
          ) : (
            file && <img src={URL.createObjectURL(file)} alt="" />
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="write_events">
            <div className="write_content_title">
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-image"></i>{" "}
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                type="text"
              />
            </div>
            <div className="write_content_story">
              <textarea
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="write_button">
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
