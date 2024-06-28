import { motion } from "framer-motion";

//variants
const stairAnimation = {
  initials: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};


//calculate the reverse index for staggered delay
const reverIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}


const Stairs = () => {
  return (
  <>
  {/* render 6 motion div, each representing a step of the stairs
  
  each div will have the same animation defined by the stairanimation object
  the delay for each div is calculated dynamically based on it's reversed index
  creating staggered effect with decreasing delay for each component
  
  */}
    {[...Array(6)].map((_,index)=>{
        return (<motion.div key={index} variants={stairAnimation} initial="initials" 
        animate= "animate" exit="exit" transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverIndex(index) * 0.1
        }} 
        className="h-full w-full bg-white relative"
        />
        );
    })}

  </>
  )
};

export default Stairs;
