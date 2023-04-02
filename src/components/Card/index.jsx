const Card = ({ children, className }) => {
    const addClassName = className ? `${className}` : " ";

    return (
        <>
            <div
                className={`flex justify-center items-center w-60 h-28 rounded-lg ${addClassName}`}
            >
                {children}
            </div>
        </>
    );
};

export default Card;
