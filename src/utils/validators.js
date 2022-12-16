const emailValidator = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
}

const passwordValidator = (password) => {
    return password?.toString().length > 6
}

const nameValidator = (name) => {
    return name?.toString().length > 2
}

const cellphoneValidator = (cellphone) => {
    return cellphone?.toString().length >= 8
}

const confirmPasswordValidator = (password, confirmPassword) => {
    return passwordValidator(password) && password == confirmPassword
}

export {
    emailValidator,
    passwordValidator,
    nameValidator,
    cellphoneValidator,
    confirmPasswordValidator
}