export function pegaEValidaLogin() {
    let tokenSalvo = localStorage.getItem("tokenLogin")
    if(tokenSalvo == null) return false

    //Enviar o token para consultar no banco

    return true
}

export function validarCampo(campo, campo2 = null) {
    const quantidadeCaracteresCampo = campo.value.length

    if (quantidadeCaracteresCampo == 0) {
        return "Esse campo não pode ficar vazio."
    }

    switch (campo.id) {
        case "email":
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!regex.test(campo.value)) {
                alert("aff")
                return "E-mail inválido"
            }
            break
        case "nomeCadastro":
            if (quantidadeCaracteresCampo < 3 || quantidadeCaracteresCampo > 20) {
                return "O nome deve ter de três à 20 caracteres."
            }
            break

        case "senhaCadastro":
            if (quantidadeCaracteresCampo > 50) {
                return "A senha deve ter no máximo 50 caracteres."
            }

            if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(campo.value)) {
                return "A senha deve ter no mínimo 8 caracteres, ao menos um número, um caractere especial e uma letra maiúscula."
            }
            break
        case "repetirSenhaCadastro":
            if (campo.value !== campo2.value) {
                return "As senhas são diferentes."
            }
            break
        default:
            break
    }
    return ""
}