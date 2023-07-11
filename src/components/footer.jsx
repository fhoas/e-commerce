import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
    <footer>
        <div className='footer-up'>
        <div>
            <p className='footer-header'>Get in touch</p>
            <p>business@apple.com</p>
            <p>hello@apple.com</p>
        </div>
        <div>
            <p className='footer-header'>Connect</p>
            <p>Instagram</p>
            <p>Linkedin</p>
        </div>
        <div>
            <p className='footer-header'>Adress</p>
            <p>One Apple Park Way; Cupertino,</p>
            <p>CA 95014, U.S.A.</p>
        </div>
        </div>

        <div className='footer-down'>
        <div className='footer-copyright'>
        <p>Apple Inc.</p>
        <div className='footer-copyright-elements'>
            <p>© 2023</p>
            <p>Data Privacy</p>
            <p>Imprint</p>
        </div>
        </div>
        </div>
    </footer>     
    </div>
    </>
  )
}

export default Footer