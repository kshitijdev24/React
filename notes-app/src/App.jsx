import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState([]);

  // function to handle notes creation
  const handleSubmit = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, description });
    setTask(copyTask);
    console.log(task);
    setTitle('');
    setDescription('');
  }

  // function to strike through the completed task
  const Finished = () => {
    const title = document.getElementById('title');
    title.style.textDecoration = 'line-through';
  }

  // function to remove the completed task from the list
  const TaskCompleted = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);

  }
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex gap-4 w-1/2 items-start p-10 flex-col"
      >
        <h1 className="text-2xl font-bold">Add New Task</h1>
        <input
          className="px-5 border-2 outline-none rounded py-2 w-full font-medium "
          type="text"
          placeholder="enter task heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          className="px-5 border-2 outline-none rounded py-2 w-full h-40 font-medium flex flex-row items-start"
          type="text"
          placeholder="enter task description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />

        <button className="bg-white active:bg-black w-full text-black px-5 py-2 rounded-2xl font-medium">
          Add Note
        </button>
      </form>
      <div className="flex lg:w-1/2 gap-5 bg-gray-900 flex-wrap p-10 lg:border-l-2">
        <h1 className="text-xl font-bold">My Notes</h1>
        <div className="flex flex-wrap item-start justify-start gap-5 mt-6 mb-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col items-start relative h-60 w-42 rounded-xl bg-white text-black pt-9 pb-4 px-4 bg-[url('data:image/jpeg;base64,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')] bg-cover"
              >
                <h3 className="bg-white h-10 w-10 rounded-full p-2 text-center mb-1">
                  {idx + 1}
                </h3>
                <h3
                  id="title" 
                  className="text-xl font-bold underline underline-offset-7"
                >
                  {elem.title}
                </h3>
                <p className="mt-2 font-bold text-red-800">
                  {elem.description}
                </p>

                <button
                  onClick={(idx) => {
                    TaskCompleted(idx);
                  }}
                  className="bg-red-600 active:scale-95 text-xs text-white rounded-2xl font-bold cursor-pointer py-3 px-2 w-full"
                >
                  Completed
                </button>
              </div>
            );
          })}
          

        </div>
      </div>
    </div>
  ); 
}

export default App