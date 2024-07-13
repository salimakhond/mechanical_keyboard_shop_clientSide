const ProgressBar = () => {
  return (
    <div className="my-8 flex justify-center">
      <p className="mr-3">Loading </p>
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
    </div>
  );
};

export default ProgressBar;
