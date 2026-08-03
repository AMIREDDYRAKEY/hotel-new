import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const SpaPage = () => {
    const [treatments, setTreatments] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    
    useEffect(() => { fetchSpa(); }, []);
    
    const fetchSpa = async () => {
        const res = await fetch('https://hotel-new-bp32.onrender.com/api/spa');
        const data = await res.json();
        setTreatments(data);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleAdd = async () => {
        if (!name || !description) return toast.error("Name and description are required");
        try {
            await fetch('https://hotel-new-bp32.onrender.com/api/spa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, description, duration, price, image })
            });
            setName("");
            setDescription("");
            setDuration("");
            setPrice("");
            setImage("");
            fetchSpa();
            toast.success("Treatment added successfully");
        } catch(e) {
            toast.error("Failed to add treatment");
        }
    };

    return (
        <div className="min-h-screen bg-stone-950 p-6">
            <h1 className="text-3xl font-bold text-white mb-6">Spa Management</h1>
            <div className="bg-stone-900 p-6 rounded-lg mb-8 max-w-2xl border border-stone-800">
                <h2 className="text-xl text-gold-500 mb-4">Add Spa Treatment</h2>
                <div className="space-y-3">
                    <input className="p-3 w-full bg-stone-800 text-white rounded border border-stone-700 outline-none focus:border-gold-500" placeholder="Treatment Name" value={name} onChange={e => setName(e.target.value)} />
                    <input className="p-3 w-full bg-stone-800 text-white rounded border border-stone-700 outline-none focus:border-gold-500" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    <input className="p-3 w-full bg-stone-800 text-white rounded border border-stone-700 outline-none focus:border-gold-500" placeholder="Duration (e.g. 60 Min)" value={duration} onChange={e => setDuration(e.target.value)} />
                    <input className="p-3 w-full bg-stone-800 text-white rounded border border-stone-700 outline-none focus:border-gold-500" placeholder="Price (e.g. $150)" value={price} onChange={e => setPrice(e.target.value)} />
                    <div>
                        <label className="block text-sm text-stone-400 mb-1">Treatment Image</label>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-stone-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-gold-500 file:text-stone-900 hover:file:bg-gold-600" />
                        {image && <img src={image} alt="Preview" className="mt-2 h-20 rounded object-cover" />}
                    </div>
                    <button onClick={handleAdd} className="mt-4 bg-gold-500 text-stone-900 font-semibold px-6 py-2 rounded hover:bg-gold-600">Add Treatment</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatments.map(t => (
                    <div key={t._id} className="bg-stone-900 rounded-lg overflow-hidden border border-stone-800">
                        {t.image ? (
                            <img src={t.image?.includes('http') || t.image?.includes('data:') ? t.image : `https://hotel-new-bp32.onrender.com/${t.image}`} alt={t.name} className="w-full h-48 object-cover" />
                        ) : (
                            <div className="w-full h-48 bg-stone-800 flex items-center justify-center text-stone-500">No Image</div>
                        )}
                        <div className="p-4 relative">
                            <h3 className="text-xl text-white font-serif">{t.name}</h3>
                            <p className="text-stone-400 text-sm mt-1">{t.duration} | {t.price}</p>
                            <button onClick={async () => {
                                if(window.confirm('Are you sure you want to delete this treatment?')) {
                                    try {
                                        await fetch(`https://hotel-new-bp32.onrender.com/api/spa/${t._id}`, { method: 'DELETE' });
                                        fetchSpa();
                                        toast.success("Treatment deleted");
                                    } catch(e) {
                                        toast.error("Failed to delete treatment");
                                    }
                                }
                            }} className="absolute top-4 right-4 text-stone-500 hover:text-red-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default SpaPage;
