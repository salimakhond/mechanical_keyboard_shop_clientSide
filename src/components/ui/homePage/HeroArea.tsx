const HeroArea = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://matrixkeyboards.com/cdn/shop/files/Clix_Pudding_Keyboard_renderf.png?v=1715280455)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content !max-w-3xl text-neutral-content text-center">
          <div className="max-w-xl rounded-lg">
            <h1 className="mb-5 text-5xl font-bold">
              "Welcome To Mechanical Keyboard Shope"
            </h1>
            <p className="mb-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              egestas lobortis eleifend. Fusce dictum, tellus quis tristique
              fringilla, velit magna pretium dolor, in ornare tellus ligula a
              libero. Morbi nec sapien ac diam vestibulum euismod sit amet eu
              augue. Etiam quis pellentesque lectus, at bibendum nisi.
              Vestibulum eleifend risus ligula."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
