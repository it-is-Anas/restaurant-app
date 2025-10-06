import UserHeader from "@/components/app-header/user-header";
import FormInput from "@/components/inputs/form-inputs";
import ProductCart from "@/components/product-card/product-card";
import { btnClass, btnsClass, productBoxClass } from "@/styles/tailwind-classes";

export default function Home(){
    return (
    <>
        <UserHeader />
        {/* <h1 className="font-[600] text-[1.6em] text-[var(--dark-pink)] px-[5px]">Create Product:</h1> */}
        <div className="w-[100%] h-[calc(100%-6.9em)] flex justify-center items-center">
            <form action="" className="">
                <h1 className="font-[600] text-[1.6em] text-[var(--dark-blue)] text-center">Create a product</h1>
                <p className="font-[400] text-[.8em] text-center text-[var(--black)]">Join the best resturante app</p>
                <FormInput label="title" placeholder="new product " />
                <FormInput label="price" placeholder="44$" />
                <FormInput label="image" placeholder="upload a file " type="file" />
                <div className="flex justify-end items-center">
                    <button className={btnsClass[1]} >Clear</button>
                    <button className={btnsClass[0]} >Create</button>
                </div>
            </form>
        </div>
    </>
    );
}