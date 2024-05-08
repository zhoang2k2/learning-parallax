import { motion } from "framer-motion";
import "./Service.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Service = () => {
  return (
    <motion.div
      className="service"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          focus on helping your brand grow
          <br /> and move foward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            iaculis ac mauris vitae aliquet. Ut nibh metus, efficitur id mollis
            vel, fermentum a tellus. In imperdiet ultricies iaculis. Nam finibus
            commodo rutrum. Pellentesque commodo sem consectetur nisl dictum, at
            scelerisque magna fermentum. Suspendisse quis ipsum diam. Quisque
            tempor nec ante vitae viverra.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            iaculis ac mauris vitae aliquet. Ut nibh metus, efficitur id mollis
            vel, fermentum a tellus. In imperdiet ultricies iaculis. Nam finibus
            commodo rutrum. Pellentesque commodo sem consectetur nisl dictum, at
            scelerisque magna fermentum. Suspendisse quis ipsum diam. Quisque
            tempor nec ante vitae viverra.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            iaculis ac mauris vitae aliquet. Ut nibh metus, efficitur id mollis
            vel, fermentum a tellus. In imperdiet ultricies iaculis. Nam finibus
            commodo rutrum. Pellentesque commodo sem consectetur nisl dictum, at
            scelerisque magna fermentum. Suspendisse quis ipsum diam. Quisque
            tempor nec ante vitae viverra.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            iaculis ac mauris vitae aliquet. Ut nibh metus, efficitur id mollis
            vel, fermentum a tellus. In imperdiet ultricies iaculis. Nam finibus
            commodo rutrum. Pellentesque commodo sem consectetur nisl dictum, at
            scelerisque magna fermentum. Suspendisse quis ipsum diam. Quisque
            tempor nec ante vitae viverra.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
