/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import Carousel from '../components/Carousel'
import { ContentBoxContainer } from '../components/ContentBox/style'
import CoverArt from '../components/CoverArt'
import InputComponent from '../components/InputComponent'
import Logo from '../components/Logo'
import NotificationComponent from '../components/NotificationComponent'
import Head from 'next/head'
import {
    BoxTitle,
    BoxSubTitle,
    CoverView,
    HomeContent,
    HomeFooter,
    HomeHeader,
    HomeHeaderContent,
    LogoView,
    ScreenContainer,
    BoxText,
    InfoView
} from '../styles/pages/home'
import { isEmailValid, isPhoneValid } from '../utils/utils'
import axios from 'axios'

const Home: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [submitedName, setSubmitedName] = useState('')
    const [submitedEmail, setSubmitedEmail] = useState('')
    const [submitedPhone1, setSubmitedPhone1] = useState('')
    const [submitedPhone2, setSubmitedPhone2] = useState('')
    const [projects, setProjects] = useState([])
    const [responsive, setResponsive] = useState(false)
    const [notification, setNotification] = useState(false)
    const [submited, setSubmited] = useState(false)
    const [validate, setValidate] = useState(false)

    const responsiveMode = width => {
        if (width < 520) return setResponsive(true)
        return setResponsive(false)
    }

    useEffect(() => {
        window.addEventListener('resize', () =>
            responsiveMode(window.innerWidth)
        )

        return () => window.removeEventListener('resize', () => {})
    }, [])

    const submit = () => {
        setSubmitedName(name)
        setSubmitedEmail(email)
        setSubmitedPhone1(phone1)
        setSubmitedPhone2(phone2)
        setNotification(true)
        setTimeout(() => {
            setNotification(false)
        }, 5000)
        setSubmited(true)
    }

    const validateForm = () => {
        setValidate(true)
        if (name.length < 5) return false
        if (!isEmailValid(email)) return false
        if (!isPhoneValid(phone1)) return false
        if (phone2.length > 1 && !isPhoneValid(phone2)) return false
        return true
    }

    useEffect(() => {
        getProjectsAPI()
    }, [])

    const getProjectsAPI = () => {
        axios.get('https://picsum.photos/v2/list').then(response => {
            setProjects(response.data)
        })
    }
    return (
        <ScreenContainer>
            <Head>
                <title>Docket Form</title>
            </Head>
            <HomeHeader>
                <HomeHeaderContent>
                    <NotificationComponent
                        style={{ alignSelf: 'center', justifySelf: 'center' }}
                        text={'Candidatura enviada com sucesso!'}
                        show={notification}
                    />
                    <LogoView>
                        <Logo />
                    </LogoView>
                </HomeHeaderContent>
                <CoverView>
                    <CoverArt />
                </CoverView>
            </HomeHeader>
            <HomeContent responsive={responsive}>
                <ContentBoxContainer>
                    <BoxTitle>Venha Trabalhar na Docket</BoxTitle>
                    <br />
                    <BoxText>
                        Preencha o formulário abaixo e venha trabalhar em uma
                        das startups mais desejadas do Brasil!
                    </BoxText>
                    <br />
                    <BoxSubTitle style={{ marginBottom: 8 }}>
                        Dados pessoais
                    </BoxSubTitle>
                    <InputComponent
                        type="name"
                        value={name}
                        onChange={e => setName(e)}
                        placeholder={'João Henrique'}
                        label="Nome completo:"
                        required
                        validate={validate}
                    />
                    <InputComponent
                        type="email"
                        value={email}
                        onChange={e => setEmail(e)}
                        placeholder={'seunome@sobrenome.com.br'}
                        label="E-mail:"
                        required
                        validate={validate}
                    />
                    <div
                        style={{
                            display: 'flex',
                            paddingBottom: 32,
                            flexWrap: 'wrap'
                        }}
                    >
                        <InputComponent
                            type="phone"
                            value={phone1}
                            onChange={e => setPhone1(e)}
                            placeholder={'(88) 8888-8888'}
                            label="Telefone 1:"
                            required
                            validate={validate}
                        />
                        <InputComponent
                            type="phone"
                            value={phone2}
                            onChange={e => setPhone2(e)}
                            placeholder={'(88) 8888-8888'}
                            label="Telefone 2:"
                            validate={validate}
                        />
                    </div>
                    <ButtonComponent onClick={() => validateForm() && submit()}>
                        Enviar
                    </ButtonComponent>
                </ContentBoxContainer>
                <ContentBoxContainer cold>
                    <BoxTitle alternative>Ficha do Candidato</BoxTitle>
                    <br />
                    <div style={{ flex: 1, paddingBottom: 16 }}>
                        {submited ? (
                            <>
                                <InfoView>
                                    <BoxText>Nome completo:</BoxText>
                                    <BoxText bold>{submitedName}</BoxText>
                                </InfoView>
                                <InfoView>
                                    <BoxText>E-mail:</BoxText>
                                    <BoxText bold>{submitedEmail}</BoxText>
                                </InfoView>
                                <InfoView>
                                    <BoxText>Telefone 1:</BoxText>
                                    <BoxText bold>{submitedPhone1}</BoxText>
                                </InfoView>
                                <InfoView>
                                    <BoxText>Telefone 2:</BoxText>
                                    <BoxText
                                        weak={!submitedPhone2}
                                        bold={!!submitedPhone2}
                                    >
                                        {submitedPhone2 || 'Não informado'}
                                    </BoxText>
                                </InfoView>
                            </>
                        ) : (
                            <BoxText italic weak>
                                Preencha o formulário e clique em "Enviar" após
                                conferir atentamente.
                            </BoxText>
                        )}
                    </div>
                    <Carousel data={projects} />
                </ContentBoxContainer>
            </HomeContent>
            <HomeFooter>
                <p>Docket &copy; 2019</p>
            </HomeFooter>
        </ScreenContainer>
    )
}

export default Home
