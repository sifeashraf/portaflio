import React from "react";

export default function Downloader() {
  return (
    <a
      href="new-cv.pdf"
      download={"cv"}
      className="downloader"
      style={{ textDecoration: "none", color: "white" }}
    >
      Download cv
    </a>
  );
}
