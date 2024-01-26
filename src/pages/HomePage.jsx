import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import NewEventSection from "../components/NewEventSection";
import AddEvent from "../components/AddEvent";
import { addPost } from "../firebase/firestore_service";
import Modal from "../components/Modal";
function HomePage(props) {
  const modalRef = useRef();

  function handleCloseModal() {
    modalRef.current.close();
  }

  return (
    <>
      <Modal ref={modalRef}>
        <AddEvent onCancel={handleCloseModal} />
      </Modal>
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <div className="flex justify-center my-4 w-1/2 gap-4">
          <SearchBar />
        </div>
        <NewEventSection />
      </div>
    </>
  );
}

export default HomePage;
