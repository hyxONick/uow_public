import { Link } from 'react-router-dom';
import { LinkedinFilled, MailOutlined, FacebookFilled, TwitterOutlined, InstagramFilled, PinterestOutlined, PhoneOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className="h-20 px-20 text-gray-400">
            <div>Copyright © 2024 • Lift Media Inc.</div>
            <hr className="border border-gray-400 mb-10" />
            <div className="flex justify-center items-center gap-24 pb-10">
                <ul className="flex justify-center items-center gap-24 space-x-4">
                    <li><Link to="/" className="font-assistant text-darkBlue_text">CONTACT US</Link></li>
                    <li><Link to="/" className="font-assistant text-darkBlue_text">HELP</Link></li>
                    <li><Link to="/" className="font-assistant text-darkBlue_text">PRIVACY POLICY</Link></li>
                    <li><Link to="/" className="font-assistant text-darkBlue_text">TERMS AND CONDITIONS</Link></li>
                    <li><Link to="/" className="font-assistant text-darkBlue_text"><span className='text-primary_text mr-2'><PhoneOutlined style={{ fontSize: '18px' }} /></span>PHONE</Link></li>
                    <li><Link to="/" className="font-assistant text-darkBlue_text"><span className='text-primary_text mr-2'><MailOutlined style={{ fontSize: '18px' }} /></span>EMAIL</Link></li>
                </ul>
                <div className='flex gap-6'>
                    <p className='text-gray-400'>Social Media</p>
                    <a href="#/" className='text-primary_text '><LinkedinFilled style={{ fontSize: '18px' }} /></a>
                    <a href="#/" className='text-primary_text '><FacebookFilled style={{ fontSize: '18px' }} /></a>
                    <a href="#/" className='text-primary_text '><TwitterOutlined style={{ fontSize: '18px' }} /></a>
                    <a href="#/" className='text-primary_text '><InstagramFilled style={{ fontSize: '18px' }} /></a>
                    <a href="#/" className='text-primary_text '><PinterestOutlined style={{ fontSize: '18px' }} /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;