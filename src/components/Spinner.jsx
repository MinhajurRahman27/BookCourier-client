import React from "react";

const Spinner = () => {
  return (
    <div className=" h-screen items-center justify-center">
      <div className=" h-screen  mx-auto flex items-center justify-center">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    </div>
  );
};

export default Spinner;
