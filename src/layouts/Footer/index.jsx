import Button from "../../components/Button";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col mt-24 p-6">
                <div className="flex flex-col border-t border-secondary">
                    <p className="text-2xl text-terniary font-bold pt-6 pb-12">
                        Your Logo
                    </p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-lg text-terniary font-semibold">
                                Contact
                            </p>
                            <p className="text-secondary">
                                yourbusinessemail@gmail.com
                            </p>
                        </div>
                        <ul className="flex flex-col text-secondary gap-y-2">
                            <p className="text-lg text-terniary font-semibold">
                                Navigation
                            </p>
                            <li className="hover:font-bold hover:transition-all hover:translate-x-1">
                                <a href="#">Home</a>
                            </li>
                            <li className="hover:font-bold hover:transition-all hover:translate-x-1">
                                <a href="#">Services</a>
                            </li>
                            <li className="hover:font-bold hover:transition-all hover:translate-x-1">
                                <a href="#">Portofolios</a>
                            </li>
                            <li className="hover:font-bold hover:transition-all hover:translate-x-1">
                                <a href="#">Team</a>
                            </li>
                        </ul>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg text-terniary font-semibold">
                                Newsletter
                            </p>
                            <div className="flex gap-x-2">
                                <input type="text" className="p-2" />
                                <button className="p-2 bg-terniary text-dark font-semibold hover:shadow-md hover:shadow-terniary/60 hover:scale-110 transition-all">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-1 justify-between mt-6 bg-terniary">
                <p className="text-sm text-dark font-semibold">
                    Copyright 2023. Garda Arraniri. All Rights Reserved
                </p>
                <p className="text-sm text-dark font-semibold">Media:</p>
            </div>
        </>
    );
};

export default Footer;
