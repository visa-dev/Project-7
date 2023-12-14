
import Footer from '../component/common/Footer.jsx';
import Header from '../component/common/Header.jsx';
import CoatchRouter from '../routes/CoatchRouter.jsx';
import { coatchNavLinks } from '../Assets/Data/HeaderItems.jsx';
import { socialLinks, quickLink01, quickLink02, quickLink03 } from '../Assets/Data/FooterItems';
const CoatchLayout = () => {
  return (
    <>
      <Header navLinks={coatchNavLinks} role='/coatch/home' />
      <main>
        <CoatchRouter />
      </main>
      <Footer socialLinks={socialLinks} quickLink01={quickLink01} quickLink02={quickLink02} quickLink03={quickLink03} />
    </>
  )
}

export default CoatchLayout