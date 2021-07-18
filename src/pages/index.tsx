import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { NewTransactionModal } from "../components/NewTransactionModal";
import firebase from '../firebase/clientApp'

import { useAuthState } from 'react-firebase-hooks/auth'

Modal.setAppElement("#__next");

export default function Home() {
    const [user, loading, error] = useAuthState(firebase.auth())

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
