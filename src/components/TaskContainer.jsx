import "../index.css";
import Header from "./taskHeader/Header";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import TaskFooter from "./taskFooter/TaskFooter";
import { useState } from "react";

function TaskContainer() {
  const [tabObjetTaks, setTabObjetTaks] = useState([]);
  const [tabTachesAchever, setTabTachesAchever] = useState([]);

  function addTaks(titre) {
    const newtaks = {
      id: Date.now(),
      title: titre,
      achever: false,
    };
    setTabObjetTaks([...tabObjetTaks, newtaks]);
  }

  function deleteTask(id) {
    setTabObjetTaks(tabObjetTaks.filter((task) => task.id !== id));
    setTabTachesAchever(tabTachesAchever.filter((task) => task.id !== id));
  }

  function gestionTaskAchevee(id, verifAchever) {
    tabObjetTaks.map((task) => {
      if (task.id === id) {
        task.achever = verifAchever;
        if (task.achever === true) {
          setTabTachesAchever([...tabTachesAchever, task]);
        } else {
          setTabTachesAchever(
            tabTachesAchever.filter((item) => item.id !== task.id)
          );
        }
      }
    });
  }

  return (
    <main className="flex flex-col gap-7">
      <Header />
      <TaskForm addTaks={addTaks} />
      <TaskList
        tableauTasks={tabObjetTaks}
        deleteTask={deleteTask}
        gestionTaskAchevee={gestionTaskAchevee}
        tabTachesAchever={tabTachesAchever}
      />
      <TaskFooter tabTachesAchever={tabTachesAchever} />
    </main>
  );
}

export default TaskContainer;
