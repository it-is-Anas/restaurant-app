import { headerClass } from "@/styles/tailwind-classes";

import AppLogo from "../app-logo/app-logo";
import Link from "next/link";


export default function UserHeader(){
    return (
        <header className={headerClass+ ''} >
            <AppLogo href='/home' />
            <ul className='flex justify-between items-center '>
                <li className="px-[10px]"> <Link href='/create-product' >create product</Link> </li>
                <li className="px-[10px]"><Link href='/cart' className="">cart</Link></li>
                <li className="px-[10px]"><Link href='/log-in' >log out</Link></li>
            </ul>
        </header>
    );
}