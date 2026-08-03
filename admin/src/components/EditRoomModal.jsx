import React, { useState, useEffect } from 'react';

const EditRoomModal = ({ isOpen, onClose, room, onSave }) => {
  const [updatedRoom, setUpdatedRoom] = useState(room);

  useEffect(() => {
    setUpdatedRoom(room);
  }, [room]);

  if (!isOpen || !updatedRoom) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl bg-stone-900 p-6">
        <h2 className="mb-4 text-2xl font-bold text-white">Edit Room</h2>

        <div className="space-y-4">
          <input
            type="text"
            value={updatedRoom.type}
            onChange={(e) =>
              setUpdatedRoom({ ...updatedRoom, type: e.target.value })
            }
            className="w-full rounded-lg bg-stone-800 p-3 text-white outline-none"
          />

          <input
            type="text"
            value={updatedRoom.price}
            onChange={(e) =>
              setUpdatedRoom({ ...updatedRoom, price: e.target.value })
            }
            className="w-full rounded-lg bg-stone-800 p-3 text-white outline-none"
          />

          <select
            value={updatedRoom.status}
            onChange={(e) =>
              setUpdatedRoom({ ...updatedRoom, status: e.target.value })
            }
            className="w-full rounded-lg bg-stone-800 p-3 text-white outline-none"
          >
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-stone-700 px-4 py-2 text-white"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(updatedRoom)}
            className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoomModal;