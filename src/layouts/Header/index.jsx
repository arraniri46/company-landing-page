import Navbar from "../../components/Navbar";

const Header = () => {
    return (
        <>
            <div className="w-full h-20 px-6 sticky top-0 z-20 bg-primary">
                <Navbar />
            </div>
        </>
    );
};

export default Header;
