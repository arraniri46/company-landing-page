import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ props, children }) => {
    return (
        <>
            <Header />
            <img
                src="./images/bg-pattern-2.png"
                alt="gradient"
                className="absolute right-0 mt-36"
                width={700}
            />
            {/* <div className="absolute right-0 w-[500px] h-[850px] bg-secondary rounded-bl-[128px] bg-gradient-to-r from-primary to-secondary"></div> */}
            <div className="container max-w-7xl h-max mx-auto">
                <div>{children}</div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
