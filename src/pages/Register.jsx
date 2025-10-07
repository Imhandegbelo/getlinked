import { useState } from "react";
import designer from "../assets/images/3d-designer.png";
import SuccessComponent from "../components/SuccessComponent";
import Input from "../components/Input";

const Register = () => {
  const [form, setForm] = useState({
    teamName: "",
    phone: "",
    email: "",
    topic: "",
    category: "",
    size: "",
    consent: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  function validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0123456789]+$/;
    if (!form.teamName.trim()) return false;
    if (!form.phone.trim() || !phoneRegex.test(form.phone)) return false;
    if (!form.email.trim() || !emailRegex.test(form.email)) return false;
    if (!form.topic.trim()) return false;
    if (!form.category) return false;
    if (!form.size) return false;
    if (!form.consent) return false;
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ ...form });
    if (validateForm()) {
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
      alert("Please fill all fields correctly and agree to the terms.");
    }
  }

  return (
    <div className="flex max-w-[1440px] px-6 md:px-12 lg:px-20 py-10 mx-auto">
      <div className="hidden md:flex w-full  items-center">
        <img src={designer} alt="A designer sipping coffea" className="" />
      </div>
      <div className="flex flex-col gap-6 p-10 w-full bg-slate-800/30 rounded-lg text-white shadow-md">
        <h3 className="text-[#D434FE] text-semibold text-[2rem]">Register</h3>
        <p className="text-sm">Be part of this movement!</p>
        <p className="text-2xl">CREATE YOUR ACCOUNT</p>
        {showSuccess && <SuccessComponent />}

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <Input
              placeholder="Enter the name of your group"
              label="Team's Name"
              id="teamName"
              value={form.teamName}
              onChange={(e) => setForm({ ...form, teamName: e.target.value })}
            />
            <Input
              placeholder="Enter your phone number"
              label="Phone"
              type="tel"
              id="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Enter your email address"
              label="Email"
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
              placeholder="What is your group project topic"
              label="Project Topic"
              id="topic"
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
            />
          </div>
          <div className="flex gap-2 my-2">
            <div className="w-full">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
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
                id="category"
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
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
            <input
              type="checkbox"
              id="agree"
              name="consent"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className=""
            />
            <label htmlFor="agree" className="">
              I agreed with the event terms and conditions and privacy policy
            </label>
          </div>
          <div className="p-px rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9]">
            <div className="rounded bg-slate-800">
              <button
                type="submit"
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
