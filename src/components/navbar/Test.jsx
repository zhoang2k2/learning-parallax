import {motion} from "framer-motion"
import { useState } from "react";

const Test = () => {

    const [open, setOpen] = useState(false);

    const variant = {
        visible: (i) => ({
            opacity:1, 
            x:100, 
            transition:{ delay: i*0.3 },
        }),
        hidden: {opacity:0}
    };

    const items = ["item1" , "item2" , "item3" , "item4"];

    return (
        <div className="course">
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={variant}
            >
                {items.map((item, i) => 
                    <motion.li variants={variant} key={item} custom={i}>
                        {item}
                    </motion.li>
                )}
            </motion.ul>

            <button onClick={() => setOpen(prev=>!prev)}>Click</button>
        </div>
    )
}

export default Test;