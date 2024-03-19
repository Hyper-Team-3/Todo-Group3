import Sidebar from "../components/Sidebar";
import TodoBoard from "../components/TodoBoard";

const TodoBoardPage = () => {
  return (
    /*
    Header
    Sidebar
    Todo
    Done
    */
    <div className="grid grid-cols-12 grid-rows-10 gap-2">
      <div className="row-span-10">
        <Sidebar />
      </div>
      <div className="col-span-11 row-span-10">
        <TodoBoard />
      </div>
    </div>
  );
};

export default TodoBoardPage;
