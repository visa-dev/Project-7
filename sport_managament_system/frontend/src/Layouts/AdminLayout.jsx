
import Header from '../component/common/Header.jsx';
import { addminNavLinks } from '../Assets/Data/HeaderItems.jsx';
import { socialLinks, quickLink01, quickLink02, quickLink03 } from '../Assets/Data/FooterItems';
import AdminRouter from '../routes/AdminRouter.jsx';
import Footer from '../component/common/Footer.jsx';

const AdminLayout = () => {
  return (
    <>
      
      <Header navLinks={addminNavLinks} role='/admin/home' />
      <main>
        <AdminRouter />
      </main>
      <Footer socialLinks={socialLinks} quickLink01={quickLink01} quickLink02={quickLink02} quickLink03={quickLink03} />
    </>

  )
}

export default AdminLayout