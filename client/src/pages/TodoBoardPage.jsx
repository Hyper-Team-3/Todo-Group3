import Sidebar from "../components/Sidebar";
import TodoBoard from "../components/TodoBoard";

const TodoBoardPage = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-2 bg-gray-200">
      <div className="row-span-12">
        <Sidebar />
      </div>
      <div className="col-span-11 row-span-12 flex flex-col">
        <TodoBoard />
      </div>
    </div>

    // <div className="grid grid-cols-13 grid-rows-6 bg-gray-200 overflow-hidden">
    //     <Sidebar />
    //     <Header />
    //     <Tasks />
    //     <DoneTasks />
    //     <Footer />
    // </div>
  );
};

export default TodoBoardPage;
