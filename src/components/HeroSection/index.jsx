import Card from "../Card";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-row w-full gap-x-12 mt-12">
                <div className="flex flex-col w-full gap-y-6 z-10">
                    <p className="text-secondary text-5xl font-semibold">
                        Menghadirkan{" "}
                        <span className="text-terniary text-8xl">Inovasi</span>{" "}
                        dalam Setiap{" "}
                        <span className="text-terniary text-7xl">
                            Solusi Bisnis
                        </span>
                    </p>
                    <div className="">
                        <p className="text-xl text-light text-justify">
                            Kami adalah perusahaan konsultan yang berdedikasi
                            untuk membantu perusahaan Anda mencapai kesuksesan.
                            Dengan pengalaman yang luas dalam berbagai bidang
                            industri, kami memiliki keahlian dan pengetahuan
                            untuk memberikan solusi yang tepat untuk bisnis
                            Anda. Kami berkomitmen untuk bekerja sama dengan
                            klien untuk mencapai tujuan yang diinginkan, dengan
                            pendekatan yang terintegrasi dan inovatif.
                        </p>
                    </div>
                    <img
                        src="./images/bg-hero.png"
                        alt="bg-hero"
                        className="mt-2"
                    />
                </div>
                <div className="flex w-full h-[450px] justify-end z-10">
                    <img
                        src="./images/hero-image-transparent.png"
                        alt="hero-image"
                        width={600}
                    />
                </div>
            </div>
            <div className="relative flex justify-center items-center text-2xl font-bold mt-32 z-10 gap-x-12 text-center">
                <Card className="bg-terniary hover:scale-110 transition-all hover:shadow-lg hover:shadow-light">
                    Analisis Bisnis
                </Card>
                <Card className="bg-secondary hover:scale-110 transition-all hover:shadow-lg hover:shadow-light">
                    Manajemen Proyek
                </Card>
                <Card className="bg-terniary hover:scale-110 transition-all hover:shadow-lg hover:shadow-light">
                    Strategi Bisnis
                </Card>
                <Card className="bg-secondary hover:scale-110 transition-all hover:shadow-lg hover:shadow-light">
                    Pengembangan Produk
                </Card>
                <Card className="bg-terniary hover:scale-110 transition-all hover:shadow-lg hover:shadow-light">
                    Manajemen Keuangan
                </Card>
            </div>
        </>
    );
};

export default HeroSection;
