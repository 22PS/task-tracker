import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { format, parseISO } from 'date-fns';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getDailyTaskCounts = (tasks) => {
  const counts = {};

  tasks.forEach((task) => {
    const date = format(parseISO(task.lastUpdated), 'yyyy-MM-dd');
    counts[date] = (counts[date] || 0) + 1;
  });

  return Object.entries(counts).map(([date, count]) => ({
    date,
    count,
  }));
};

function Dashboard() {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const tasks = useSelector((state) => state.tasks);

  const dailyTaskCounts = getDailyTaskCounts(tasks);

  const chartData = {
    labels: dailyTaskCounts.map((data) => data.date),
    datasets: [
      {
        label: 'Tasks Worked On Per Day',
        data: dailyTaskCounts.map((data) => data.count),
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div>
      <div className="flex flex-row min-h-screen">
        <div className="w-[50%]">
          <TaskList />
        </div>

        <div className="w-[50%] flex flex-col items-center fixed right-0 top-[12vh] bottom-0 p-4 pt-0">
          <h3 className="text-2xl font-semibold my-4">
            Tasks Worked On Per Day
          </h3>
          <div className="rounded shadow-lg w-[90%] h-[60%] overflow-y-auto mb-14">
            <Line data={chartData} />
          </div>
          <button
            onClick={() => setShowTaskForm(!showTaskForm)}
            className="bg-black text-white font-semibold text-xl p-3 w-[50%] mt-4 rounded-md"
          >
            + Add Task
          </button>
        </div>
      </div>
      {showTaskForm && (
        <TaskForm onClose={() => setShowTaskForm(!showTaskForm)} />
      )}
    </div>
  );
}

export default Dashboard;
