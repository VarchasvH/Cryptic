import Typewriter from "typewriter-effect";
import Button from "../../Common/Button";
import Iphone from "../../../assets/iphone.png";
import Gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import "./styles.css";
import { Link } from "react-router-dom";
const MainComponent = () => {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.05 }}
          className='track-crypto-heading'
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='real-time-heading'
        >
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter

                .typeString("Real Time.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Effeciently.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Live Data.")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='info-text'
        >
          One stop solution for your crypto tracking in real time. All the power
          inside your Dashboard.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className='btn-flex'
        >
          <Link to={"/dashboard"}>
            <Button text={"Dashboard"} />
          </Link>
          <Button text={"Share"} outlined={true} />
        </motion.div>
      </div>
      <div className='phone-container'>
        <motion.img
          initial={{ y: -15 }}
          animate={{ y: 15 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            repeat: Infinity,
          }}
          src={Iphone}
          className='phone-image'
          alt='Phone'
        />
        <img src={Gradient} className='gradient-image' alt='Gradient' />
      </div>
    </div>
  );
};

export default MainComponent;
