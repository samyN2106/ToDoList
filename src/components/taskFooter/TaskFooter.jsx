import "./../../index.css";

function TaskFooter({tabTachesAchever}) {
  return (
    <div>
      <p className="text-xl">
        vous avez accomplir <span >{tabTachesAchever.length}</span> taches
      </p>
    </div>
  );
}

export default TaskFooter;
