import React from 'react';

export const metadata = {
  title: 'about page',
  description: 'Usando travessuras',
  keywords: 'tuffy, paff, any, piff',
};

const page = () => {
  return (
    <section>
      <h2>About</h2>
      <p>
        O processo ETL (Extração, Transformação e Carga) é uma técnica de
        integração de dados usada em bancos de dados. Ele envolve a extração de
        dados de várias fontes, a transformação dos dados para um formato
        consistente e a carga dos dados em um único destino, como um data
        warehouse.
      </p>
      <p>
        A extração de dados pode ser realizada de diferentes fontes, como bancos
        de dados, arquivos, aplicativos, dispositivos e serviços da web. A
        transformação de dados envolve a limpeza, normalização, agregação e
        enriquecimento dos dados extraídos. A carga de dados é a etapa final, em
        que os dados transformados são carregados em um data warehouse ou em
        outro sistema de destino para análise e relatórios.
      </p>
      <p>
        O processo ETL é essencial para manter dados precisos e atualizados em
        uma organização. Ele ajuda a garantir a consistência dos dados, a
        eliminar redundâncias e a melhorar a qualidade dos dados usados em
        análises e relatórios. Além disso, o ETL permite que as empresas tenham
        uma visão mais completa de seus dados e tomem decisões mais informadas
        com base nessas informações.
      </p>
    </section>
  );
};

export default page;
