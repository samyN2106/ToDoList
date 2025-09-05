import "./../../index.css";
import style from "./taskItem.module.css";
import { useEffect, useState } from "react";

function TaskItem({ id, titre, deleteTask, num, gestionTaskAchevee }) {
  const [Achever, setAchever] = useState(false);

  useEffect(() => {
    if (Achever) {
      gestionTaskAchevee(id, true);
    } else {
      gestionTaskAchevee(id, false);
    }
  }, [Achever]);

  return (
    <li
      onClick={() => {
        setAchever(!Achever);
      }}
      className={`flex justify-between items-center p-[20px] 
        ${Achever ? `${style.li_succes}` : `${style.li_defaut}`}   
      ${style.li_defaut}`}
    >
      <div className="flex items-center">
        <span
          className={`bg-[#2e3c66]  text-[#7696f4] rounded-[20px] ${style.spanNum}  py-[5px] px-[10px] font-semibold`}
        >
          {num}
        </span>
      
        <p className={`ml-[30px] text-xl ${style.p_titre}`}>{titre}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(id);
        }}
        className="bg-[#2e3c66]  text-[#7696f4] py-[10px] px-[20px] rounded-[10px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </li>
  );
}

export default TaskItem;
