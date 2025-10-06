import Link from "next/link";



export default function AppLogo({href='/'}:{
    href?: string,
}){
    return (
        <Link href={href} className="font-[700] text-[1.6em] text-[var(--dark-blue)]">Resturant Logo</Link>
    );
}