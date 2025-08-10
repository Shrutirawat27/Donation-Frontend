import React from 'react';
import axios from 'axios';
import HeroImg from "../../assets/image2.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    name: "",
    email: "",
    amount: 0,
    cause: "",
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.amount || !data.cause) {
      alert("Please fill all the fields and select a cause.");
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/donate`, data);
      alert(`Thank you, ${data.name}! ₹${data.amount} donation received for ${data.cause}.`);

      localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email }));
      setData({ name: "", email: "", amount: 0, cause: "" });
    } catch (err) {
      console.error("Quick donation failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Spacer for mobile to clear navbar height */}
      <div className="block lg:hidden" style={{ height: "70px" }}></div>

      <div
        className="min-h-screen lg:h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="h-full w-full bg-gradient-to-r from-black/80 to-primary/60 flex items-center">
          <div className="container text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              
              {/* Hero Text Section */}
              <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px] pt-[80px] lg:pt-0">
                <motion.h1
                  variants={FadeUp(0.2)}
                  initial="initial"
                  animate="animate"
                  className="text-5xl lg:text-6xl font-bold"
                >
                  Join Us in Changing Lives
                </motion.h1>
                <motion.p
                  variants={FadeUp(0.4)}
                  initial="initial"
                  animate="animate"
                >
                  Every small act of kindness creates a ripple of change. By donating today, you’re not just giving money — you're offering hope, support, and a brighter future to someone in need. Stand with us and be the change the world needs.
                </motion.p>

                <div className="space-x-4">
                  <motion.button
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate"
                    className="btn-primary"
                    onClick={() => navigate("/donate")}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>

              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className='w-[90%] md:w-[400px] mx-auto px-4 py-2 mt-6 md:mt-12 mb-10 md:mb-0 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md'
              >
                <div>
                  <h1 className='text-lg text-center font-semibold'>
                    Quick Donation Form
                  </h1>

                  <div className='flex items-center justify-center gap-6 px-0 py-1'>
                    <button
                      onClick={() => setData({ ...data, amount: 1 })}
                      className='button-square'>$01</button>
                    <button
                      onClick={() => setData({ ...data, amount: 5 })}
                      className='button-square'>$05</button>
                    <button
                      onClick={() => setData({ ...data, amount: 10 })}
                      className='button-square'>$10</button>
                    <button
                      onClick={() => setData({ ...data, amount: 99 })}
                      className='button-square'>$99</button>
                  </div>

                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <input
                      type='number'
                      name='amount'
                      id='amount'
                      onChange={handleClick}
                      placeholder='Amount'
                      value={data.amount}
                      min={1}
                      max={100}
                      className='w-full border dark:border-gray-800 px-4 py-1.5 rounded-lg dark:bg-black'
                    />
                    <input
                      type='text'
                      name='name'
                      id='name'
                      onChange={handleClick}
                      placeholder='Name'
                      value={data.name}
                      className='w-full border dark:border-gray-800 px-4 py-1.5 rounded-lg dark:bg-black'
                    />
                    <input
                      type='email'
                      name='email'
                      id='email'
                      onChange={handleClick}
                      placeholder='Email'
                      value={data.email}
                      className='w-full border dark:border-gray-800 px-4 py-1.5 rounded-lg dark:bg-black'
                    />

                    <select
                      name='cause'
                      onChange={handleClick}
                      value={data.cause}
                      className='w-full border dark:border-gray-800 px-4 py-1.5 rounded-lg dark:bg-black'
                    >
                      <option value="">Select a Cause</option>
                      <option value="Feed a Child">Feed a Child</option>
                      <option value="Build a Shelter">Build a Shelter</option>
                      <option value="Education Kit">Education Kit</option>
                      <option value="Medical Aid">Medical Aid</option>
                    </select>

                    <button className='btn-primary w-full rounded-full' type='submit'>
                      Donate Now
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;