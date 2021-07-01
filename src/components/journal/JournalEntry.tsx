import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://celebpie.com/wp-content/uploads/2020/11/5e78fbd4d16e903eeb44b65c31631f.png)",
        }}
      ></div>
      <div className="journal__entry-body">
        <div className="">
          <div className="journal__entry-title">Un nuevo dia</div>
          <div className="journal__entry-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="journal__entry-date">
          <span>Monday</span>
          <h4>28</h4>
        </div>
      </div>
    </div>
  );
};
