"use client";
import Reqct, { useState } from "react";

const RegisterForm = () => {

  const [name, setName] = useState("")
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");

  function getName(name) {
    setName(name.target.value);
  }

  function getOne(name) {
    setOne(name.target.value);
  }

  function getTwo(name) {
    setTwo(name.target.value);
  }

  function getThree(name) {
    setThree(name.target.value);
  }

  function getFour(name) {
    setFour(name.target.value);
  }

  async function submitFunc(e) {
    let isValid = true;

    e.preventDefault();

    if (name.trim() === "") {
      isValid = false;
      alert("Team name can't be empty!");
    } else {
      isValid = true;
    }

    if (one.trim() === "") {
      isValid = false;
      alert("First member name can't be empty!");
    } else {
      isValid = true;
    }

    if (two.trim() === "") {
      isValid = false;
      alert("Second member name can't be empty!");
    } else {
      isValid = true;
    }

    if (three.trim() === "") {
      isValid = false;
      alert("Third member name can't be empty!");
    } else {
      isValid = true;
    }

    if (four.trim() === "") {
      isValid = false;
      alert("Fourth member name can't be empty!");
    } else {
      isValid = true;
    }

    if (isValid) {
      
      const team = {
        name,
        members: [one, two, three, four]
      };

      try {
        let res = await fetch("/api/login", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(team)
        });

        if (res.ok) {
          alert("Registation successful.");
          setName("");
          setOne("");
          setTwo("");
          setThree("");
          setFour("");

        } else {
          alert(res.message);
        }

      } catch (err) {
        alert("Registation failed!");
      }
    }

  }
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <form onSubmit={submitFunc} className="w-[80%] p-[5%] bg-[#222222] flex flex-col justify-evenly items-center">
        <h2 className="uppercase font-bold text-[1.2rem] md:text-[2rem] mb-[3%]">Register</h2>
        <p className="font-thik mb-[5%] text-[0.8rem]">Your team name must be unique.</p>
        <input type="text" name="title" value={name} onChange={getName} placeholder="Enter your team name" className="border-[0.1em] border-[#000] outline-none py-[2%] px-[3%] bg-[#1a1a1a] mb-[3%]" />
        <input type="text" name="member" value={one} onChange={getOne} placeholder="First member" className="border-[0.1em] border-[#000] outline-none py-[2%] px-[3%] bg-[#1a1a1a] mb-[3%]" />
        <input type="text" name="member" value={two} onChange={getTwo} placeholder="Second member" className="border-[0.1em] border-[#000] outline-none py-[2%] px-[3%] bg-[#1a1a1a] mb-[3%]" />
        <input type="text" name="member" value={three} onChange={getThree} placeholder="Third member" className="border-[0.1em] border-[#000] outline-none py-[2%] px-[3%] bg-[#1a1a1a] mb-[3%]" />
        <input type="text" name="member" value={four} onChange={getFour} placeholder="Fourth member" className="border-[0.1em] border-[#000] outline-none py-[2%] px-[3%] bg-[#1a1a1a] mb-[4%]" />
        <button type="submit" className="bg-[#515151] uppercase px-[20%] py-[2%] font-semibold">Join</button>
      </form>
    </div>
  )
}

export default RegisterForm;
