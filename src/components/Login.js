import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { IoIosLogIn } from 'react-icons/io';
function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <div className="flex items-center justify-center min-h-[88vh]">
      <div className="flex flex-col p-8 lg:w-[30%] w-[50%] h-[100%] rounded-md items-center shadow-lg">
        <h2 className="font-bold text-3xl text-center mb-2">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full p-4">
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            className="p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="py-2 mb-4 border rounded bg-blue-500 text-white hover:bg-blue-600 text-[18px]"
          >
            <div className="flex flex-row items-center justify-center">
              <p className="mr-2">Login</p>
              <IoIosLogIn style={{ fontSize: '20px', fontWeight: '600' }} />
            </div>
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
