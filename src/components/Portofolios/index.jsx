import PortofolioCard from "./PortofolioCard";

const Portofolios = () => {
    return (
        <>
            <div className="flex flex-col mt-40 items-center h-full z-10">
                <img
                    src="./images/bg-pattern-2.png"
                    alt="bg-pattern"
                    width={900}
                    className="absolute right-0"
                />
                <p className="text-5xl font-semibold text-terniary text-center z-10">
                    Portofolio Kami
                </p>
                <div className="flex mt-24 gap-x-6 z-10">
                    <PortofolioCard>
                        <p className="text-2xl text-secondary font-semibold">
                            Analisis Bisnis dan Penyempurnaan Proses Bisnis
                        </p>
                        <p className="text-base text-justify text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias amet provident delectus dolor
                            consequuntur odio, nulla maiores est. Ad ipsam aut
                            ipsa. Obcaecati fuga quam doloremque rem natus velit
                            reiciendis.
                        </p>
                        <div className="flex items-center text-light gap-x-2 self-start bg-terniary/80 px-2 py-1 rounded">
                            <div className="bg-primary w-8 h-8 rounded-full"></div>
                            <p>Garda Arraniri</p>
                        </div>
                    </PortofolioCard>
                    <PortofolioCard>
                        <p className="text-2xl text-secondary font-semibold">
                            Implementasi Infrastruktur Teknologi Informasi
                        </p>
                        <p className="text-base text-justify text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias amet provident delectus dolor
                            consequuntur odio, nulla maiores est. Ad ipsam aut
                            ipsa. Obcaecati fuga quam doloremque rem natus velit
                            reiciendis.
                        </p>
                        <div className="flex items-center text-light gap-x-2 self-start bg-terniary/80 px-2 py-1 rounded">
                            <div className="bg-primary w-8 h-8 rounded-full"></div>
                            <p>Garda Arraniri</p>
                        </div>
                    </PortofolioCard>
                    <PortofolioCard>
                        <p className="text-2xl text-secondary font-semibold">
                            Analisis Pasar dan Pengembangan Produk
                        </p>
                        <p className="text-base text-justify text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias amet provident delectus dolor
                            consequuntur odio, nulla maiores est. Ad ipsam aut
                            ipsa. Obcaecati fuga quam doloremque rem natus velit
                            reiciendis.
                        </p>
                        <div className="flex items-center text-light gap-x-2 self-start bg-terniary/80 px-2 py-1 rounded">
                            <div className="bg-primary w-8 h-8 rounded-full"></div>
                            <p>Garda Arraniri</p>
                        </div>
                    </PortofolioCard>
                </div>
            </div>
        </>
    );
};

export default Portofolios;
