import React, {useState} from "react";
import { Container, Form, SubContainerSign } from "./styles";
import  Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import {emailValidator, passwordValidator} from "../../utils/validators"
import UserService from "../../Services/UserService";
import { NavLink, useNavigate } from "react-router-dom";

const userService = new UserService()

const Login = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            const response = await userService.Login(form)
            console.log('response do login', response)
            if (response === true) {
                alert('usuário logado com sucesso')
                navigate('/home')
            }
            setLoading(false)
        }catch (err) {
            alert('Algo deu errado com o login' + err)
        }
        
    }
    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const InputValidator = () => {
        return emailValidator(form.email) && passwordValidator(form.password)
    }

    return ( 
       <Container>
        <Form>
            <h1>Faça seu login 👋</h1>
            <Input 
                name="email"
                placeholder="Digite o seu e-mail"
                onChange={handleChange}
                type="email"
            />
            <Input
                name="password"
                placeholder="Digite a sua senha"
                onChange={handleChange}
                type="password"
            />
            <Button 
                type="submit"
                text="Entrar!"
                onclick={handleSubmit}
                disabled={loading === true || !InputValidator()}
            />   
            <SubContainerSign>
                <p>Não possui conta?</p>
                <NavLink to="/register">Cadastrar</NavLink>
            </SubContainerSign>
        </Form>
       </Container>
     );
}
 
export default Login;