import { motion, AnimatePresence } from "framer-motion";
import Feedbackitem from "./Feedbackitem";
import { useContext } from "react";
import Spinner from "./shared/Spinner";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>;
  }

  //return with animation (fadeout)

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedbackitem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return without fadeout
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <div>
  //         <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} />
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
