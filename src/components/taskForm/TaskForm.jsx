import { useState } from "react";
import "./../../index.css";
import style from "./taskInput.module.css";

function TaskForm({ addTaks }) {
  const [titre, setTitre] = useState("");

  function recupererTitre(e) {
    setTitre(e.target.value);
  }

  function transfererTitre(e) {
    e.preventDefault();
    if (titre.trim()) {
      addTaks(titre);
      setTitre("");
    }
  }

  return (
    <div className={`text-left p-[20px] ${style.blocForm}`}>
      <h2 className="text-xl font-semibold mb-[10px]">
        🎯 Ajoute ta prochaine tache
      </h2>
      <form onSubmit={transfererTitre} className="flex gap-5 justify-between">
        <input
          className="px-[15px] w-full  bg-transparent border-[1px] border-[#514056] rounded-[8px] outline-none  h-[40px]"
          onChange={recupererTitre}
          type="text"
          value={titre}
          name=""
          id=""
          placeholder="Indiquez un titre de tache explicite."
        />
        <button
          className="bg-[#2e3c66]  text-[#7696f4] px-[15px] h-[40px] py-[5px] rounded-[8px] font-bold"
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
