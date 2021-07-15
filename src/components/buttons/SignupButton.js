import React from 'react';
import {AuthButtonStyled} from "../../styles";
import SignupButtonModal from '../../modals/SignupButtonModal';
import { useState } from 'react';

const SignupButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
            <>
         <AuthButtonStyled onClick={openModal}>Signup </AuthButtonStyled>
         <SignupButtonModal isOpen={isOpen} closeModal={closeModal}/>
            </>

    )
}
export default SignupButton;