import { Link } from 'react-router-dom';


const Footer = (props) => {

  const year = new Date().getFullYear();
  return <footer className='pb-16 pt-10 bg-gray-300'>
    <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:gap-5 gap-[30px] mt-[10px]'>
        <div>

          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 md:mw-[50px] '>Copyright @ {year} devoloped by Group-7 all right recived</p>

          <div className='flex items-center gap-5 mt-4'>
            {
              props.socialLinks.map((link, index) => <Link className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none ' to={link.path} key={index} >{link.icon}</Link>)
            }
          </div>

        </div >

        <div >
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Quick Links</h2>
          <ul>
            {
              props.quickLink01.map((item, index) =>
                <li key={index}><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>
              )
            }
          </ul>
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Quick Links</h2>
          <ul>
            {
              props.quickLink02.map((item, index) =>
                <li key={index}><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>
              )
            }
          </ul>
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Quick Links</h2>
          <ul>
            {
              props.quickLink03.map((item, index) =>
                <li key={index}><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>
              )
            }
          </ul>
        </div>

      </div>



    </div>
  </footer>
}

export default Footer