import "./../../index.css";
import style from "./taskList.module.css";
import TaskItem from "../taskItem/TaskItem";

function TaskList({
  tableauTasks,
  deleteTask,
  gestionTaskAchevee,
  tabTachesAchever,
}) {
  if (tableauTasks && tableauTasks.length > 0) {
    return (
      <div className={`text-left ${style.blocPrincipal} p-[20px]`}>
        <h2 className="text-xl font-semibold mb-[15px]">
          📋 Vous avez{" "}
          <span>{tableauTasks.length - tabTachesAchever.length}</span> tache a
          accomplir
        </h2>
        <ul className="flex flex-col gap-5">
          {tableauTasks.map((task, index) => (
            <TaskItem
              key={task.id}
              id={task.id}
              num={index + 1}
              titre={task.title}
              deleteTask={deleteTask}
              gestionTaskAchevee={gestionTaskAchevee}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className={`text-left ${style.blocPrincipal} p-[20px]`}>
        <h2 className="text-xl text-center font-semibold mb-[15px]">
          🖐👋👋👋 Hello friend !! Tu n’as pas de tâche à effectuer aujourd’hui
          ???
        </h2>
      </div>
    );
  }
}

export default TaskList;
