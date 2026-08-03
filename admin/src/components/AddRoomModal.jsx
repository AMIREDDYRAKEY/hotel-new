import React, { useState } from 'react';

const AddRoomModal = ({ isOpen, onClose, onAdd }) => {
  const [room, setRoom] = useState({
    type: '',
    price: '',
    status: 'Available',
    image: '',
  });

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRoom({ ...room, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle add room
  const handleSubmit = () => {
    if (!room.type || !room.price || !room.image) {
      alert('Please fill all fields and upload an image');
      return;
    }

    onAdd(room);

    // Reset form
    setRoom({
      type: '',
      price: '',
      status: 'Available',
      image: '',
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl border border-stone-700 bg-stone-900 p-6 shadow-2xl">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Add New Room
        </h2>

        <div className="space-y-2">
          {/* Room Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-300">
              Room Type
            </label>
            <input
              type="text"
              placeholder="e.g. Deluxe Suite"
              value={room.type}
              onChange={(e) =>
                setRoom({ ...room, type: e.target.value })
              }
              className="w-full rounded-lg border border-stone-700 bg-stone-800 p-2 text-white outline-none focus:border-yellow-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-300">
              Price per Night
            </label>
            <input
              type="text"
              placeholder="e.g. $250"
              value={room.price}
              onChange={(e) =>
                setRoom({ ...room, price: e.target.value })
              }
              className="w-full rounded-lg border border-stone-700 bg-stone-800 p-2 text-white outline-none focus:border-yellow-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-300">
              Room Status
            </label>
            <select
              value={room.status}
              onChange={(e) =>
                setRoom({ ...room, status: e.target.value })
              }
              className="w-full rounded-lg border border-stone-700 bg-stone-800 p-2 text-white outline-none focus:border-yellow-500"
            >
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-300">
              Upload Room Image
            </label>

            <input
  type="file"
  accept="image/*"
  onChange={handleImageUpload}
  className="w-full rounded-xl border border-[#6B4F2A] bg-[#1E1A17] p-2 text-[#F5E6D3] file:mr-4 file:rounded-lg file:border file:border-[#8B6B3D] file:bg-[#5C3D2E] file:px-4 file:py-2 file:font-semibold file:text-[#F5E6D3] hover:file:bg-[#7A523D] hover:file:border-[#D4A853] transition-all duration-300"
/>

            {/* Image Preview */}
            {room.image && (
              <div className="mt-4">
                <p className="mb-2 text-sm text-stone-300">Image Preview</p>
                <img
                  src={room.image}
                  alt="Room Preview"
                  className="h-10 w-full rounded-xl object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
     <div className="mt-6 flex justify-end gap-3">
  <button
    onClick={onClose}
    className="rounded-xl border border-[#6B4F2A] bg-[#2A221C] px-5 py-2.5 font-medium text-[#D4B483] transition-all duration-300 hover:bg-[#3A2F26] hover:border-[#8B6B3D]"
  >
    Cancel
  </button>

  <button
    onClick={handleSubmit}
    className="rounded-xl border border-[#8B6B3D] bg-[#5C3D2E] px-5 py-2.5 font-semibold text-[#F5E6D3] shadow-lg transition-all duration-300 hover:bg-[#7A523D] hover:border-[#D4A853]"
  >
    Add Room
  </button>
</div>
      </div>
    </div>
  );
};

export default AddRoomModal;