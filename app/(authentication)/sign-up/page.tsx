'use client';
import { createUser } from "@/actions/userActions";
import AppLogo from "@/components/app-logo/app-logo";
import FormInput from "@/components/inputs/form-inputs";
import Link from "next/link";
import { useActionState, useState } from "react";


export default function SignUpPage(){
    const [name,setName] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [formState, formAction] = useActionState(createUser, {});
    const validationErrors = formState.errors as string;

    return (
        <div className="w-[100%] h-[100vh] ">
            <div className="w-[100%] h-[4em]  flex items-center">
                <AppLogo></AppLogo>
            </div>
            <div className="h-[calc(100%-4em)] w-[100%] flex justify-center items-center relative">
                <form action={formAction} className="">
                    <h1 className="font-[600] text-[1.6em] text-[var(--dark-blue)] text-center">Sign Up</h1>
                    <p className="font-[400] text-[.8em] text-center text-[var(--black)]">Join the best resturante app</p>
                    <FormInput value={name} setValue={(event)=>setName(event.target.value)} name='name' placeholder="joe" label='name' />
                    <FormInput value={email} setValue={(event)=>setEmail(event.target.value)} name='email' placeholder="joe@example.com" label='email' type='email' />
                    <FormInput value={password} setValue={(event)=>setPassword(event.target.value)} name='password' placeholder="*********" label='password' type="password" />
                    <button className="bg-[var(--dark-blue)] mx-[auto] block p-[5px] px-[20px] rounded-[100px] font-[500] cursor-pointer my-[20px] text-[var(--white)]">Sign Up</button>
                    <Link className="text-center block text-[.8em]" href="/log-in" >already have account ?!</Link>
                    {
                        validationErrors &&
                        <p className="text-center text-[tomato] block mx-[auto] text-[.9em] py-[5px] max-w-[14.16em] ">{ validationErrors }</p>
                    }
                </form>
            </div>
        </div>
    );
}