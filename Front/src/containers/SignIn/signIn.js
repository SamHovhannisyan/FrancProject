import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/all";
import css from './signIn.module.css'
import axios from "axios";
import {useHistory} from "react-router-dom";


const SignIn = () => {

    let history = useHistory();

    const [show, setShow] = useState(true)
    const [regValue, setRegVal] = useState({});
    const [errore, setError] = useState(false);

    const handlerShow = () => {
        setShow(!show)
    }

    const GET_REG_VALUES = (e) => {
        regValue[e.target.name] = e.target.value;
        setRegVal(regValue);
    };
    const AUTH = "aeh34284723nkasfhakj$43243824**%#432";

    const LOGIN_HANDLER = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:5000/Users/login', regValue)
            .then((res) => {
                if (res.data.error) {
                    setError(true);
                } else {
                    let auth = {
                        name: res.data.name,
                        id: res.data.id,
                        token: res.data.token,
                        password: res.data.password
                    };
                    localStorage.setItem(AUTH, JSON.stringify(auth));
                    history.push("/home");
                }
            })
            .catch((e) => {
                setError(true);
            });
    };

    return (
        <div>
            <Container>
                <Row className={'mt-5 mb-5'}>
                    <Col lg={7} md={12} xs={12}>
                        <div>
                            <div>
                                <div className={css.textMain}>
                                    <div className={css.colOne}>
                                        <h1>Sign In to</h1>
                                        <h3>Lorem ipsum is simply</h3>
                                    </div>

                                    <div className={css.colTwo}>
                                        <p>If you already have an account</p>
                                        <p>You can <span>Login here!</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} md={12} xs={12} className='mb-5'>
                        <div>
                            <div className={css.formDiv}>
                                <h2>Sign In</h2>
                                <form onChange={GET_REG_VALUES} className={css.form} onSubmit={LOGIN_HANDLER}>
                                    <input type="email" name="email" placeholder={'Enter email and user name'}/>
                                    {show ? <div className={css.iconDiv}>
                                            <input className={css.inputt} type="password" name='password' id="password"
                                                   placeholder="Password*"/>
                                            <i className={css.faEye} id="togglePassword"
                                               onClick={handlerShow}><AiFillEyeInvisible/></i>
                                        </div> :
                                        <div className={css.iconDiv}>
                                            <input className={css.inputt} type="text" id="password" name='password'
                                                   placeholder="Password*"/>
                                            <i className={css.faEye} id="togglePassword"
                                               onClick={handlerShow}><AiFillEye/></i>
                                        </div>
                                    }
                                    <Button variant="danger" type='submit'>Login</Button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;