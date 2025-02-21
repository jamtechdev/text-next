import { letLayout } from "@/layouts/reverse";
import React, { useState } from 'react';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ReCAPTCHA from 'react-google-recaptcha-v3';


const Contact = ({ Component, pageProps }: any) => {
    const [token, setToken] = useState(null);
    return (
        <>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"> */}

            <div className="container mx-auto my-20 w-1/3 border border-purple-500 bg-white">
                <div className="p-5 space-y-5 shadow-xl">
                    <h4 className="text-center text-3xl">Contact Us</h4>

                    <form>
                        <div className="grid grid-cols-2 gap-5">
                            <input
                                type="text"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                                placeholder="Last Name"
                            />
                            <input
                                type="email"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                                placeholder="Email"
                            />
                            <input
                                type="tel"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                                placeholder="Phone"
                            />
                            <textarea
                                // cols="10"
                                // rows="5"
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>
                        {/* <GoogleReCaptchaProvider
                            reCaptchaKey="6LfJB1cpAAAAAPsK36iD-9Kmwp2Wy9JgG51HfDkn"
                            scriptProps={{
                                async: false,
                                defer: false,
                                appendTo: "head",
                                nonce: undefined,
                            }}
                        >
                            <Component {...pageProps} />
                        </GoogleReCaptchaProvider> */}
                        <button
                            type="submit"
                            className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
                        >Send Me Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}
Contact.getLayout = letLayout;
export default Contact;