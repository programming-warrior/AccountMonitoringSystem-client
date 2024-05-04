import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen  justify-between p-24">
      <Link className="border border-gray-400 w-fit h-fit py-2 px-4 rounded hover:bg-black hover:text-white transition-all"href="/login">Login</Link>
      <Link className="border border-gray-400 w-fit h-fit py-2 px-4 rounded transition-all  hover:bg-black hover:text-white" href="/register">Register</Link>
    </main> 
  );
}
