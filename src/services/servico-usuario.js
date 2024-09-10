import pegaEValidaTokenLogin from '../utils/validation-user'


function ServicoUsuario() {
    function pegaUsuarioLogado() {

        const usuarioLogado = {
            "id": "euimfneofnmeiom-132k34n12i3n-1ij2n31ij23n",
            "nome": "joao cleiton 1",
            "email": "joao.cleiton1@gmail.com"
        }

        return usuarioLogado
    }

    function logoff() {
        localStorage.removeItem("tokenLogin")
    }


    return {
        pegaUsuarioLogado,
        logoff
    }


}

export default ServicoUsuario()