const register = (name, email, creditCard) => {
    const newUser = {
        name,
        email,
        creditCard
    }
    // usersModel.save(newUser)
    return {name, email, creditCard}
}









module.exports = () => {
    return {
        register
    }
}