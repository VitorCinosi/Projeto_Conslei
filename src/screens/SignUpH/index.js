/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-alert */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */



import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,

} from './styles';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import ConsleiLogo from '../../assets/conslei-removebg-preview.svg';
import EmailIcon from '../../assets/email.svg';
import PersonIcon from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';
import EndIcon from '../../assets/my_location.svg';
import LeitinhoIcon from '../../assets/leitinho1.svg';
import cnpjIcon from '../../assets/hospitalzinho.svg';
import { ScrollView } from 'react-native';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [endField, setEndField] = useState('');
    const [cnpjField, setcnpjField] = useState('');
    const [intField, setintField] = useState('');
    const [cardField, setcardField] = useState('');
    const [neoField, setneoField] = useState('');
    const [pedField, setpedField] = useState('');

    const handleSignClick = async () => {
        if (nameField !== '' && endField !== '' && cnpjField !== '' && intField !== '' && cardField !== '' && neoField !== '' && pedField !== '' && emailField !== '' && passwordField !== '') {
            let res = await Api.signUp(nameField, endField, cnpjField, intField, cardField, neoField, pedField, emailField, passwordField);
            if(res.token) {
                alert("Deu Certo!");
            } else {
                alert("Erro: " + res.error);
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

    return (
        <Container>
            <ConsleiLogo width="100%" height="250" />

            <ScrollView width="100%">

            <InputArea>
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite o nome do Hospital"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                 />

                <SignInput 
                    IconSvg={EndIcon}
                    placeholder="Digite o endereço"
                    value={endField}
                    onChangeText={t=>setEndField(t)}
                 />

                <SignInput 
                    IconSvg={cnpjIcon}
                    placeholder="Digite o CNPJ"
                    value={cnpjField}
                    onChangeText={t=>setcnpjField(t)}
                 />

                 <SignInput 
                    IconSvg={LeitinhoIcon}
                     placeholder="Digite os Leitos de Internação"
                    value={intField}
                    onChangeText={t=>setintField(t)}
                 />

                <SignInput 
                    IconSvg={LeitinhoIcon}
                     placeholder="Digite os Leitos Cardiológicos"
                    value={cardField}
                    onChangeText={t=>setcardField(t)}
                 />

                <SignInput 
                    IconSvg={LeitinhoIcon}
                     placeholder="Digite os Leitos Neo-Natais"
                    value={neoField}
                    onChangeText={t=>setneoField(t)}
                 />

                <SignInput 
                    IconSvg={LeitinhoIcon}
                     placeholder="Digite os Leitos Pediátricos"
                    value={pedField}
                    onChangeText={t=>setpedField(t)}
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

            </ScrollView>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
};
