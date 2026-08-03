import React from 'react';

const ViewRoomModal = ({ isOpen, onClose, room }) => {
  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl bg-stone-900 p-6">
        <img
          src={room.image}
          alt={room.type}
          className="mb-4 h-48 w-full rounded-xl object-cover"
        />

        <h2 className="text-2xl font-bold text-white">{room.type}</h2>
        <p className="text-stone-400">Room #{room.id}</p>

        <div className="mt-4 space-y-2 text-white">
          <p><strong>Price:</strong> {room.price}</p>
          <p><strong>Status:</strong> {room.status}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-yellow-500 py-2 font-semibold text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewRoomModal;