import { getLayout } from "@/layouts/default";
import Link from "next/link";

const Service = () => {
    return (
        <>
            {/* tailwind css   */}
            <script src="https://cdn.tailwindcss.com"></script>
            
            <section className="service container mx-auto py-8 px-6 h-auto">
                <div>
                    <h2 className="text-black font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
                        Services <span className="text-red-500">.</span>
                    </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
                            <div className="icon text-7xl pb-6 text-red-500">
                                {/* <FaFontAwesomeFlag /> */}
                            </div>
                            <div className="desc ">
                                <h3 className="font-bold text-2xl leading-8">Artifical Intelligence</h3>
                                <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
                            </div>
                        </div>
                        <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
                            <div className="icon text-7xl pb-6 text-red-500">
                                {/* <FaFontAwesomeFlag /> */}
                            </div>
                            <div className="desc ">
                                <h3 className="font-bold text-2xl leading-8">  Internet of Things</h3>
                                <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
                            </div>
                        </div>
                        <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
                            <div className="icon text-7xl pb-6 text-red-500">
                                {/* <FaFontAwesomeFlag /> */}
                            </div>
                            <div className="desc ">
                                <h3 className="font-bold text-2xl leading-8">Graphic Designer</h3>
                                <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
                            </div>
                        </div>
                        <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
                            <div className="icon text-7xl pb-6 text-red-500">
                                {/* <FaFontAwesomeFlag /> */}
                            </div>
                            <div className="desc ">
                                <h3 className="font-bold text-2xl leading-8"> Web Designer</h3>
                                <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
                            </div>
                        </div>
                        <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
                            <div className="icon text-7xl pb-6 text-red-500">
                                {/* <FaFontAwesomeFlag /> */}
                            </div>
                            <div className="desc ">
                                <h3 className="font-bold text-2xl leading-8">Machine Learning</h3>
                                <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
                            </div>
                        </div>
                        <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
                            <div className="icon text-7xl pb-6 text-red-500">
                                {/* <FaFontAwesomeFlag /> */}
                            </div>
                            <div className="desc ">
                                <h3 className="font-bold text-2xl leading-8">Web Development</h3>
                                <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

Service.getLayout = getLayout;
export default Service;