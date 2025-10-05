import { headerClass } from "@/styles/tailwind-classes";

import AppLogo from "../app-logo/app-logo";
import Link from "next/link";


export default function LandingPageHeader(){
    return (
        <header className={headerClass+ ''} >
            <AppLogo />
            <ul className="flex justify-between items-center ">
                <li className="px-[10px]"> <Link href='/home' >Home</Link> </li>
                <li className="px-[10px]"> <Link href='/home' >Home</Link> </li>
                <li className="px-[10px]"> <Link href='/home' >Home</Link> </li>
                <li className="px-[10px]"> <Link href='/home' >Home</Link> </li>
            </ul>
            <ul className='flex justify-between items-center '>
                <li className="px-[10px]"><Link href='/log-in' className="">log in</Link></li>
                <li className="px-[10px]"><Link href='/sign-up' >sign up</Link></li>
            </ul>
        </header>
    );
}