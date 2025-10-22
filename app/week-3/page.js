import ItemList from "./item-list";

export default function Page(){

    return(
        <main className="bg-slate-400 p-8">
            <div>
                <h1 className="text-2xl font-bold text-white mb-4">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    )
}