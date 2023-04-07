import CallToAction from "../../components/CallToAction";
import Feedback from "../../components/Feedback";
import HeroSection from "../../components/HeroSection";
import Portofolios from "../../components/Portofolios";
import Solutions from "../../components/Solutions";
import Team from "../../components/Team";
import VisiMisi from "../../components/VisiMisi";
import Layout from "../../layouts/Layout";

const Home = () => {
    return (
        <>
            <Layout>
                <div>
                    <div>
                        <HeroSection />
                    </div>
                    <div>
                        <VisiMisi />
                    </div>
                    <div>
                        <Solutions />
                    </div>
                    <div>
                        <Portofolios />
                    </div>
                    <div>
                        <Team />
                    </div>
                    <div>
                        <Feedback />
                    </div>
                    <div>
                        <CallToAction />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Home;
