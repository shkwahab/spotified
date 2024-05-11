import React from "react";
import Person from "../../assets/img/Person.svg";
import Verified from "../../assets/icons/Verified.svg";
import Edit from "../../assets/icons/Edit.svg";
import Popup from "../../components/Popup.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Profile = () => {
  const [name, setName] = useState("Abdul Hadi");
  const [email, setEmail] = useState("emailaddress@gmail.com");
  const [pass, setPass] = useState("xxx xxxxxxx");
  const [showPass, setShowPass] = useState(true);
  const [phone, setPhone] = useState("+971 xxx xxxxx21");
  const [temp, setTemp] = useState("");
  const [current, setCurrent] = useState(0);
  const [verify, setVerify] = useState("+971 xxx xxxxx21");

  const onNameSave = () => {
    if (temp !== "") {
      setName(temp);
      setTemp("");
      setCurrent(0);
    }
  };
  const onEmailSave = () => {
    if (temp !== "") {
      setEmail(temp);
      setTemp("");
      setCurrent(0);
    }
  };
  const onVerifySave = () => {
    if (temp !== "") {
      setVerify(temp);
      setTemp("");
      setCurrent(0);
    }
  };
  const onPhoneSave = () => {
    if (temp !== "") {
      setPhone(temp);
      setTemp("");
      setCurrent(0);
    }
  };
  const onPassSave = () => {
    if (temp !== "") {
      setPass(temp);
      setTemp("");
      setCurrent(0);
    }
  };
  const onCancel = () => {
    setTemp("");
    setCurrent(0);
  };
  return (
    <div className="bg-[#FAFBFC] lg:w-[calc(100vw - 345px)] lg:ml-[345px] flex items-center justify-center font-sans">
      <div className="flex flex-col items-center bg-white w-[95%] min-h-[882px] mx-auto max-w-full py-12 my-10 rounded-2xl gap-5 md:gap-10">
        <div className="relative">
          <div className="min-w-[100px] min-h-[100px] rounded-full overflow-hidden bg-center object-cover ">
            <img src={Person} alt="" />
          </div>
          <div className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center absolute top-14 -right-2">
            <img src={Edit} alt="" className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col w-[90%] md:w-[80%] ">
          <hr />
          <div className="flex py-5">
            <h1 className="text-base md:text-2xl font-extrabold w-[150px] md-1000:w-[300px] md-1200:w-[500px]">
              Name
            </h1>
            <div className="flex justify-between items-center w-full px-3">
              <h1 className="text-base md:text-2xl font-500 text-[#202020]">
                {name}
              </h1>
              <img
                src={Edit}
                alt=""
                className="cursor-pointer"
                onClick={() => setCurrent(1)}
              />
              {current === 1 && (
                <Popup setTrigger={setCurrent}>
                  <h1 className="text-xl font-bold">Edit Name:</h1>
                  <input
                    type="text"
                    className="border p-2 w-[80%]"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                  />
                  <div className="flex gap-5">
                    <button
                      className="border-2 border-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md"
                      onClick={onCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md text-white"
                      onClick={onNameSave}
                    >
                      Save
                    </button>
                  </div>
                </Popup>
              )}
            </div>
          </div>
          <hr />
          <div className="flex py-5">
            <h1 className="text-base md:text-2xl font-extrabold w-[150px] md-1000:w-[300px] md-1200:w-[500px] py-2">
              Security
            </h1>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full p-3 py-2">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[14px] md:text-xl text-[#202020] opacity-60 font-500 ">
                    Email Address
                  </h1>
                  <div className="flex gap-1 md:gap-2">
                    <h1 className="text-[14px] md:text-2xl text-[#202020] font-500">
                      {email}
                    </h1>
                    <img src={Verified} alt="" />
                  </div>
                </div>
                <img
                  src={Edit}
                  alt=""
                  className="cursor-pointer self-start"
                  onClick={() => setCurrent(2)}
                />
                {current === 2 && (
                  <Popup setTrigger={setCurrent}>
                    <h1 className="text-xl font-bold">Edit Email:</h1>
                    <input
                      type="email"
                      className="border p-2 w-[80%]"
                      value={temp}
                      onChange={(e) => setTemp(e.target.value)}
                    />
                    <div className="flex gap-5">
                      <button
                        className="border-2 border-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md"
                        onClick={onCancel}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md text-white"
                        onClick={onEmailSave}
                      >
                        Save
                      </button>
                    </div>
                  </Popup>
                )}
              </div>
              <hr />
              <div className="flex justify-between items-center w-full p-3 py-5">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[14px] md:text-xl text-[#202020] opacity-60 font-500 ">
                    Phone Number
                  </h1>
                  <div className="flex gap-2">
                    <h1 className="text-[14px] md:text-2xl text-[#202020] font-500">
                      {phone}
                    </h1>
                    <img src={Verified} alt="" />
                  </div>
                </div>
                <img
                  src={Edit}
                  alt=""
                  className="cursor-pointer self-start"
                  onClick={() => setCurrent(3)}
                />
                {current === 3 && (
                  <Popup setTrigger={setCurrent}>
                    <h1 className="text-xl font-bold">Edit Phone Number:</h1>
                    <input
                      type="text"
                      maxLength={15}
                      className="border p-2 w-[80%]"
                      value={temp}
                      onChange={(e) => setTemp(e.target.value)}
                    />
                    <div className="flex gap-5">
                      <button
                        className="border-2 border-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md"
                        onClick={onCancel}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md text-white"
                        onClick={onPhoneSave}
                      >
                        Save
                      </button>
                    </div>
                  </Popup>
                )}
              </div>
              <div className="flex justify-between items-center w-full p-3 py-2">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[14px] md:text-xl text-[#202020] opacity-60 font-500 ">
                    Password
                  </h1>
                  <div className="flex gap-2">
                    <h1 className="text-[14px] md:text-2xl text-[#202020] font-500">
                      {pass}
                    </h1>
                    <img src={Verified} alt="" />
                  </div>
                </div>
                <img
                  src={Edit}
                  alt=""
                  className="cursor-pointer self-start"
                  onClick={() => setCurrent(4)}
                />
                {current === 4 && (
                  <Popup setTrigger={setCurrent}>
                    <h1 className="text-xl font-bold">Edit Password:</h1>
                    <div className="border p-2 w-[80%] flex items-center">
                      <input
                        type={showPass ? "password" : "text"}
                        value={temp}
                        className="flex-1 md:w-[300px] outline-none"
                        onChange={(e) => setTemp(e.target.value)}
                      />
                      {showPass ? (
                        <FaEyeSlash onClick={() => setShowPass(!showPass)} />
                      ) : (
                        <FaEye onClick={() => setShowPass(!showPass)} />
                      )}
                    </div>
                    <div className="flex gap-5">
                      <button
                        className="border-2 border-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md"
                        onClick={onCancel}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md text-white"
                        onClick={onPassSave}
                      >
                        Save
                      </button>
                    </div>
                  </Popup>
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="flex py-5">
            <h1 className="text-base md:text-2xl font-extrabold w-[150px] md-1000:w-[300px] md-1200:w-[500px] py-2">
              Two Step Verification
            </h1>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full p-3 py-2">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[14px] md:text-xl text-[#202020] opacity-60 font-500 ">
                    Two Step Verification
                  </h1>
                  <div className="flex gap-2">
                    <h1 className="text-[14px] md:text-2xl text-[#202020] font-500">
                      {verify}
                    </h1>
                    <img src={Verified} alt="" />
                  </div>
                </div>
                <img
                  src={Edit}
                  alt=""
                  className="cursor-pointer self-start"
                  onClick={() => setCurrent(5)}
                />
                {current === 5 && (
                  <Popup setTrigger={setCurrent}>
                    <h1 className="text-xl font-bold">
                      Edit Verification Number:
                    </h1>
                    <input
                      type="text"
                      maxLength={15}
                      className="border p-2 w-[80%]"
                      value={temp}
                      onChange={(e) => setTemp(e.target.value)}
                    />
                    <div className="flex gap-5">
                      <button
                        className="border-2 border-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md"
                        onClick={onCancel}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md text-white"
                        onClick={onVerifySave}
                      >
                        Save
                      </button>
                    </div>
                  </Popup>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
