import AppLogo from "@/components/app-logo/app-logo";
import FormInput from "@/components/inputs/form-inputs";
import Link from "next/link";


export default function SignUpPage(){
    return (
        <div className="w-[100%] h-[100vh] ">
            <div className="w-[100%] h-[4em]  flex items-center">
                <AppLogo></AppLogo>
            </div>
            <div className="h-[calc(100%-4em)] w-[100%] flex justify-center items-center ">
                <form action="" className="">
                    <h1 className="font-[600] text-[1.6em] text-[var(--dark-blue)] text-center">Log In</h1>
                    <p className="font-[400] text-[.8em] text-center text-[var(--black)]">Welcome back to resturante app</p>
                    <FormInput placeholder="joe@example.com" label='email' type='email' />
                    <FormInput placeholder="12345678" label='password' type="password" />
                    <button className="bg-[var(--dark-blue)] mx-[auto] block p-[5px] px-[20px] rounded-[100px] font-[500] cursor-pointer my-[20px] text-[var(--white)]">Log In</button>
                    <Link className="text-center block text-[.8em]" href="/sign-up" >don't you have an account ?!</Link>
                </form>
            </div>
        </div>
    );
}