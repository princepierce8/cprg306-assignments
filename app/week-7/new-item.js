"use client";

import { useState } from "react";

export default function NewItemPage({onAddItem}){

    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("Produce");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newItem = {
            name,
            quantity,
            category
        };
        onAddItem(newItem);

        console.log(newItem);
        alert(`Item Added: ${newItem.name}, Quantity: ${newItem.quantity}, Category: ${newItem.category}`);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return(
            <form onSubmit={handleSubmit} className="p-6 bg-slate-900 rounded-lg shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <input type="text" value={name} onChange={handleNameChange} placeholder="Item Name" className="border border-gray-300 p-2 w-full rounded-md" />
                </div>

                <div className="mb-4">
                    <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} min="1" max="20" className="border border-gray-300 p-2 w-full rounded-md" />
                </div>
                <div className="mb-4 border border-gray-300 p-2 w-full rounded-md flex items-center space-x-2">
                    <select value={category} onChange={handleCategoryChange} className="flex-grow p-4 rounded-md text-black bg-white">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>

                    <div>
                        <button type="submit" className="bg-blue-400 hover:bg-blue-100 text-white px-4 rounded-md text-lg">
                            +
                        </button>
                    </div>
                </div>
            </form>
    );
}