import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logTime } from '../redux/taskSlice';
import { IoMdCloseCircleOutline } from 'react-icons/io';

function LogTimeSpent({ task, onClose }) {
  const dispatch = useDispatch();
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logTime({ ...task, hours, mins }));
    setHours(0);
    setMins(0);
    onClose();
  };

  return (
    <div className="modal-div1">
      <div className="modal-div3">
        <div className="flex justify-between pb-1">
          <h3 className="text-2xl font-medium pb-2 ">Time Spent</h3>
          <button onClick={onClose} className="h-0 text-[18px]">
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full items-center"
        >
          <div className="flex flex-row p-4 justify-evenly mb-2">
            <div className="flex flex-col w-[25%]">
              <p className="pb-1">Hrs</p>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="px-2 py-[2px] border border-black rounded"
              />
            </div>
            <div className="flex flex-col w-[25%]">
              <p className="pb-1">Mins</p>
              <input
                type="number"
                value={mins}
                onChange={(e) => setMins(e.target.value)}
                className="px-2 py-[2px] border border-black rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[80%] p-1 bg-[#20c19e] hover:bg-[#016b64] text-white rounded mb-2 font-normal text-[18px]"
          >
            Log Time Spent
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogTimeSpent;
