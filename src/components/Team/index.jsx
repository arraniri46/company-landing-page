const Team = () => {
    const teams = [
        {
            id: 1,
            img: "./teams/team-1.png",
            name: "John Constantine",
        },
        {
            id: 2,
            img: "./teams/team-2.png",
            name: "John Constantine",
        },
        {
            id: 3,
            img: "./teams/team-3.png",
            name: "John Constantine",
        },
        {
            id: 5,
            img: "./teams/team-5.png",
            name: "Jane Constantine",
        },
        {
            id: 6,
            img: "./teams/team-6.png",
            name: "Jane Constantine",
        },
    ];

    return (
        <>
            <div className="flex flex-col mt-40 justify-center gap-y-24 ">
                <div className="flex flex-col">
                    <p className="text-5xl font-semibold text-terniary text-center z-10">
                        Team kami
                    </p>
                    <p className="text-light text-center mt-6 text-xl font-semibold">
                        The innovative core team of your business name
                    </p>
                </div>
                <div className="flex w-full justify-between">
                    {teams.map((team) => (
                        <div
                            key={team.id}
                            className="flex flex-col items-center justify-between"
                        >
                            <img src={team.img} alt="team-img" width={120} />
                            <p className="text-lg text-light font-semibold mt-6">
                                {team.name}
                            </p>
                            <span className="flex gap-x-2 items-center">
                                <img
                                    src="./linkedin.png"
                                    alt="linkedin-icon"
                                    width={20}
                                />
                                <a
                                    href="#"
                                    className="text-blue-300 text-sm underline"
                                >
                                    yourlinkedinprofile
                                </a>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Team;
