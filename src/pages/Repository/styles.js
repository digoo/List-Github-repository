import styled, { keyframes } from 'styled-components';

import { getLuminance } from 'polished';

const rotate = keyframes`
from {
transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 30px;

  svg {
    animation: ${rotate} 2s linear infinite;
    margin-right: 30px;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 15px; /*Pra distanciar a lista do header*/
  margin-top: 30px; /*30px para a border-top ficar 30x30 do header e da lista*/
  border-top: 1px solid #eee;
  list-style: none; /* para remover as bolinhas da lista*/

  li {
    display: flex; /* Ordenou na horizontal por conta do flex: img -> link \/ owmer */
    padding: 15px 10px; /*15px em cima e 10px nas laterais*/
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }
        /* span {
          background: ${props => props.background};
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        } */
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssueLabel = styled.span`
  background: ${props => `#${props.background}`};
  color: ${props =>
    `${
      getLuminance(`#${props.background}`) <= getLuminance('#808080')
        ? '#FFF'
        : '#000'
    }`};
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  padding: 3px 4px;
  margin-left: 10px;
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;
    &:nth-child(${props => props.active + 1}) {
      background: #576574;
      color: white;
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
