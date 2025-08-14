import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import RestaurantRow from '../components/RestaurantRow';

const API_URL = 'http://localhost:8080/api/restaurantes';

const DashboardPage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Restaurante');

    useEffect(() => {
        // --- MODO DETETIVE ATIVADO ---
        console.log(`Buscando estabelecimentos para a categoria: "${selectedCategory}"`);
        setError(''); // Limpa erros antigos antes de uma nova busca

        axios.get(`${API_URL}?category=${selectedCategory}`)
            .then(response => {
                // Se a busca deu certo, vamos ver o que o backend retornou
                console.log("Resposta da API recebida com sucesso:", response.data);
                
                if (response.data.length === 0) {
                    console.warn("A API retornou uma lista vazia. Verifique se há dados para esta categoria no backend.");
                }

                setRestaurants(response.data);
            })
            .catch(error => {
                // Se a busca falhou, vamos ver o erro detalhado
                console.error("ERRO ao buscar dados da API:", error);
                setError(`Falha ao carregar. O backend está rodando e acessível? Erro: ${error.message}`);
            });
    }, [selectedCategory]);

    return (
        // O container principal foi movido para o AuthLayout, então podemos remover daqui
        <>
            <CategoryList 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory} 
            />
            
            {/* Exibe a mensagem de erro na tela se houver algum problema */}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            
            <RestaurantRow title={`Famosos em ${selectedCategory}`} restaurants={restaurants} />
        </>
    );
};

export default DashboardPage;
