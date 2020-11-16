import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVarients = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition:{
      staggerChildren: 0.5
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
}

const childVarients = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}


const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    },5000)
  },[setShowModal])

  return (
    <motion.div className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h2>Thank you for your order :)</h2>


      <motion.p variants={childVarients}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVarients}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;   