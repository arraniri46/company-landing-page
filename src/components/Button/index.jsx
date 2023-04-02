const Button = ({ children, variant, className }) => {
    const variants = {
        filldark: "px-4 bg-terniary text-dark rounded-sm",
        filllight: "px-4 bg-secondary text-dark rounded-sm",
        outline: "px-4 border border-terniary text-terniary rounded-sm",
    };

    const pickedVariant = variants[variant];

    const addClassName = className ? `${className}` : "";

    return (
        <>
            <button
                className={`h-14 text-lg font-bold hover:shadow-md hover:shadow-terniary/60 hover:scale-110 transition-all ${pickedVariant} ${addClassName}`}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
