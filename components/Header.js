import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-gray-700 text-white p-4 mb-3">
        <Link href="/" passHref>
          <h2>Job Post App</h2>
        </Link>
      </div>
    </header>
  );
}
