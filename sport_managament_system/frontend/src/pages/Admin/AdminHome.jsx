
import homeimg from '../../Assets/Images/images/sportlogo.png';
import Header from '../../component/common/Header.jsx'
import Footer from '../../component/common/Footer.jsx'
import { addminNavLinks } from '../../Assets/Data/HeaderItems.jsx';
import { socialLinks, quickLink01, quickLink02, quickLink03 } from '../../Assets/Data/FooterItems.jsx';

const AdminHome = () => {
    return (
        <div>
            <Header navLinks={addminNavLinks} role='/admin/home' />
            <div className='bgImage ' >
                <h1 className='font1 text-[100px] text-center font-[700]'>ADMIN HOME</h1>
                <img src={homeimg} alt="#" className='mx-auto block' />
                <div className='flex items-center justify-center'>
                    <button className='btnlogout'>LOGOUT</button>
                </div>
            </div>
            <Footer socialLinks={socialLinks} quickLink01={quickLink01} quickLink02={quickLink02} quickLink03={quickLink03} />
        </div>

    )
}

export default AdminHome