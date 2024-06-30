import * as io from 'socket.io-client';

const socket = io.connect("http://localhost:8000");

function App() {

  return (
    <>
        <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-900">
            <h3 className="text-2xl text-white mb-4">Rejoindre la salle de discussion</h3>
            <div className="flex flex-col gap-2">
                <div>
                    <label htmlFor="first_name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pseudo</label>
                    <input type="text"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Carter the fourth.." required/>
                </div>
                <div>
                    <label htmlFor="room"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room number</label>
                    <input type="text"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="n° .." required/>
                </div>

                <button type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Rejoindre la salle
                </button>

            </div>
        </div>
    </>
  );
}

export default App;
