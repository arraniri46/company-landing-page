import SolutionCard from "./SolutionCard/index.";

const Solutions = () => {
    return (
        <>
            <div className="flex flex-col mt-40 items-center h-full">
                <p className="text-5xl font-semibold text-terniary text-center">
                    Kami menawarkan solusi untuk <br /> setiap bisnis anda
                </p>
                <div className="flex flex-col w-full mt-32 gap-y-32">
                    <SolutionCard
                        title="Konsultasi Bisnis"
                        image="./images/asset-business.png"
                        className="self-start"
                    >
                        <p className="text-lg text-light font-semibold text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </SolutionCard>
                    <SolutionCard
                        title="Konsultasi Pajak"
                        image="./images/asset-pajak.png"
                        className="self-end flex-row-reverse"
                    >
                        <p className="text-lg text-light font-semibold text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </SolutionCard>
                    <SolutionCard
                        title="Konsultasi Keuangan"
                        image="./images/asset-keuangan.png"
                        className="self-start"
                    >
                        <p className="text-lg text-light font-semibold text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </SolutionCard>
                    <SolutionCard
                        title="Konsultasi Hukum"
                        image="./images/asset-hukum.png"
                        className="self-end flex-row-reverse"
                    >
                        <p className="text-lg text-light font-semibold text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </SolutionCard>
                </div>
            </div>
        </>
    );
};

export default Solutions;
