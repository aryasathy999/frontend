function App() {
  return (
    <body className="bg-green-100 flex item-center justify-center min-h-screen">
      <div className="bg-green-300 p-8 rounded-lg shadow-md w-full max-w-md mt-5">
        <h2 className="text-2xl font-bold text-green-900 mb-2">Get In Touch!</h2>
        <p className="text-green-800 mb-6">Use the contact form below to get in touch.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-white-900 mb-1">Name:</label>
            <input type="text" placeholder="Your name" className="w-full bg-white px-4 py-2 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-white-900 mb-1">Email Address:</label>
            <input type="email" placeholder="your@email.com" class="w-full bg-white px-4 py-2 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-white-900 mb-1">Website:</label>
            <input type="url" placeholder="yourwebsite.com" class="w-full bg-white px-4 py-2 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white-900 mb-1">Subject:</label>
            <select className="w-full bg-white px-4 py-2 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600">
              <option>I just want to say hello :)</option>
              <option>I have a question</option>
              <option>I need support</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white-900 mb-1">Message:</label>
            <textarea rows="4" placeholder="Write your message here, please." className="w-full bg-white px-4 py-2 rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded">Send away!</button>
          </div>
        </form>
      </div>
    </body>
  )
}

export default App
