interface isEmailValid {
    email: string
}

export const isEmailValid = (email: string): boolean => {
    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email
        )
    )
        return true
    return false
}

export const isPhoneValid = (phone: string): boolean => {
    if (/^[(]?[0-9]{2}[)]?[-\s.]?[0-9]{4}[-\s.]?[0-9]{4}$/im.test(phone))
        return true
    return false
}
