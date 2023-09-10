"use client";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../buttons/Buttons";
import Heading from "../Heading/Heading";

const Modal = ({
  isOpen,
  title,
  onClose,
  onSubmit,
  secondaryAction,
  body,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
    justify-center
    items-center
    flex
    overflow-x-hidden
    overflow-y-hidden
    fixed
    inset-0
    z-[1000]
    outline-none
    focus:outline-none
    bg-neutral-800/70
    "
      >
        <div
          className="
        relative
        w-full
        md:w-4/6  
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto 
        h-full
        lg:h-auto
        md:h-auto"
        >
          {/* CONTENT */}
          <div
            className={`translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg
          relative flex flex-col
          w-full bg-white
          outline-none focus:outline-none"
            >
              <div className="flex items-center p-2  rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1
                  border-0
                  hover:opacity-70
                  transition
                  absolute
                  left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <Heading
                  text={title}
                  className="!text-2xl !text-center font-bold  "
                />
              </div>

              <div className="relative p-6 flex-auto">{body}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
