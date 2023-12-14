
import Footer from '../component/common/Footer.jsx';
import Header from '../component/common/Header.jsx';
import UserRouter from '../routes/UserRouter.jsx';
import { socialLinks, quickLink01, quickLink02, quickLink03 } from '../Assets/Data/FooterItems';
import { userNavLinks } from '../Assets/Data/HeaderItems.jsx';

const UserLayout = () => {
  return (
    <>
      <Header navLinks={userNavLinks} role='/user/home' />
      <main>
        <UserRouter />
      </main>
      <Footer socialLinks={socialLinks} quickLink01={quickLink01} quickLink02={quickLink02} quickLink03={quickLink03} />
    </>
  )
}

export default UserLayout