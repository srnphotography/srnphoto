import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/10">
        <Image
          src="https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/434977858_920154906785150_3660562040701610950_n.jpg"
          alt="SRN Photography"
          fill
          className="object-cover"
          priority
        />
      </div>
      <span className="text-lg font-bold">SRN Photography</span>
    </Link>
  );
}