
"use client";
import ItemList from './item-list';
import NewItemPage from './new-item';
import itemsData from './items.json';
import { useState } from 'react';



export default function Page(){

    const[items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items,newItem]);
    }
    return(
        <main className="bg-slate-400 p-8">
            <h1 className="text-5xl font-bold text-white mb-4">Shopping List</h1>
            <NewItemPage onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </main>
    );
}