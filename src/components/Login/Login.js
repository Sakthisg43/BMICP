import Form from '../Form/Form'
import Images from '../../../public/Assets/img';
import { useState } from 'react';
import Image from 'next/image';


function Login() {


    const [type,setType]=useState('password')
    const [showPassword,setShowPassword]=useState(Images);

    const heading="Edit Admin";
    const buttonHead="Update"
    const fields = [
    
        
         { name: 'email',placeholder:"Email", type: 'email' },
         { name: 'password',placeholder:"Password", type: type },
    ];

    const handleSubmit = formData => {
        console.log(formData);
    };


    return (
        <div>
            {console.log("done")}

            <Form fields={fields} onSubmit={handleSubmit} heading={heading} buttonHead={buttonHead} Show={{showPassword}}/>
            

        </div>

    );
}

export default Login;