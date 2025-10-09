import { useFormStatus } from "react-dom";


export default function FormBtn(){
    const {pending } = useFormStatus();
    if(pending){
        return <button className="bg-[var(--gray)] mx-[auto] block p-[5px] px-[20px] rounded-[100px] font-[500] cursor-pointer my-[20px] text-[var(--dark-blue)] font-[700]">Loading ...</button>;
    }
    return <button className="bg-[var(--dark-blue)] mx-[auto] block p-[5px] px-[20px] rounded-[100px] font-[500] cursor-pointer my-[20px] text-[var(--white)]">Sign Up</button>;
}