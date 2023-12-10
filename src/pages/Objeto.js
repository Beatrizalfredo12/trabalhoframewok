import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Objetos = () => {
    const [objetos, setObjetos] = useState([]);

    useEffect(() => {
        const fetchObjetos = async () => {
            try {
                const response = await axios.get('https://www.bocaweb.com.br/apibocaweb?nome=animal');
                setObjetos(response.data);
            } catch (error) {
                console.error('Erro ao obter objetos:', error);
            }
        };

        fetchObjetos();
    }, []);

    return (
        <div>
            <Navbar title="Página Objetos" />
            {objetos.length > 0 ? (
                <ul>
                    {objetos.map(objeto => (
                        <li key={objeto._id}>
                            <Link to={`/objetos/${objeto._id}`}>{objeto.nome}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum objeto encontrado.</p>
            )}
            <Footer names={['BEATRIZ RODRIGUES ALFREDO']} discipline="Frameworks2" professor="Prof. Ricardo" />
        </div>
    );
}

export default Objetos;
