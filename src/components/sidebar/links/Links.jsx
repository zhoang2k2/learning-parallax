import { motion } from "framer-motion";

const Links = () => {

    const variants = {
        open : {
            transition: {
                staggerChildren: 0.1
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    };

    const itemVariants = {
        open : {
            transition:{duration:0.25},
            y: 0,
            opacity: 1,
        },
        closed: {
            transition:{duration:0.5},
            y: 50,
            opacity: 0,
        }
    }

    const items = ["Homepage" , "Service" , "Portfolio" , "Contact", "About"];

    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
                <motion.a 
                    href={`#${item}`} 
                    key={item}
                    variants={itemVariants} 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>   
    )
}

export default Links