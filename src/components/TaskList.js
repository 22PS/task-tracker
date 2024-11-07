import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import EditTask from './EditTask';
import LogTimeSpent from './LogTimeSpent';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(null);
  const [logTimeSpent, setLogTimeSpent] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const toggleFilter = (filter, setFilter, value) => {
    setFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  console.log(tasks);
  useEffect(() => {
    if (tasks) {
      const filtered = tasks.filter(
        (task) =>
          (priorityFilter.length === 0 ||
            priorityFilter.includes(task.priority)) &&
          (statusFilter.length === 0 || statusFilter.includes(task.status))
      );

      setFilteredTasks(filtered);
    }
  }, [priorityFilter, statusFilter, tasks]);

  return (
    <div className="flex flex-row min-h-[100%] w-full">
      <div className="flex flex-col w-[15%] fixed top-[12vh] p-5 pt-0 pl-8 h-[50%]">
        <h3 className="text-2xl font-semibold my-4">Filters</h3>
        <div className="flex flex-row justify-between mb-4">
          <div>
            <h3 className="font-medium text-[18px] mb-2">Priority</h3>
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  value="High"
                  onChange={(e) =>
                    toggleFilter(
                      priorityFilter,
                      setPriorityFilter,
                      e.target.value
                    )
                  }
                  className="mr-1"
                />
                High
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Medium"
                  onChange={(e) =>
                    toggleFilter(
                      priorityFilter,
                      setPriorityFilter,
                      e.target.value
                    )
                  }
                  className="mr-1"
                />
                Medium
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Low"
                  onChange={(e) =>
                    toggleFilter(
                      priorityFilter,
                      setPriorityFilter,
                      e.target.value
                    )
                  }
                  className="mr-1"
                />
                Low
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="font-medium text-[18px] mb-2">Status</h3>
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  value="Pending"
                  onChange={(e) =>
                    toggleFilter(statusFilter, setStatusFilter, e.target.value)
                  }
                  className="mr-1"
                />
                Pending
              </label>
              <label>
                <input
                  type="checkbox"
                  value="In Progress"
                  onChange={(e) =>
                    toggleFilter(statusFilter, setStatusFilter, e.target.value)
                  }
                  className="mr-1"
                />
                In Progress
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Completed"
                  onChange={(e) =>
                    toggleFilter(statusFilter, setStatusFilter, e.target.value)
                  }
                  className="mr-1"
                />
                Completed
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-[100%] ml-[25%] items-center">
        <h3 className="text-2xl font-semibold my-4">Your Tasks</h3>
        {filteredTasks &&
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="mb-4 p-4 bg-white rounded shadow-md w-[75%]"
            >
              <h4 className="font-bold text-lg">{task.title}</h4>
              {task.description && (
                <p className="text-gray-600 mb-2">{task.description}</p>
              )}
              <p className="mb-2">Priority: {task.priority}</p>
              <p className="mb-2">Status: {task.status}</p>
              <p className="mb-2">Due Date: {task.date}</p>
              <p className="mb-2">
                Time Spent: {task.timeSpent.hours ? task.timeSpent.hours : '00'}{' '}
                Hrs {task.timeSpent.mins ? task.timeSpent.mins : '00'} Mins
              </p>
              <div className="mb-2">
                <button
                  onClick={() => setLogTimeSpent(task)}
                  className="bg-blue-400 text-white px-3 py-1 hover:bg-blue-500 rounded-sm  w-[150px]"
                >
                  Log time spent
                </button>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setEditTask(task)}
                  className="bg-yellow-400 text-white px-3 py-1 hover:bg-yellow-500 rounded-sm w-[70px]"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="bg-red-500 text-white px-3 py-1 hover:bg-red-600 rounded-sm w-[70px]"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        {editTask && (
          <EditTask task={editTask} onClose={() => setEditTask(null)} />
        )}
        {logTimeSpent && (
          <LogTimeSpent
            task={logTimeSpent}
            onClose={() => setLogTimeSpent(null)}
          />
        )}
      </div>
    </div>
  );
}

export default TaskList;
