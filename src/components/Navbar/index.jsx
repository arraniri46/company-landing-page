import Button from "../Button";

const Navbar = () => {
    return (
        <>
            <div className="flex w-full h-full items-center justify-between">
                <p className="font-bold text-2xl text-terniary">Your Logo</p>
                <div className="flex gap-x-6 items-center">
                    <ul className="flex text-light gap-x-6">
                        <li className="hover:text-terniary">
                            <a href="/#">Home</a>
                        </li>
                        <li className="hover:text-terniary">
                            <a href="/#">Our Services</a>
                        </li>
                        <li className="hover:text-terniary">
                            <a href="/#">Portofolio</a>
                        </li>
                        <li className="hover:text-terniary">
                            <a href="/#">Testimony</a>
                        </li>
                        <li className="hover:text-terniary">
                            <a href="/#">Our Team</a>
                        </li>
                    </ul>
                    <Button variant="filldark">Contact Us</Button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
