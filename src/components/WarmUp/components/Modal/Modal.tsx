import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
}

function Modal(props: ModalProps) {
  const { show, onClose, title } = props;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="tw:bg-slate-900/20 tw:backdrop-blur tw:p-8 tw:fixed tw:inset-0 tw:z-50 tw:grid tw:place-items-center tw:overflow-y-scroll tw:cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="tw:bg-linear-to-br tw:from-bg-start tw:to-bg-end tw:text-white tw:p-6 tw:rounded-lg tw:w-full tw:max-w-lg tw:shadow-xl tw:cursor-default tw:relative tw:overflow-hidden"
          >
            <p className="tw:text-text-primary tw:text-base tw:font-semibold">
              {title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
