export default function Downloader() {
  return (
    <a
      href="new-cv.pdf"
      download={"cv"}
      className="downloader"
      style={{ textDecoration: "none" }}
    >
      Download My CV
    </a>
  );
}
