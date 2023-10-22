import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

function App() {
  // const currentPage = useLocation().pathname;
  const editmode = useSelector((store) => store.editmode.edit);
  console.log(editmode);
  // console.log(currentPage)

  return (
    // <main className={`${darkmode ? "dark" : ""}`}>
    <main className="main-content">
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
