import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import PagErgonomia from "../pages/pagErgonomia/PagErgonomia";
import PagCadeiraIndividual from '../pages/pagCadeiraIndividual/PagCadeiraIndividual';
import PagAcessorios from '../pages/pagAcessorios/PagAcessorios';
import PagCarrinho from '../pages/pagCarrinho/PagCarrinho';
import PagCadastro from '../pages/pagCadastro/PagCadastro';
import PagCadeira from '../pages/pagCadeiras/PagCadeiras';
import PagHome from '../pages/pagHome/PagHome';
import PagLogin from '../pages/pagLogin/PagLogin';
import PagPerfil from '../pages/pagPerfil/PagPerfil';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagAcessorios />} />
                <Route path="/ergonomia" element={<PagErgonomia />} />
                <Route path="/cadeiras" element={<PagCadeira />} />
                <Route path="/cadeiraIndividual" element={<PagCadeiraIndividual />} />
                <Route path="/acessorios" element={<PagAcessorios />} />
                <Route path="/carrinho" element={<PagCarrinho />} />
                <Route path="/cadastro" element={<PagCadastro />} />
                <Route path="/entrar" element={<PagLogin />} />
                <Route path="/perfil" element={<PagPerfil />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
