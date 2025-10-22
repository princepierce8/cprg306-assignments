"use client";

import { useState } from "react";

export default function NewItemPage(){
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    };

    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex items-center space-x-2 text-black text-2xl mx-4 bg-white w-16 px-4">{quantity}</div>
            <div className="flex items-center space-x-2">
                <button onClick={decrement} disabled={quantity === 1} className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded-md disabled:bg-gray-300"> - </button>
            </div>
            <button onClick={increment} disabled={quantity === 20} className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md disabled:bg-gray-300"> + </button>
        </div>
    );
}