import Button from "../Button";

const CallToAction = () => {
    return (
        <>
            <div className="flex justify-between mt-56">
                <p className="text-5xl font-semibold text-terniary text-left z-10">
                    Siap untuk <br /> mengembangkan bisnismu?
                </p>
                <div className="flex gap-x-6">
                    <Button variant="filldark">Hubungi Kami</Button>
                    <Button variant="outline">Pelajari lebih lanjut</Button>
                </div>
            </div>
        </>
    );
};

export default CallToAction;
