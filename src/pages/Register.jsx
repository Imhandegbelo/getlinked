import React, { lazy } from "react";
import designer from "../assets/images/3d-designer.png";
import SuccessComponent from "../components/SuccessComponent";

const Register = () => {
  function Input({ placeholder, label, name }) {
    return (
      <div className="flex flex-col gap-2 py-2 w-full">
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
        <input
          required
          type="text"
          name={name}
          className="text-sm p-4 w-1/2 border border-white rounded w-full bg-transparent"
          placeholder={placeholder}
        />
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="flex max-w-[1440px] px-20 py-10 mx-auto">
      <div className="w-1/2 flex items-center">
        <img src={designer} alt="A designer sipping coffea" className="" />
      </div>
      <div className="flex flex-col gap-6 p-10 w-1/2 bg-slate-800/30 rounded-lg text-white shadow-md">
        <h3 className="text-[#D434FE] text-semibold text-[2rem]">Register</h3>
        <p className="text-sm">Be part of this movement!</p>
        <p className="text-2xl">CREATE YOUR ACCOUNT</p>
        <form action="" method="get" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <Input
              placeholder={"Enter the name of your group"}
              label={"Team's Name"}
            />
            <Input placeholder={"Enter your phone number"} label={"Phone"} />
          </div>
          <div className="flex gap-2">
            <Input placeholder={"Enter your email address"} label={"Email"} />
            <Input
              placeholder={"What is your group project topic"}
              label={"Project Topic"}
            />
          </div>
          <div className="flex gap-2 my-2">
            <div className="w-full">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                className="w-full bg-transparent rounded p-4 text-sm border border-white"
              >
                <option value="" className="bg-indigo-950">
                  Select your category
                </option>
                <option value="category1" className="bg-indigo-950">
                  Category 1
                </option>
                <option value="category2" className="bg-indigo-950">
                  Category 2
                </option>
                <option value="category3" className="bg-indigo-950">
                  Category 3
                </option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="category">Group Size</label>
              <select
                name="size"
                className="w-full bg-transparent rounded p-4 text-sm border border-white"
              >
                <option value="" className="bg-indigo-950">
                  Select size
                </option>
                <option value="size1" className="bg-indigo-950">
                  Size 1
                </option>
                <option value="size2" className="bg-indigo-950">
                  Size 2
                </option>
                <option value="size3" className="bg-indigo-950">
                  Size 3
                </option>
              </select>
            </div>
          </div>
          <small className="text-xs text-[#FF26B9] italic">
            Please review your registration details before submitting
          </small>
          <div className="flex gap-4 pb-6 align-items-center">
            <input type="checkbox" name="consent" className="" />
            <small className="">
              I agreed with the event terms and conditions and privacy policy
            </small>
          </div>
          <div className="p-px rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9]">
            <div className="rounded bg-slate-800">
              <button
                onClick={console.log("clicked")}
                className={`w-full py-3 px-4 transition transition-all font-bold bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9] hover:bg-none`}
              >
                Register Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
