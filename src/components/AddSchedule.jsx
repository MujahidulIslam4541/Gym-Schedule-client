import { Result } from "postcss";
import React from "react";
import Swal from "sweetalert2";

export default function AddSchedule() {
  const handleAddSchedule = (event) => {
    event.preventDefault();
    const from = event.target;
    const title = from.title.value;
    const date = from.date.value;
    const day = from.day.value;
    const time = from.time.value;
    // console.log({title,time,date,day});
    const data = {
      title: title,
      date: date,
      day: day,
      time: time,
    };
    fetch("http://localhost:5000/schedule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your data Successfully Added",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="w-8/12 mx-auto bg-slate-300 p-8 mt-20">
      <h2 className="text-2xl font-semibold text-center mb-5">
        Add Gym Schedule
      </h2>
      <form onSubmit={handleAddSchedule}>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div>
            <label htmlFor="">Title</label>
            <br />
            <input
              type="text"
              name="title"
              id=""
              placeholder="Title here"
              className="w-full py-2 rounded-md px-4"
            />
          </div>
          <div>
            <label htmlFor="">Date</label>
            <br />
            <input
              type="date"
              name="date"
              id=""
              placeholder="Date here"
              className="w-full py-2 rounded-md px-4"
            />
          </div>
          <div>
            <label htmlFor="">Day</label>
            <br />
            <select name="day" id="" className="w-full py-2 rounded-md px-4">
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Title</label>
            <br />
            <input
              type="time"
              name="time"
              id=""
              placeholder="Time here"
              className="w-full py-2 rounded-md px-4"
            />
          </div>
          <div className="col-span-2 mt-4">
            <input
              type="submit"
              value="Add Schedule"
              className="w-full py-2 bg-pink-500 rounded-lg text-white font-semibold"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
