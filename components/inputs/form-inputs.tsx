import React from "react";



export default function FormInput({placeholder,type='text',label , name='',value='',setValue=()=>{}}:{
    placeholder?: string,
    type?: string,
    label?: string,
    name?: string,
    value?: string,
    setValue?: ()=>void
}){
    return (
        <div className="flex flex-col my-[5px]">
            <label htmlFor="" className="text-[.8em] font-[500] px-[2.5px] py-[5px]">{label}</label>
            <input value={value} onChange={setValue} type={type} name={name} className="bg-[var(--white)] border-none outline-none px-[1em] py-[5px] rounded-[20px]" placeholder={placeholder} />
        </div>
    );
}