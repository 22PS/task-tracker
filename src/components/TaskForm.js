import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { v4 as uuidv4 } from 'uuid';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { format, parseISO } from 'date-fns';

function TaskForm({ onClose }) {
  const dispatch = useDispatch();
  const currDate = format(parseISO(new Date().toISOString()), 'yyyy-MM-dd');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Pending');
  const [date, setDate] = useState(currDate);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date) {
      setError('Field(s) missing !!');
    } else {
      const newTask = {
        id: uuidv4(),
        title,
        description,
        priority,
        status,
        date,
        timeSpent: {
          hours: 0,
          mins: 0,
        },
      };

      dispatch(addTask(newTask));

      setTitle('');
      setDescription('');
      setPriority('Medium');
      setStatus('Pending');
      setDate(currDate);
      onClose();
    }
  };

  return (
    <div className="modal-div1">
      <div className="modal-div2">
        <div className="flex justify-between pb-1">
          <h3 className="text-2xl font-medium pb-2 ">Add New Task</h3>
          <button onClick={onClose} className="h-0 text-[18px]">
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <div className="form-input">
            <p>
              Title<span className="text-red-600">*</span>{' '}
            </p>
            <input
              type="text"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-2 py-[2px] border border-black rounded"
            />
          </div>
          <div className="form-input">
            <p>Description</p>
            <textarea
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-input">
            <p>
              Priority<span className="text-red-600">*</span>
            </p>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="form-input">
            <p>
              Progress Status<span className="text-red-600">*</span>
            </p>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-input">
            <p>
              Due Date<span className="text-red-600">*</span>
            </p>
            <input
              type="date"
              min={currDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-[#20c19e] hover:bg-[#016b64] text-white rounded-sm mb-2 font-normal text-[20px]"
          >
            Add Task
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default TaskForm;
