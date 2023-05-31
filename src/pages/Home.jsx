import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Home({isLoggedIn}) {
  return (
    <div className="flex h-[calc(100vh-62px)] bg-[url('https://graph.org/file/10c6e451fa06865e17112.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="left flex flex-col gap-10 h-[100%] justify-center ml-20 font-mono">
        <div className="text-slate-700 text-5xl font-semibold">
          Welcome To SdTyping
        </div>
        <div className="text-slate-600 text-3xl font-medium">
          <Typewriter
            options={{
              strings: [
                "Type your way to success.",
                "Enhance skills for personal, professional growth.",
                "And ace government exams with ease!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {!isLoggedIn && <div className="btns">
          <Link to={"/login"}>
            <button className="bg-transparent px-[40px] py-[8px] text-slate-900 border-2 border-slate-900 rounded-md hover:bg-slate-600 hover:text-white mr-5">
              Login &gt;&gt;
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-transparent px-[40px] py-[8px] text-slate-900 border-2 border-slate-900 rounded-md hover:bg-slate-600 hover:text-white">
              SignUp &gt;&gt;
            </button>
          </Link>
        </div>}
        {isLoggedIn && <div className="btns">
          <Link to={"/english"}>
            <button className="bg-transparent px-[40px] py-[8px] text-slate-900 border-2 border-slate-900 rounded-md hover:bg-slate-600 hover:text-white mr-5">
              English Typing &gt;&gt;
            </button>
          </Link>
          <Link to={"/hindi"}>
            <button className="bg-transparent px-[40px] py-[8px] text-slate-900 border-2 border-slate-900 rounded-md hover:bg-slate-600 hover:text-white">
              Hindi Typing &gt;&gt; 
            </button>
          </Link>
        </div>}
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Home;
