export function useRegister () {
    const register = (firstName, lastName, email, password) => {
        console.log(firstName,lastName,email,password)
    };

    return {register};
}