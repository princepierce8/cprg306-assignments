"use client";
import Item from './item';
import items from './items.json';
import { useState } from 'react';

export default function ItemList(){

    let itemsArray = items.map((item) => ({...item}));
    
    let [sort, setSort] = useState('name');
    let [filter, setFilter] = useState("all")

    const handleSortChange = (event) => setSort(event.target.value);
    const handleFilterChange = (event) => setFilter(event.target.value);

    if (filter !== "all"){
        itemsArray = itemsArray.filter((item) => item.category === filter);
    }

    if (sort !== "none" ){
        if (sort === "name"){
            itemsArray.sort((a,b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
        } else if (sort === "category") {
            itemsArray.sort((a,b) =>{
                let categoryA = a.category.toUpperCase();
                let categoryB = b.category.toUpperCase();
                if (categoryA < categoryB) return -1;
                if (categoryA > categoryB) return 1;
                return 0;
            });
        }
    } 

    const groupedItems = itemsArray.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) groups[category] = [];
        groups[category].push(item);
        return groups;},
        {});

    return(
        <section>
            <div>
                <div>
                <label className="text-2xl text-black"> Filter by:</label>
                    <select className="text-2xl text-black" onChange={handleFilterChange} value={filter}>
                        <option className="text-green-600" value="all">All category</option>
                        <option className="text-green-600" value="Dairy">Dairy</option>
                        <option className="text-green-600" value="Bakery">Bakery</option>
                        <option className="text-green-600" value="Produce">Produce</option>
                        <option className="text-green-600" value="Meat">Meat</option>
                        <option className="text-green-600" value="Canned goods">Canned Goods</option>
                        <option className="text-green-600" value="Dry goods">Dry Goods</option>
                        <option className="text-green-600" value="Household">HouseHold</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="text-2xl text-black">
                    Sort by:
                </label>
                <select className="text-2xl text-black" onChange={handleSortChange} value={sort}>
                    <option className="text-green-600" value="none">None</option>
                    <option className="text-green-600" value="name">Name</option>
                    <option className="text-green-600" value="category">Category</option>
                </select>

                {Object.keys(groupedItems).map((category) => (
                    <div key={category}>
                        <h3 className="text-amber-800">{category}</h3>
                        {groupedItems[category].map((item) => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
