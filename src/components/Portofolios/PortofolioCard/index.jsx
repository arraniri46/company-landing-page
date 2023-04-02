const PortofolioCard = ({ children }) => {
    return (
        <>
            <div className="flex flex-col items-center text-center gap-y-6 border-2 border-terniary rounded-lg p-4 hover:shadow-lg hover:shadow-secondary/60 hover:-translate-y-4 transition-all">
                {children}
            </div>
        </>
    );
};

export default PortofolioCard;
