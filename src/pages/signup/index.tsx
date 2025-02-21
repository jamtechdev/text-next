import { letLayout } from "@/layouts/reverse"

const SignUp = () => {
    return (
        <>
            <div className="signup-1 flex items-center relative h-screen">
                <div className="overlay absolute inset-0 z-0 bg-black opacity-75"></div>
                <div className="container px-4 mx-auto relative z-10">
                    <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
                        <div className="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600">
                            <h2 className="text-3xl text-gray-800 text-center">Create Your Account</h2>

                            <div className="signup-form mt-6 md:mt-12">

                                <div className="border-2 border-solid rounded flex items-center mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                                        <span className="far fa-user text-gray-500"></span>
                                    </div>
                                    <div className="flex-1">
                                        <input type="text" placeholder="Username" className="h-10 py-1 pr-3 w-full" />
                                    </div>
                                </div>

                                <div className="border-2 border-solid rounded flex items-center mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                                        <span className="far fa-envelope text-gray-500"></span>
                                    </div>
                                    <div className="flex-1">
                                        <input type="text" placeholder="E-mail" className="h-10 py-1 pr-3 w-full" />
                                    </div>
                                </div>

                                <div className="border-2 border-solid rounded flex items-center mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                                        <span className="fas fa-asterisk text-gray-500"></span>
                                    </div>
                                    <div className="flex-1">
                                        <input type="password" placeholder="Password" className="h-10 py-1 pr-3 w-full" />
                                    </div>
                                </div>

                                <p className="text-sm text-center mt-6">By signing up, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a></p>

                                <div className="text-center mt-6 md:mt-12">
                                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">Sign Up <span className="far fa-paper-plane ml-2"></span></button>
                                </div>

                            </div>

                            <div className="border-t border-solid mt-6 md:mt-12 pt-4">
                                <p className="text-gray-500 text-center">Already have an account, <a href="#" className="text-indigo-600 hover:underline">Sign In</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
SignUp.getLayout = letLayout;
export default SignUp;