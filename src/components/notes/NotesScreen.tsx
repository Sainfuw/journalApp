import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NotesScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name=""
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          name=""
          id=""
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fabstract-calendar-time-background-28797455.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
