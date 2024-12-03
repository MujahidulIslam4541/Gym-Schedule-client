import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaEdit, FaEyeSlash } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllSchedule = () => {
  const allScheduleLoader = useLoaderData();
  const [allSchedule, setAllSchedule] = useState(allScheduleLoader);
  //   const { title, date, day, time } = allSchedule;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    fetch(`http://localhost:5000/schedule/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const filterData = allSchedule.filter(
          (schedule) => id !== schedule._id
        );
        setAllSchedule(filterData);
        if (result.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-10 mt-10">
        <h2 className="text-xl font-bold">All Schedule</h2>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search Here"
          className="border rounded-md p-2 w-96"
        />
      </div>

      <div className="w-11/12 mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Title</th>
                <th>Day</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allSchedule.length === 0 ? (
                <p className="text-xl font-bold">No Data Found</p>
              ) : (
                allSchedule.map((schedule, index) => (
                  <tr key={schedule._id}>
                    <th>{index + 1}</th>
                    <td>{schedule.title}</td>
                    <td>{schedule.day}</td>
                    <td>{schedule.date}</td>
                    <td>{schedule.time}</td>
                    <div className="flex gap-3 text-xl">
                      <p className="text-pink-500">
                        <FaEdit />
                      </p>
                      <p
                        onClick={() => handleDelete(schedule._id)}
                        className="text-pink-500"
                      >
                        <MdDelete />
                      </p>
                      <p className="text-pink-500">
                        <FaEyeSlash />
                      </p>
                    </div>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSchedule;
