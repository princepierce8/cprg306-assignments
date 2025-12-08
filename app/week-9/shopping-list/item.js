
export default function Item({name, quantity, category, onSelect}){

    return(
        <li className="bg-slate-800 border-slate-700 rounded-lg p-4 mb-4 text-white inline-block w-190 cursor-pointer hover:bg-slate-700" onClick={ () => onSelect(name)}>
            <h4 className="text-2xl font-bold">
                {name}
            </h4>
            <p className="text-sm text-gray-400">
                Buy {quantity} in {category}
            </p>
        </li>

    );
}