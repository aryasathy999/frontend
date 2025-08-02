function App() {
  return (
    <table className="min-w-max mx-auto mt-10 table-auto border-collapse border border-gray-300 text-sm text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 font-semibold">Name</th>
          <th className="border border-gray-300 px-4 py-2 font-semibold">Age</th>
          <th className="border border-gray-300 px-4 py-2 font-semibold">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Anu</td>
          <td className="border border-gray-300 px-4 py-2">15</td>
          <td className="border border-gray-300 px-4 py-2">anu@gmail.com</td>
        </tr>
         <tr>
          <td class="border border-gray-300 px-4 py-2">Vinoth</td>
          <td class="border border-gray-300 px-4 py-2">30</td>
          <td class="border border-gray-300 px-4 py-2">vino@gmail.com</td>
        </tr>
      </tbody>
    </table>
  )
}

export default App
