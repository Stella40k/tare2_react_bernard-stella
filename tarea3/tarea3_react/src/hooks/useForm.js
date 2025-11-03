import { useState } from "react";
export const useForm = (initialValues)=>{
    const [form, setForm] = useState(initialValues);
    
    const handleChange = (event) =>{
        const{name, value} = event.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleReset = ()=>{
        setForm(initialValues);
    };
    return{
        form,
        handleChange,
        handleReset
    };
};