
import ItemList from './item-list';

export default function Page(){
    return(
        <main className="bg-slate-400 p-8">
            <h1 className="text-5xl font-bold text-white mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}