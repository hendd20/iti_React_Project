import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './form.css';

function FormValidation() {

const intialData = {
    email : "",
    password : "",
    age : "",

};

const passRef = useRef(null);
const ageRef = useRef(null);

const[formData , setFormData ] = useState({...intialData });

const [err , setErr]=useState({
    email : null,
    password : null,
    age : null,
});


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const inputHandler = (e) => {
    if(e.target.name === "email" && !emailRegex.test(e.target.value)){
        setErr({
            ...err,
            email :`Email should have format like name@email.com`,
        });
    }
    else if (e.target.name === "age" && e.target.value < 18){
    setErr({
        ...err,


    });
}
    else if (e.target.name === "password" && e.target.value.length <= 8){

        setErr({
    
            ...err,
                password : `Password Should be more than 8 characters `,      
            

            
        });

    }


else{
    setErr({
        ...err,
        [e.target.name]: null,
    });
}
setFormData({
    ...formData,
    [e.target.name]: e.target.value,
});
};

const submitHandler =(e) => {
    e.preventDefault();

    if (  !err.email && 
        !err.age &&
        !err.password &&
        emailRegex.test(formData.email) &&
        formData.age >=18 && 
        formData.password.length > 8 )
    {
        setFormData({
            ...intialData,
        });
        alert("The input is correct ");
    }
    else{
        alert("The input is wrong , try again");
    }
};

    return (

    <Form
    className='form w-50 text-center m-auto my-5 p-3 shadow rounded-3 bg-'
    onSubmit={submitHandler}
    >

    <Form.Group className="mb-3 pt-3" controlId="formGroupEmail">
        <Form.Control 
        type="email" 
        name="email"
        placeholder="Enter email"
        className='p-2 text-dark shadow mb-2'
        onChange={inputHandler}
        value={formData.email}  />
        <Form.Text
        className={err.email ? "bg-warning fs-5 p-1 rounded-3 text-light" : "text-muted"}
        >
            {
                err.email 
                ? err.email 
                : "Never share your email "
            }
        </Form.Text>
    </Form.Group>


    <Form.Group 
    ref={passRef}
    className="mb-3" 
    controlId="formGroupPassword"
    >
        <Form.Label></Form.Label>
        <Form.Control 
        type="password" 
        name="password"
        value={formData.password}
        onChange={inputHandler}
        placeholder="Enter Password"
        className='p-2 text-dark shadow mb-2' 
         />
         <Form.Text 
          className={err.password ? "bg-warning fs-5 rounded-2 text-light" : "text-muted"}>
            {
                err.password 
                ? err.password 
                : " Password must be more 8 character"
            }
         </Form.Text>
        <Form.Text className="text-muted"></Form.Text>
    </Form.Group>



    {/* <Form.Group 
    className="mb-3" controlId="formGroupPassword"
    ref={ageRef}
    >
        <Form.Label></Form.Label>
        <Form.Control 
        type="number" 
        name="age"
        placeholder="Enter Your Age"
        className='p-2 text-dark shadow mb-2' 
        value={formData.age}
        onChange={inputHandler}
         />
         <Form.Text className={err.age ? "bg-warning fs-5 rounded-2 text-light" : "text-muted"}>
            {
                err.age 
                ? err.age 
                : " Your Age must be more than 18"
            }
         </Form.Text>
    </Form.Group> */}



    <Button 
    variant="outline-dark"
    className='shadow mt-3'
    type='submit'
    >
        Submit
    </Button>

    </Form>
  );
}

export default FormValidation;