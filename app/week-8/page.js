"use client";
import ItemList from './item-list';
import NewItemPage from './new-item';
import itemsData from './items.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState("");

    const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    };

    const handleItemSelect = (name) => {
    if (!name) return;

    const cleanedName = name
        .split(',')[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        .trim();

    setSelectedItem(cleanedName);
    };

    return (
        <main className="bg-slate-950 p-8 min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-8">Shopping List</h1>

        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
            <NewItemPage onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>

            <div className="flex-1">
            <MealIdeas ingredient={selectedItem} />
            </div>
        </div>
    </main>
);
}