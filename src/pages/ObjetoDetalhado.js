import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ObjetoDetalhado = () => {
    const { infantil } = useParams();
    const [objeto, setObjeto] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.bocaweb.com.br/apibocaweb?infantil=${infantil}`);
                setObjeto(response.data || {}); // Caso a resposta seja nula ou indefinida, definimos um objeto vazio
            } catch (error) {
                console.error('Erro ao obter objeto detalhado:', error);
            }
        };

        fetchData();
    }, [infantil]);

    return (
        <div>
            <Navbar title="Página do Objeto" />
            {objeto && Object.keys(objeto).length > 0 ? (
                <>
                    <h2>{objeto.nome}</h2>
                    <p>Descrição: {objeto.descricao}</p>
                    <p>Autor: {objeto.usuario}</p>
                    <p>Data de Inclusão: {objeto.data_inclusao}</p>
                    <p>ID: {objeto._id}</p>
                </>
            ) : (
                <p>Objeto não encontrado ou informações indisponíveis.</p>
            )}
            <Footer names={['BEATRIZ RODRIGUES ALFREDO']} discipline="Frameworks2" professor="Prof. Ricardo" />
        </div>
    );
}

export default ObjetoDetalhado;
