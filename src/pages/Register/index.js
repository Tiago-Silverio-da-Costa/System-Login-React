import React, {useState} from "react";
import { Container, Form, SubContainerSign } from "./styles";
import  Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import {emailValidator, passwordValidator, cellphoneValidator, nameValidator, confirmPasswordValidator} from "../../utils/validators"
import UserService from "../../Services/UserService";
import { NavLink, useNavigate } from "react-router-dom";

const userService = new UserService()

const Register = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            const { data } = await userService.Register({
                name: form.nome,
                cellphone: form.cellphone,
                email: form.email,
                password: form.password,
            })
            if (data) {
                const responseLogin = await userService.Login({
                    email: form.email,
                    passsword: form.passsword
                })
                if (responseLogin === true) {
                    alert('usuário cadastrado com sucesso')
                    navigate('/home')
                }
            }
            setLoading(false)

        }catch (err) {
            alert('Algo deu errado com o cadastro' + err)
        }
        
    }
    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const InputValidator = () => {
        return emailValidator(form.email) 
        && passwordValidator(form.password)
        && cellphoneValidator(form.cellphone)
        && nameValidator(form.name)
        && confirmPasswordValidator(form.passsword, form.confirmPassword)
    }

    return ( 
       <Container>
        <Form>
            <h1>Faça o seu Cadastro 👋</h1>
            <Input 
                name="name"
                placeholder="Digite o seu nome"
                onChange={handleChange}
                type="text"
            />
            <Input 
                name="cellphone"
                placeholder="Digite o seu número de telefone"
                onChange={handleChange}
                type="number"
            />
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
            <Input
                name="confirmPassword"
                placeholder="Confirme a sua senha"
                onChange={handleChange}
                type="password"
            />
            <Button 
                type="submit"
                text="Register!"
                onclick={handleSubmit}
                disabled={loading === true || !InputValidator()}
            />   
            <SubContainerSign>
                <p>Já possui conta?</p>
                <NavLink to="/login">Login</NavLink>
            </SubContainerSign>
        </Form>
       </Container>
     );
}
 
export default Register;