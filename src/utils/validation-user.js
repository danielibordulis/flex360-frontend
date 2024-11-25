import httpClient from "../services/httpClient"

export function pegaEValidaTokenLogin() {
    let tokenSalvo = localStorage.getItem("token")
    if(tokenSalvo == null) return ""

    return tokenSalvo
}

export async function validaToken() {

    let tokenSalvo = localStorage.getItem("token")

    if (!tokenSalvo) return false

    return await httpClient().get("/usuario/buscarPerfil", tokenSalvo)
    .then((response) => {

        return response.id
        
    })
    .catch(error => {

        console.error(error)
        return false

    })

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

            // if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/.test(campo.value)) {
            //     return "A senha deve ter no mínimo 5 caracteres, ao menos um número, um caractere especial e uma letra maiúscula."
            // }
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