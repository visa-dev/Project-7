
import homeimg from '../../Assets/Images/images/sportlogo.png';
const AdminHome = () => {
    return (
        <div className='bgImage ' >
            <h1 className='font1 text-[100px] text-center font-[700]'>ADMIN HOME</h1>
            <img src={homeimg} alt="#" className='mx-auto block' />
            <div className='flex items-center justify-center'>
                <button className='btnlogout'>LOGOUT</button>
            </div>
        </div>
    )
}

export default AdminHome