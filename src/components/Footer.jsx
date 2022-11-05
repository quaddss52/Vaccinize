import { Link} from 'react-router-dom'
function Footer() {
  return (
    <footer className='h-1/4 footer'>
        <div className="footer-container">
           <div className="footer-content">
                <div className="footer-section">
                    <div className="section-title">Product</div>
                    <div className="footer-section-content">
                    <Link to={'/help-center'} className='text-sm text-gray-400 no-underline hover:underline '>Help Center</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Security</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Privacy portal</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>FAQs</Link>
                    </div>
                </div>
                <div className="">
                    <div className="section-title">Company</div>
                    <div className="footer-section-content">
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>About Us</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Careers</Link>
                        <Link to={'/help-center'} className='text-sm text-gray-400 no-underline hover:underline '>Contact Us</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Press Center</Link>
                    </div>
                </div>
                <div className="">
                    <div className="section-title">Content</div>
                    <div className="footer-section-content">
                        <Link to={'/blog'} className='text-sm text-gray-400 no-underline hover:underline '>Blog</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Health Library</Link>
                        <Link to={'/blog'} className='text-sm text-gray-400 no-underline hover:underline '>News</Link>
                        <Link to={'/features'} className='text-sm text-gray-400 no-underline hover:underline '>Features</Link>
                    </div>
                </div>
                <div className="">
                    <div className="section-title">Privacy</div>
                    <div className="footer-section-content">
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Privacy</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Policy</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Terms of Use</Link>
                        <Link to={'/about'} className='text-sm text-gray-400 no-underline hover:underline '>Cookie Policy</Link>
                    </div>
                </div>
           </div>
        </div>
    </footer>
  )
}

export default Footer