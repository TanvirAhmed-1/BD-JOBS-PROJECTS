
import NavSlider from '../components/NavSlider';
import Jobs from './Home/jobs';

const Home = () => {
    return (
        <div>
        <section>
            <NavSlider></NavSlider>
        </section>
        <section>
            <Jobs></Jobs>
        </section>
        </div>
    );
};

export default Home;