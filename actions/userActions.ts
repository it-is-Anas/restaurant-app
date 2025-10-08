'use server';

import connectDB from "@/lib/mongodb";
import User from '@/lib/models/User';
import bcrypt from 'bcrypt';

export async function createUser(prevState: any,formData : FormData){
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    const nameRegex = /^[a-zA-Z]{3,8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^\d{8,10}$/;

    if(!nameRegex.test(name)){
        return {
            errors: 'name is not valid'
        };
    }
    
    if(!emailRegex.test(email)){
        return {
            errors: 'email is not valid'
        };
    }

    if(!passwordRegex.test(password)){
        return {
            errors: 'password is not valid'
        };
    }

    try{
        const users = await User.find({email});
        if(users.length){
            return{
                errors: 'this email is already exist',
            };
        }
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        await connectDB();
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        // create a session 
        return{
            message: 'user created successfully',
        };


    }catch(err){
        return {
            errors: 'somthing went wrong'
        };
    }

}


