import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Login response data:", data);

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful");
        navigate("/");
        window.location.reload(); 
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="pt-24 min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded bg-white dark:bg-slate-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded bg-white dark:bg-slate-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="btn-primary w-full rounded-full py-2"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm sm:text-base">
          Don’t have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-600 hover:underline"
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;