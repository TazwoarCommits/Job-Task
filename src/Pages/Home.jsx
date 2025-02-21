import Banner from "../components/Banner";
import OverView from "../components/OverView";
import SectionTitle from './../components/SectionTitle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section>
                <SectionTitle title="Manage Your Daily Tasks"></SectionTitle>
                <OverView></OverView>
            </section>
        </div>
    );
};

export default Home;