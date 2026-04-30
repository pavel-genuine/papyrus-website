const Preloader = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <video
          className="loader-video"
          style={{ width: "100vw", height: "100vh" }}
          loop
          muted
          autoPlay
        >
          <source src="/assets/video/loader.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Preloader;
