/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable space-infix-ops */


import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {UserContext} from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    SignMessageButtonTextH,
    SignMessageButtonTextBoldH,

} from './styles';

import SignInput from '../../components/SignInput';

import Api from '../../Api';

import ConsleiLogo from '../../assets/conslei-removebg-preview.svg';
import EmailIcon from '../../assets/email.svg';
import PersonIcon from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    //const {dispach: userDispach} = useContext(UserContext);

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if (nameField !== '' && emailField !== '' && passwordField !== '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            if(res.token) {
                alert("Deu Certo!");
            } else {
                alert("Erro: "+res.error);
            }

        } else {
            
            alert('Preencha os campos');
        }
    };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}],
        });
    };

    const handleMessageButtonClickHosp = () => {
        navigation.reset({
            routes: [{name: 'SignUpH'}],
        });
    };

    return (
        <Container>
            <ConsleiLogo width="100%" height="250" />

            <InputArea>
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                 />

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                 />

                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                   <CustomButtonText>CADASTRAR</CustomButtonText> 
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

            <SignMessageButton onPress={handleMessageButtonClickHosp}>
                <SignMessageButtonTextH>Cadastro de Hospital?</SignMessageButtonTextH>
                <SignMessageButtonTextBoldH>Clique Aqui</SignMessageButtonTextBoldH>
            </SignMessageButton>

        </Container>
    );
};
