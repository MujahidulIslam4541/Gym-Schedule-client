import React from "react";

export default function AddSchedule() {
  return (
    <div className="w-8/12 mx-auto bg-slate-300 p-8 mt-20">
        <h2 className="text-2xl font-semibold text-center mb-5">Add Gym Schedule</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="">Title</label>
            <br />
            <input
              type="text"
              name="title"
              id=""
              placeholder="Title here"
              className="w-full py-2 rounded-xl px-4"
            />
          </div>
          <div>
            <label htmlFor="">Date</label>
            <br />
            <input
              type="datetime-local"
              name="title"
              id=""
              placeholder="Date here"
              className="w-full py-2 rounded-xl px-4"
            />
          </div>
          <div>
            <label htmlFor="">Day</label>
            <br />
            <input
              type="text"
              name="title"
              id=""
              placeholder="Day here"
              className="w-full py-2 rounded-xl px-4"
            />
          </div>
          <div>
            <label htmlFor="">Title</label>
            <br />
            <input
              type="time"
              name="title"
              id=""
              placeholder="Time here"
              className="w-full py-2 rounded-xl px-4"
            />
          </div>
          <div className="col-span-2">
            <input type="submit" value="Add Schedule" className="w-full py-2 bg-blue-500 rounded-lg text-white font-semibold" />
          </div>
        </div>
      </form>
    </div>
  );
}
