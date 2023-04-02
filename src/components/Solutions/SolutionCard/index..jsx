const SolutionCard = ({ className, image, children, title }) => {
    const addClassName = className ? `${className}` : "";

    return (
        <>
            <div
                className={`flex w-full justify-center gap-x-56 ${addClassName}`}
            >
                <img src={image} alt="asset" width={400} />
                <div className="flex flex-col">
                    <p className="text-4xl text-secondary font-semibold mb-8">
                        {title}
                    </p>
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
};

export default SolutionCard;
