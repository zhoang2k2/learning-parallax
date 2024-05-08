import Sidebar from '../sidebar/Sidebar';
import './Navbar.scss'

import {motion} from "framer-motion"

const Navbar = () => {

    const variants = {
        visible : {
            opacity: 1,
            scale: 1,
        },
        hidden : {
            opacity: 0,
            scale: 0.5,
        },       
    };

    return (
        <div className='navbar'>
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                >
                    Lama Dev
                </motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                    <a href="#"><img src="/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;