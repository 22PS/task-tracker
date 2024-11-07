import React from 'react';
import { logout } from '../redux/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosLogOut } from 'react-icons/io';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 sticky top-0 overflow-hidden h-[12vh]">
      {isAuthenticated ? (
        <div className="flex flex-row h-full w-full justify-center items-center">
          <div className="flex w-[20%] pl-12">
            <p className="text-2xl font-semibold">Hi, {user.username} 👋</p>
          </div>
          <div className="flex w-[60%] justify-center">
            <h2 className="text-4xl font-bold">Task Tracker Dashboard</h2>
          </div>
          <div className="flex w-[20%] justify-center">
            <button
              onClick={() => dispatch(logout(user))}
              className="bg-red-600 border-red-600 text-white px-3 py-1 hover:bg-red-700 rounded-lg w-[40%] h-11 text-[18px]"
            >
              <div className="flex flex-row items-center">
                <p className="mx-2">Logout</p>
                <IoIosLogOut style={{ fontSize: '20px', fontWeight: '600' }} />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full justify-center items-center">
          <h2 className="text-4xl font-bold">Task Tracker Dashboard</h2>
        </div>
      )}
    </div>
  );
};

export default Navbar;
