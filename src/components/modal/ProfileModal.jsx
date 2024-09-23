import React, { useState } from "react";
import { useSelector } from "react-redux";
import img from "../../assets/profileimage.jpg";

function ProfileModal({ isOpen, onClose }) {
  const { username, role, avatar } = useSelector((state) => state.auth);
  const [note, setNote] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [notes, setNotes] = useState([]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (note && selectedDate) {
      setNotes([...notes, { date: selectedDate, content: note }]);
      setNote("");
      setSelectedDate("");
    }
  };

  const handleDelete = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-5 shadow-lg">
        <div className="flex items-center mb-4">
          <img src={img} alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold">{username}</h2>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold mb-2">Create a Note</h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded w-full p-2 mb-2"
          />
          <textarea
            className="border rounded w-full p-2 mb-2"
            rows="3"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write a note..."
          />
          <button
            className="bg-[#308E87] text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold mb-2">Your Notes</h3>
          {notes.map((noteItem, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded mb-2 shadow">
              <h4 className="font-semibold">{noteItem.date}</h4>
              <p>{noteItem.content}</p>
              <button
                className="text-red-500 mt-1"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-end">
          <button
            className="bg-[#308E87] text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
