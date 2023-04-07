const Feedback = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-36">
                <p className="text-5xl font-semibold text-terniary text-center z-10">
                    Apa kata mereka tentang kami?
                </p>
                <div className="relative container flex justify-between bg-terniary mt-24 h-80 p-6 gap-x-6">
                    <div className="flex flex-col w-full border-4 border-primary p-8 items-center">
                        <div className="flex w-full items-center justify-start gap-x-2">
                            <div className="w-12 h-12 bg-primary rounded-full"></div>
                            <p className="text-xl font-semibold">John Doe</p>
                        </div>
                        <p className="font-semibold mt-8">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nam mollitia beatae blanditiis accusamus
                            quibusdam perferendis non velit vel, dolorum labore
                            deleniti commodi sed pariatur minima sapiente
                            obcaecati repellat fuga. Impedit?
                        </p>
                    </div>
                    <div className="flex flex-col w-full border-4 border-primary p-8 items-center">
                        <div className="flex w-full items-center justify-start gap-x-2">
                            <div className="w-12 h-12 bg-primary rounded-full"></div>
                            <p className="text-xl font-semibold">John Doe</p>
                        </div>
                        <p className="font-semibold mt-8">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nam mollitia beatae blanditiis accusamus
                            quibusdam perferendis non velit vel, dolorum labore
                            deleniti commodi sed pariatur minima sapiente
                            obcaecati repellat fuga. Impedit?
                        </p>
                    </div>
                    <div className="h-12 w-12 bg-secondary absolute -left-16 top-32 hover:shadow-lg hover:shadow-secondary hover:scale-110"></div>
                    <div className="h-12 w-12 bg-secondary absolute -right-16 top-32 hover:shadow-lg hover:shadow-secondary hover:scale-110"></div>
                </div>
            </div>
        </>
    );
};

export default Feedback;
