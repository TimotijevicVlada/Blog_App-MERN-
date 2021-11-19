import React from "react";

const Write = () => {
  return (
    <div className="write">
      <div className="write_content">
        <div className="write_image">
          <img src="https://wallpaperaccess.com/full/36293.jpg" alt="" />
        </div>
        <form>
          <div className="write_events">
            <div className="write_content_title">
              <span>
                <i className="writeIcon fas fa-plus"></i>
              </span>
              <input placeholder="Title" type="text" />
            </div>
            <div className="write_content_story">
              <textarea
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
              ></textarea>
            </div>
          </div>
          <div className="write_button">
            <button>Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
