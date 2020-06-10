import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div>
      <div className="text-center">
        <input
          type="search"
          className="border-primary p-2 my-3"
          placeholder="Search item.."
        />{" "}
        <FontAwesomeIcon icon={faSearch} size="1x" />
      </div>
    </div>
  );
}
