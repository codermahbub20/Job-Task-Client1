import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { saveUser } from "../../Hook/saveUser";



const LogIn = () => {

    const { signIn, signInWithGoogle, } = useAuth()
    const navigate = useNavigate()
    const handleLogIn = async e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {

            const result = await signIn(email, password)
            console.log(result)
            //4. save user data in database
            const dbResponse = await saveUser(result?.user)
            console.log(dbResponse)
            result.user.email
            navigate("/")
            toast.success('SignUp Successful')


        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    // Google sign in

    const handleGoogleSignIn = async () => {
        try {

            //2. User Registration
            const result = await signInWithGoogle()
            console.log(result)
            //4. save user data in database
            const dbResponse = await saveUser(result?.user)
            console.log(dbResponse)
            result.user.email
            navigate('/')
            toast.success('SignUp Successful')


        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }



    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.sodapdf.com/blog/wp-content/uploads/2021/05/Best-Project-Management-Tools-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <div className='flex justify-center items-center min-h-screen'>
                        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                            <div className='mb-8 text-center'>
                                <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                                <p className='text-sm text-gray-400'>
                                    Sign in to access your account
                                </p>
                            </div>
                            <form onSubmit={handleLogIn}
                                noValidate=''
                                action=''
                                className='space-y-6 ng-untouched ng-pristine ng-valid'
                            >
                                <div className='space-y-4'>
                                    <div >
                                        <div className='flex justify-start'>
                                            <label htmlFor='email' className='block mb-2 text-lg'>
                                                Email address
                                            </label>
                                        </div>
                                        <input
                                            type='email'
                                            name='email'
                                            id='email'
                                            required
                                            placeholder='Enter Your Email Here'
                                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#FF3811] bg-gray-200 text-gray-900'
                                            data-temp-mail-org='0'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex justify-between'>
                                            <label htmlFor='password' className='text-lg mb-2'>
                                                Password
                                            </label>
                                        </div>
                                        <input
                                            type='password'
                                            name='password'
                                            autoComplete='current-password'
                                            id='password'
                                            required
                                            placeholder='*******'
                                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#FF3811] bg-gray-200 text-gray-900'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type='submit'
                                        className='bg-[#FF3811] w-full rounded-md py-3 text-white'
                                    >
                                        Continue
                                    </button>
                                </div>
                            </form>
                            <div className='space-y-1'>
                                <button className='text-xs hover:underline hover:text-[#FF3811] text-gray-400'>
                                    Forgot password?
                                </button>
                            </div>
                            <div className='flex items-center pt-4 space-x-1'>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                                <p className='px-3 text-sm dark:text-gray-400'>
                                    Login with social accounts
                                </p>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            </div>
                            <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                            </div>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Don&apos;t have an account yet?{' '}
                                <Link
                                    to='/signup'
                                    className='hover:underline hover:text-[#FF3811] text-gray-600'
                                >
                                    Sign up
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;