
import homeimg from '../../Assets/Images/images/sportlogo.png';
import Header from '../../component/common/Header.jsx'
import Footer from '../../component/common/Footer.jsx'
import { addminNavLinks } from '../../Assets/Data/HeaderItems.jsx';
import { socialLinks, quickLink01, quickLink02, quickLink03 } from '../../Assets/Data/FooterItems.jsx';

const AdminHome = () => {

 
    
    return (
        <div>
            <Header navLinks={addminNavLinks} role='/admin/home' />
            <div className='bgImage border-b-2 border-gray-400  pb-[400px]' >
                <h1 className='font1 text-[100px] text-center font-[700]'>ADMIN HOME</h1>
                <img src={homeimg} alt="#" className='mx-auto block' />
               
            </div>
            <Footer socialLinks={socialLinks} quickLink01={quickLink01} quickLink02={quickLink02} quickLink03={quickLink03} />
        </div>

    )
}

export default AdminHome