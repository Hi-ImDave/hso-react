import { FaRebel } from 'react-icons/fa'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <FaRebel className='text-5xl' />
        <p>Copyright &copy; {footerYear} All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
