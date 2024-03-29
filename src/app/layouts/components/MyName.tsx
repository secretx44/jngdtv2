import Link from "next/link";

export default function MyName({myName}: {myName: string}) {
    return (
        <Link href="/">
            <span className="text-xl font-bold">{myName}</span>
        </Link>
    )
}