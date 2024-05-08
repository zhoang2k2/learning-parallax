import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis ac mauris vitae aliquet. Ut nibh metus, efficitur id mollis vel, fermentum a tellus. In imperdiet ultricies iaculis. ",
  },
  {
    id: 2,
    title: "JS Commerce",
    img: "https://ctl.s6img.com/society6/img/V4rKtSnqn4W-KrdtTtaKpsL_wfw/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/b41fcb88dc6e437f8a03eb014411cdf1/~~/woman-yelling-at-cat-meme-22624840-prints.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis ac mauris vitae aliquet. Ut nibh metus, efficitur id mollis vel, fermentum a tellus. In imperdiet ultricies iaculis. ",
  },
  {
    id: 3,
    title: "HTML Commerce",
    img: "https://www.the-sun.com/wp-content/uploads/sites/6/2023/10/KS-crunchy-cat-comp.jpg?w=620",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis ac mauris vitae aliquet. Ut nibh metus, efficitur id mollis vel, fermentum a tellus. In imperdiet ultricies iaculis. ",
  },
  {
    id: 4,
    title: "CSS Commerce",
    img: "https://i.pinimg.com/564x/5c/a1/42/5ca142d34fd1903773b4f4e6f43d9045.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis ac mauris vitae aliquet. Ut nibh metus, efficitur id mollis vel, fermentum a tellus. In imperdiet ultricies iaculis. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
