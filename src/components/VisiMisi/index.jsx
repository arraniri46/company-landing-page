const VisiMisi = () => {
    return (
        <>
            <div className="flex flex-col mt-32">
                <p className="text-5xl font-semibold text-terniary text-center mb-24">
                    Visi misi kami
                </p>
                <div className="flex w-4/6 bg-secondary p-6 gap-x-2 rounded-lg">
                    <div className="flex flex-col">
                        <p className="text-3xl text-dark font-bold">Visi</p>
                        <p className="text-lg font-semibold mt-6 text-justify text-dark">
                            Visi kami adalah untuk membantu klien kami mencapai
                            hasil yang luar biasa dalam setiap aspek bisnis
                            mereka. Kami percaya bahwa inovasi dan kreativitas
                            adalah kunci untuk mencapai keberhasilan jangka
                            panjang.
                        </p>
                    </div>
                    <img
                        src="./images/visi-image.png"
                        alt="visi-image"
                        width={200}
                    />
                </div>

                <div className="flex justify-end mt-12">
                    <div className="absolute left-0">
                        <img src="./images/bg-pattern-1.png" alt="pattern" />
                    </div>
                    <div className="flex w-4/6 z-10 mt-12 gap-x-2">
                        <div className="w-full">
                            <img
                                src="./images/misi-image.png"
                                alt="visi-image"
                                width={200}
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-3xl text-terniary font-bold">
                                Misi
                            </p>
                            <p className="text-lg font-semibold text-light my-6 text-justify">
                                Misi kami adalah untuk membantu klien kami
                                mencapai hasil yang luar biasa dalam setiap
                                aspek bisnis mereka. Kami percaya bahwa inovasi
                                dan kreativitas adalah kunci untuk mencapai
                                keberhasilan jangka panjang.
                            </p>
                            <img
                                src="./images/bg-visimisi.png"
                                alt="bg-visimisi"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VisiMisi;
