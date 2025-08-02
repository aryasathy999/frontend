function App() {
  return (
    <div>
      <h1 className='font-bold underline bg-red-500'>Welcome to Tailwind CSS!</h1>
      <p className="text-2xl text-green-500px">Have a nice day</p>
      <p className="font-thin">We are learning tailwind</p>
      <p className="font-normal">We are learning tailwind</p>
      <p className="font-bold">We are learning tailwind</p>
      <p className="font-extrabold">We are learning tailwind</p>
      <p className="text-right">We are learning tailwind</p>
      <p className="text-center">We are learning tailwind</p>
      <p className="line-through">We are learning tailwind</p>
      <p className="uppercase">We are learning tailwind</p>
      <p className="lowercase">We are learning tailwind</p>
      <p className="capitalize">We are learning tailwind</p>

      <p classNAme="text-lg text-blue-500 font-bold underline text-center tracking-wide">
        This is a styled paragraph using Tailwind CSS.
      </p>
      <p></p>

      <input 
      type="text"
      placeholder="Enter your name"
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
      type="submit"
      className="px-4 py-2 text-black rounded-lg hover:bg-blue-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>

      <div className="flex items-center space-x-2">
        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
        <label className="text-sm text-gray-700">I agree to the terms</label>
      </div>
    </div>
  );
}

export default App;
