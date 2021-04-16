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

const data = [
    {
        id: '0',
        author: 'Alejandro Escamilla',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        download_url: 'https://picsum.photos/id/0/5616/3744'
    },
    {
        id: '1',
        author: 'Alejandro Escamilla',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/LNRyGwIJr5c',
        download_url: 'https://picsum.photos/id/1/5616/3744'
    },
    {
        id: '10',
        author: 'Paul Jarvis',
        width: 2500,
        height: 1667,
        url: 'https://unsplash.com/photos/6J--NXulQCs',
        download_url: 'https://picsum.photos/id/10/2500/1667'
    },
    {
        id: '100',
        author: 'Tina Rataj',
        width: 2500,
        height: 1656,
        url: 'https://unsplash.com/photos/pwaaqfoMibI',
        download_url: 'https://picsum.photos/id/100/2500/1656'
    },
    {
        id: '1000',
        author: 'Lukas Budimaier',
        width: 5626,
        height: 3635,
        url: 'https://unsplash.com/photos/6cY-FvMlmkQ',
        download_url: 'https://picsum.photos/id/1000/5626/3635'
    },
    {
        id: '1001',
        author: 'Danielle MacInnes',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/1DkWWN1dr-s',
        download_url: 'https://picsum.photos/id/1001/5616/3744'
    },
    {
        id: '1002',
        author: 'NASA',
        width: 4312,
        height: 2868,
        url: 'https://unsplash.com/photos/6-jTZysYY_U',
        download_url: 'https://picsum.photos/id/1002/4312/2868'
    },
    {
        id: '1003',
        author: 'E+N Photographies',
        width: 1181,
        height: 1772,
        url: 'https://unsplash.com/photos/GYumuBnTqKc',
        download_url: 'https://picsum.photos/id/1003/1181/1772'
    },
    {
        id: '1004',
        author: 'Greg Rakozy',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/SSxIGsySh8o',
        download_url: 'https://picsum.photos/id/1004/5616/3744'
    },
    {
        id: '1005',
        author: 'Matthew Wiebe',
        width: 5760,
        height: 3840,
        url: 'https://unsplash.com/photos/tBtuxtLvAZs',
        download_url: 'https://picsum.photos/id/1005/5760/3840'
    },
    {
        id: '1006',
        author: 'Vladimir Kudinov',
        width: 3000,
        height: 2000,
        url: 'https://unsplash.com/photos/-wWRHIUklxM',
        download_url: 'https://picsum.photos/id/1006/3000/2000'
    },
    {
        id: '1008',
        author: 'Benjamin Combs',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/5L4XAgMSno0',
        download_url: 'https://picsum.photos/id/1008/5616/3744'
    },
    {
        id: '1009',
        author: 'Christopher Campbell',
        width: 5000,
        height: 7502,
        url: 'https://unsplash.com/photos/CMWRIzyMKZk',
        download_url: 'https://picsum.photos/id/1009/5000/7502'
    },
    {
        id: '101',
        author: 'Christian Bardenhorst',
        width: 2621,
        height: 1747,
        url: 'https://unsplash.com/photos/8lMhzUjD1Wk',
        download_url: 'https://picsum.photos/id/101/2621/1747'
    },
    {
        id: '1010',
        author: 'Samantha Sophia',
        width: 5184,
        height: 3456,
        url: 'https://unsplash.com/photos/NaWKMlp3tVs',
        download_url: 'https://picsum.photos/id/1010/5184/3456'
    },
    {
        id: '1011',
        author: 'Roberto Nickson',
        width: 5472,
        height: 3648,
        url: 'https://unsplash.com/photos/7BjmDICVloE',
        download_url: 'https://picsum.photos/id/1011/5472/3648'
    },
    {
        id: '1012',
        author: 'Scott Webb',
        width: 3973,
        height: 2639,
        url: 'https://unsplash.com/photos/uAgLGG1WBd4',
        download_url: 'https://picsum.photos/id/1012/3973/2639'
    },
    {
        id: '1013',
        author: 'Cayton Heath',
        width: 4256,
        height: 2832,
        url: 'https://unsplash.com/photos/D8LcRLwZyPs',
        download_url: 'https://picsum.photos/id/1013/4256/2832'
    },
    {
        id: '1014',
        author: 'Oscar Keys',
        width: 6016,
        height: 4000,
        url: 'https://unsplash.com/photos/AmPRUnRb6N0',
        download_url: 'https://picsum.photos/id/1014/6016/4000'
    },
    {
        id: '1015',
        author: 'Alexey Topolyanskiy',
        width: 6000,
        height: 4000,
        url: 'https://unsplash.com/photos/-oWyJoSqBRM',
        download_url: 'https://picsum.photos/id/1015/6000/4000'
    },
    {
        id: '1016',
        author: 'Philippe Wuyts',
        width: 3844,
        height: 2563,
        url: 'https://unsplash.com/photos/_h7aBovKia4',
        download_url: 'https://picsum.photos/id/1016/3844/2563'
    },
    {
        id: '1018',
        author: 'Andrew Ridley',
        width: 3914,
        height: 2935,
        url: 'https://unsplash.com/photos/Kt5hRENuotI',
        download_url: 'https://picsum.photos/id/1018/3914/2935'
    },
    {
        id: '1019',
        author: 'Patrick Fore',
        width: 5472,
        height: 3648,
        url: 'https://unsplash.com/photos/V6s1cmE39XM',
        download_url: 'https://picsum.photos/id/1019/5472/3648'
    },
    {
        id: '102',
        author: 'Ben Moore',
        width: 4320,
        height: 3240,
        url: 'https://unsplash.com/photos/pJILiyPdrXI',
        download_url: 'https://picsum.photos/id/102/4320/3240'
    },
    {
        id: '1020',
        author: 'Adam Willoughby-Knox',
        width: 4288,
        height: 2848,
        url: 'https://unsplash.com/photos/_snqARKTgoc',
        download_url: 'https://picsum.photos/id/1020/4288/2848'
    },
    {
        id: '1021',
        author: 'Frances Gunn',
        width: 2048,
        height: 1206,
        url: 'https://unsplash.com/photos/8BmNurlVR6M',
        download_url: 'https://picsum.photos/id/1021/2048/1206'
    },
    {
        id: '1022',
        author: 'Vashishtha Jogi',
        width: 6000,
        height: 3376,
        url: 'https://unsplash.com/photos/bClr95glx6k',
        download_url: 'https://picsum.photos/id/1022/6000/3376'
    },
    {
        id: '1023',
        author: 'William Hook',
        width: 3955,
        height: 2094,
        url: 'https://unsplash.com/photos/93Ep1dhTd2s',
        download_url: 'https://picsum.photos/id/1023/3955/2094'
    },
    {
        id: '1024',
        author: 'Мартин Тасев',
        width: 1920,
        height: 1280,
        url: 'https://unsplash.com/photos/7ALI0RYyq6s',
        download_url: 'https://picsum.photos/id/1024/1920/1280'
    },
    {
        id: '1025',
        author: 'Matthew Wiebe',
        width: 4951,
        height: 3301,
        url: 'https://unsplash.com/photos/U5rMrSI7Pn4',
        download_url: 'https://picsum.photos/id/1025/4951/3301'
    }
]

const Home: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [submitedName, setSubmitedName] = useState('')
    const [submitedEmail, setSubmitedEmail] = useState('')
    const [submitedPhone1, setSubmitedPhone1] = useState('')
    const [submitedPhone2, setSubmitedPhone2] = useState('')
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
        console.log('notification')
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
        if (phone2.length > 0 && !isPhoneValid(phone2)) return false
        return true
    }

    return (
        <ScreenContainer>
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
                    <div style={{ display: 'flex', paddingBottom: 32 }}>
                        <InputComponent
                            type="phone"
                            value={phone1}
                            onChange={e => setPhone1(e)}
                            placeholder={'(88) 8888-8888'}
                            style={{ paddingRight: 8 }}
                            label="Telefone 1:"
                            required
                            validate={validate}
                        />
                        <InputComponent
                            type="phone"
                            value={phone2}
                            onChange={e => setPhone2(e)}
                            placeholder={'(88) 8888-8888'}
                            style={{ paddingLeft: 8 }}
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
                    <Carousel data={data} />
                </ContentBoxContainer>
            </HomeContent>
            <HomeFooter>
                <p>Docket &copy; 2019</p>
            </HomeFooter>
        </ScreenContainer>
    )
}

export default Home
