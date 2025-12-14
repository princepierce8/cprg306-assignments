import Link from "next/link";

export default function Home(){

  let linkStyles = "text-cyan-600 hover:underline hover:text-blue-300";


  return(
    <main>

    <h1 className="text-3xl">cprg306assignments</h1>

    <ul>

      <li> <Link className= {linkStyles} href="./week-3"> Week 3 - Components and Props </Link> </li>

      <li> <Link className= {linkStyles} href="./week-4"> Week 4 - Basic Interactivity </Link> </li>

      <li> <Link className= {linkStyles} href="./week-5"> Week 5 - Interactivity with forms </Link> </li>

      <li> <Link className= {linkStyles} href="./week-6"> Week 6 - Handling Lists </Link> </li>

      <li> <Link className= {linkStyles} href="./week-7"> Week 7 - Managing State </Link> </li>

      <li> <Link className= {linkStyles} href="./week-8"> Week 8 - Fetching Data </Link> </li>

      <li> <Link className= {linkStyles} href="./week-9"> Week 9 - Firebase Auth </Link> </li>

      <li> <Link className= {linkStyles} href="./week-10"> Week 10 - Cloud Firestore </Link> </li>

    </ul>

    </main>
  );
}