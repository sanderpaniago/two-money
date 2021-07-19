import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { NewTransactionModal } from "../components/NewTransactionModal";


Modal.setAppElement("#__next");

export default function Home() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
        </>
    );
}
