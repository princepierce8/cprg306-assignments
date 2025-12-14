"use client";
import ItemList from './item-list';
import NewItemPage from './new-item';
import { useState, useEffect } from 'react';
import MealIdeas from './meal-ideas';
import {useUserAuth} from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';


export default function Page(){

    const[items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const {user} = useUserAuth();

    const loadItems = async () => {
        if (user) {
            try {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems);
            } catch (error) {
                console.error("Failed to load shopping list items:", error);
            }
        }
    };

    const handleAddItem = async (newItem) => {
        if (!user) return;

        try {
            const newItemId = await addItem(user.uid, newItem); 

            const itemWithId = { ...newItem, id: newItemId };
            setItems((prevItems) => [...prevItems, itemWithId]);

        } catch (error) {
            console.error("Failed to add new item:", error);
        }
    }
    
    const handleItemSelect = (name) => {
        if (!name) return;
        const cleanedName = name
        .split(',')[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        .trim();
        setSelectedItem(cleanedName);
    };

    useEffect(() => {
        if (user) { 
            loadItems();
        } else {
            setItems([]);
        }
    }, [user]);

    if (!user) {
        return (
            <main className="bg-slate-400 p-8 flex min-h-screen text-white justify-center items-center">
                <h1 className="text-5xl font-bold text-white mb-4">Shopping List</h1>
                <p className="text-white">Please log in to view the shopping list.</p>
            </main>
        );
    }

    return(
        <main className="bg-slate-400 p-8">
            <h1 className="text-5xl font-bold text-white mb-4">Shopping List</h1>
            
            <NewItemPage onAddItem={handleAddItem} />
            
            <div className="flex justify-between mt-8">
                <ItemList items={items} onItemSelect={handleItemSelect}/>
                <MealIdeas ingredient={selectedItem} />
            </div>
        </main>
    );
}