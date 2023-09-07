import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState({});

    function login(email, senha) {
        if (email == 'thiago@email.com' && senha == '123') {
            setUsuario({
                nome: 'Thiago Guerra',
                email: email,
                endereco: 'Rua supia',
                telefone: '998077753'
            });
            return true;
        }else {
            return false;
        }

    }
    return (
        <AutenticacaoContext.Provider value={
            {
              usuario,
              login      
            }
        }>
            {children}
        </AutenticacaoContext.Provider>
    )
}