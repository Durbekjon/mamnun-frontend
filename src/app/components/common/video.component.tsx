import "./index.css";
export default function Video() {
  const videoUrl = "/videos/video.mp4";
  return (
    <section>
      <video src={videoUrl} autoPlay muted></video>
    </section>
  );
}
