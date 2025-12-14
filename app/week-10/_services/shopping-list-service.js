import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

export async function getItems(userId) {
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const q = query(itemsCollectionRef);

    try {
        const querySnapshot = await getDocs(q);
        const items = [];
        
        querySnapshot.forEach((doc) => {
            items.push({ 
                id: doc.id, 
                ...doc.data() 
            });
        });

        return items;
    } catch (error) {
        console.error("Error fetching items: ", error);
        return [];
    }
}

export async function addItem(userId, item) {
    const itemsCollectionRef = collection(db, `users/${userId}/items`);

    try {
        const docRef = await addDoc(itemsCollectionRef, item);
        
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
    }
}