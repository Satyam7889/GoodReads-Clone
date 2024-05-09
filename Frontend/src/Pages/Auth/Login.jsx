
import { useState } from 'react';
import App from './../../App';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from 'Redux/Slices/AuthSlice';
import { useDispatch } from 'react-redux';
function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [signinDetails, setSigninDetails] = useState({
        email: '',
        password: '',
    })

    function handleFormChange(e){
        const {name, value} = e.target
        setSigninDetails({
            ...signinDetails,
            [name]: value
        })
    }

    function resetForm(){
        setSigninDetails({
            email: '',
            password: '',
        })
    }

   async function onFormSubmit(e){
    e.preventDefault();
    console.log(signinDetails);
    const response = await dispatch(signin(signinDetails))

    if(response?.payload?.data){
        navigate("/")
    }
    resetForm();
   }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      
        <div>
            <h1 className="text-white text-5xl">Login to your account</h1>
        </div>
        <div className=' mt-4'>
            <p className='text-white'>
                Don't have an account ?
                <Link to="/register">
                <button className='btn btn-success rounded-md px-2 mx-5 hover:bg-green-500'>
                    SIGN UP
                </button>
                </Link>
            </p>
        </div>
        <div className='w-full'>
            <form onSubmit={onFormSubmit} className='flex flex-col justify-center items-center w-3/4 mx-auto' autoComplete='off'>

                <div className='my-5 w-1/3 text-black'>
                    <input 
                    autoComplete='off'
                    type="email" 
                    placeholder='email...'
                    className='px-8 py-3 bg-white w-full'
                    name='email'
                    onChange={handleFormChange}
                    value={signinDetails.email}
                    />
                </div>
                <div className='my-5 w-1/3 text-black'>
                    <input 
                    autoComplete='off'
                    type="password" 
                    placeholder='password...'
                    className='px-8 py-3 bg-white w-full'
                    name='password'
                    onChange={handleFormChange}
                    value={signinDetails.password}
                    />
                </div>
                <div className='my-5 w-1/3'>
                <button className='btn btn-success rounded-md px-2 w-full hover:bg-green-500' type="submit">
                    SUBMIT
                </button>
                </div>
                

            </form>
        </div>

    </div>
  )
}

export default Login
