import React from 'react';
import Form from '../Form/Form'


function CreateOperator() {

    const heading="Create New Operator"
    const buttonHead="Done"
    const fields = [
        { name: 'firstname', label: 'Enter First Name',placeholder:"Enter Name", type: 'text' },
        { name: 'lastname', label: 'Enter Last Name',placeholder:"Enter Name", type: 'text' },
        { name: 'organizationname', label: 'Organization name',placeholder:"Enter Organization", type: 'text' },
        { name: 'email', label: 'Enter email id',placeholder:"Enter email id", type: 'email' },
        { name: 'confrimmailid', label: 'Confrim email id',placeholder:"Enter email id", type: 'email' },
    ];

    const handleSubmit = formData => {
        console.log(formData);
    };

    return (
        <div>
            {console.log("done")}

            <Form fields={fields} onSubmit={handleSubmit} heading={heading} buttonHead={buttonHead}/>
        </div>

    );
}

export default CreateOperator;