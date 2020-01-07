import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px; /* Para dar um espacamento entre o texto h1 e o form*/
  display: flex; /*Para garantir que o form e o botao fiquem um ao lado do outro e nao botao embaixo, independente do tamanho da janela*/
  flex-direction: row;

  input {
    flex: 1; /*Faz com que o form ocupe todo o espaço disponivel*/
    border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')}; /*cinza solido bem fraquinho para mudar o padrao*/
    padding: 10px 15px; /* 10px cima e baixo, 15px esqueda e direita*/
    border-radius: 4px;
    font-size: 16px;

    transition: border 0.25s ease-out;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Submitbutton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;

export const ToDelete = styled.button`
  background: #7159c1;
  display: flex;
  flex-direction: row;
  border: 4px;
  padding: 5px 5px;
  border-radius: 4px;
`;

// export const Title = styled.h1`
//   /* font-size: 24px;
//   color: ${props => (props.error ? 'red' : '#7159c1')};
//   font-family: Arial, Helvetica, sans-serif;

//   small {
//     font-size: 14px;
//     color #333;
//   } */
// `;
