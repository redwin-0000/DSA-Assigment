import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [clock, setClock] = useState("");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const f = Intl.DateTimeFormat("en-in", {
        hour12: true,
        timeStyle: "medium",
      });
      setClock(f.format(date));
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <div
        className="bg-[#3c329a] h-[400px] w-[900px]
      flex items-center justify-center flex-col gap-10
      "
      >
        <h1 className="text-[#1e194d] text-9xl tracking-widest ">PWSKILLS</h1>
        <div className="bg-[#6758f6] h-[100px] w-[600px] self-center text-white text-center text-8xl tracking-widest">
          {clock.replace("pm", "")}
        </div>
      </div>
    </div>
  );
};

export default App;
