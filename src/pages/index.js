import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div>
      <Navbar>
        {/* <meta name="description" content="Explore a API BocaWeb para encontrar informações sobre animais de estimação." /> */}
      </Navbar>
      <br/>
      <section>
        <h2>Animais de Estimação</h2>
        <br/>
        <p>
          Seja Bem-vindo há seleção de animais de estimação!<br/> 
          Aqui, você pode descobrir várias informações sobre várias espécies e diferentes animais,
          desde seus nomes até descrições incrivéis.<br/>
          Clique no link abaixo para começar sua jornada.
        </p>
        <br/>
        <a
          href="https://www.bocaweb.com.br/apibocaweb?nome=animal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore a API de Animais de Estimação
        </a>
      </section>
      <br/>
      <Footer />
    </div>
  );
};

export default Index;