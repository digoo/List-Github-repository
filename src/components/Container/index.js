import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px; /* Largura maxima para o container */
  background: #fff; /* Cor para o container */
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0, 1); /*echo x e y = 0, com 20px de blur, com opacidade mais baixa usou a funcao rgba(r=0,g=0,b=0, opacidade=0.1)*/
  padding: 30px;
  margin: 80px auto; /* 80px(cima/baixo) auto(laterais, assim ficará sempre centralizado no meio da tela) */

  h1 {
    font-size: 20px;
    display: flex; /*Para que o icon e o texto fiquem alinhados verticalmente*/
    flex-direction: row;
    align-items: center; /* Permite que o icon fique alinhado ao texto*/

    svg {
      /* O icone do github é um svg*/
      margin-right: 10px; /*10px de espacamento entre o icon e o texto*/
    }
  }
`;

export default Container;
