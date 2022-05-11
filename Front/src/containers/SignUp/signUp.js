import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import css from './signUp.module.css'
import {AiFillEye} from 'react-icons/all'
import {AiFillEyeInvisible} from 'react-icons/all'
import axios from "axios";
import {useHistory} from "react-router-dom";

const SignUp = () => {

    let history = useHistory();

    const [show, setShow] = useState(true)

    const [loginVal, setLoginVal] = useState({});

    const [errore, setError] = useState(false);

    const AUTH = "aeh34284723nkasfhakj$43243824**%#432";

    const GET_signVALUES = (e) => {
        loginVal[e.target.name] = e.target.value;
        console.log(loginVal,'WWWWWWWWWWWWWWWWW')
        setLoginVal(loginVal);
    };

    const handlerShow = () => {
        setShow(!show)
    }

    const LOGIN_HANDLER = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:5000/Users/register', loginVal)
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
                    history.push('/signIn');
                }
            })
            .catch((e) => {
                setError(true);
            });
    };

    console.log(loginVal,'lllllllllllllll')

    return (
        <div>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col lg={7} md={12} xs={12}>
                        <div className={css.textMain}>
                        <div className={css.colOne}>
                            <h1>Sign Up to</h1>
                            <h3>Lorem ipsum is simply</h3>
                        </div>

                        <div className={css.colTwo}>
                            <p>If you already have an account</p>
                            <p>You can <span>Login here!</span></p>
                        </div>
                        </div>
                    </Col>

                    <Col lg={5} md={12} xs={12} className='mb-5'>
                        <div>
                            <div>
                                <h2>Sign Up</h2>
                                <form className={css.form} onChange={GET_signVALUES} onSubmit={LOGIN_HANDLER}>
                                    <input type="email" name='email' placeholder={'Enter Email'}/>
                                    <input type="text" name='name' placeholder={'Create User name'}/>
                                    <input type="number" name='number' className={css.in1} placeholder={'Contact number'}/>
                                    {show ? <div className={css.iconDiv}>
                                            <input className={css.inputt} name='password' type="password" id="password"
                                                   placeholder="Password*"/>
                                            <i className={css.faEye} id="togglePassword"
                                               onClick={handlerShow}><AiFillEyeInvisible/></i>
                                        </div> :
                                        <div className={css.iconDiv}>
                                            <input name='password' className={css.inputt} type="text" id="password"
                                                   placeholder="Password*"/>
                                            <i className={css.faEye} id="togglePassword"
                                               onClick={handlerShow}><AiFillEye/></i>
                                        </div>
                                    }
                                    <input type="password" name='password' placeholder={'Confirm Password'}/>
                                    <Button variant="danger" type='submit'>Register</Button>
                                </form>
                            </div>
                        </div>
                    </Col >
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;