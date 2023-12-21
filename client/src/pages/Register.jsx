import AuthButton from "../components/AuthButton";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.nom);
    try {
       const res = await fetch("http://localhost:3001/api/auth/register", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
       });
       const data = await res.json();
      console.log(data);

      if (data.msg) {
        alert(data.msg);
      }
      else {
        navigate("/login")
      }
    } catch (error) {
      
    }
   

  }
  const handleformchange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
 
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-gray-300 h-2/3 w-1/3 rounded-md shadow-2xl flex flex-row justify-center items-center px-5 ">
        <form className=" w-full flex flex-col gap-6 ">
          <input
            required
            onChange={handleformchange}
            className="rounded-lg pl-2 py-2  "
            type="text"
            id="nom"
            placeholder="Username"
          />
          <input
            required
            onChange={handleformchange}
            className="rounded-lg pl-2 py-2  "
            type="email"
            id="email"
            placeholder="Email"
          />
          <input
            required
            onChange={handleformchange}
            className="rounded-lg pl-2 py-2"
            type="password"
            id="password"
            placeholder="Password"
          />
          <button
            onClick={handleSubmit}
            className="bg-graynav rounded-lg py-2 text-white"
          >
            Register
          </button>
          <AuthButton />
          <h4 className="text-sm">
            Already have an account
            <a className="text-blue-700" href="/login">
              Login!
            </a>
          </h4>
        </form>
      </div>
    </div>
  );
}


export default Register
