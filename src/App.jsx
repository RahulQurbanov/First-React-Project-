import { useState } from 'react';

function App() {
  // state to control visibility of Login and SignUp sections
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  function ShowSignUp() {
    setIsLoginVisible(false);
  }

  function ShowLogin() {
    setIsLoginVisible(true);
  }

  return (
    <>
      <section className={`bg-gradient-to-r from-blue-400 to-purple-300 h-screen flex items-center justify-center ${isLoginVisible ? '' : 'hidden'}`} id="Login">
        <div className="bg-white w-[420px] p-[25px] rounded-xl h-[590px]">
          <div className="flex flex-col gap-[20px] items-center">
            <header className="flex items-center gap-[20px] flex-col">
              <h1 className="text-4xl font-bold mb-[20px]">Login Form</h1>
              <div className="flex gap-5 border border-gray-400 rounded-xl w-[300px]">
                <button className="bg-gradient-to-r from-sky-900 to-blue-600 px-[55px] py-[10px] rounded-xl font-bold text-white" onClick={ShowLogin}>Login</button>
                <button className="font-bold pl-[15px]" onClick={ShowSignUp}>Signup</button>
              </div>
            </header>
            <main className="flex gap-[20px] flex-col mt-[25px]">
              <input type="text" placeholder="Email Address" className="rounded-xl w-[300px] p-[10px] border border-gray-400" />
              <input type="password" placeholder="Password" className="rounded-xl w-[300px] p-[10px] border border-gray-400" />
              <a href="#" className="text-blue-400">Forgot password?</a>
            </main>
            <footer className="flex flex-col gap-[25px] items-center">
              <button className="w-[300px] rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 p-[10px] text-xl text-white">Login</button>
              <div className="flex gap-[5px] font-bold text-lg ">
                <p>Create an account:</p>
                <button className="text-blue-400" onClick={ShowSignUp}>Signup now</button>
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/*------------------------ Signup ------------------- */}

      <section className={`bg-gradient-to-r from-blue-400 to-purple-300 h-screen items-center justify-center flex ${isLoginVisible ? 'hidden' : ''}`} id="SignUp">
        <div className="bg-white w-[420px] p-[25px] rounded-xl h-[590px]">
          <div className="flex flex-col gap-[20px] items-center">
            <header className="flex items-center gap-[20px] flex-col">
              <h1 className="text-4xl font-bold mb-[20px]">Signup Form</h1>
              <div className="flex gap-5 border border-gray-400 rounded-xl w-[300px]">
                <button className="font-bold px-[40px]" onClick={ShowLogin}>Login</button>
                <button className="bg-gradient-to-r from-sky-900 to-blue-600 px-[55px] py-[10px] rounded-xl font-bold text-white" onClick={ShowSignUp}>Signup</button>
              </div>
            </header>
            <main className="flex gap-[20px] flex-col mt-[15px]">
              <input type="text" placeholder="Name" className="rounded-xl w-[300px] p-[10px] border border-gray-400" />
              <input type="text" placeholder="Email Address" className="rounded-xl w-[300px] p-[10px] border border-gray-400" />
              <input type="password" placeholder="Password" className="rounded-xl w-[300px] p-[10px] border border-gray-400" />
              <input type="password" placeholder="Confirm Password" className="rounded-xl w-[300px] p-[10px] border border-gray-400" />
            </main>
            <footer className="flex flex-col gap-[25px] items-center">
              <button className="w-[300px] rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 p-[10px] text-xl text-white">Signup</button>
              <div className="flex gap-[5px] font-bold text-lg ">
                <p>Create an account:</p>
                <button className="text-blue-400" onClick={ShowLogin}>Login</button>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
