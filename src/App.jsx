import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/headerComponent';
import Categories from './components/Categories';
import Collections from './components/Collections';
import Locations from './components/Locations';
import ZomatoMobile from './components/ZomatoMobileApp';
import MoreOptions from './components/MoreOptions';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
	return (
		<>
			<Header />
			<Categories />
			<Collections />
			<Locations />
			<ZomatoMobile />
			<MoreOptions />
			<Footer />
		</>
	);
}
export default App;
