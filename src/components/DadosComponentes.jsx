import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MeuComponente() {
  const [dados, setDados] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <div>
      <h1>{dados.contextualizacao}</h1>
      {}
    </div>
  );
}

export default MeuComponente;
