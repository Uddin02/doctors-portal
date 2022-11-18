import React from "react";
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Treatment = () => {
  return (
    <div className="hero my-20 flex justify-center">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={treatment}
          className="max-w-full lg:max-w-md rounded-lg shadow-2xl lg:ml-14"
          alt=""
        />
        <div className="lg:ml-14">
          <h1 className="text-xl lg:text-5xl font-bold lg:w-9/12">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-8 text-justify lg:w-2/3">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton className="btn btn-primary">Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
