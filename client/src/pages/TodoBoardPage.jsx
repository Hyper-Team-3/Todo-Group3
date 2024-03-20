import Sidebar from "../components/Sidebar";
import TodoBoard from "../components/TodoBoard";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import DoneTasks from "../components/DoneTasks";
import Footer from "../components/Footer"

const TodoBoardPage = () => {
  return (
    <div className="grid grid-cols-13 grid-rows-6 bg-gray-200 overflow-hidden">
        <Sidebar />
        <Header />
        <Tasks />
        <DoneTasks />
        <Footer />
    </div>
  );
};

export default TodoBoardPage;
