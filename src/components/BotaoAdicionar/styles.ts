import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
export const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  text-decoration: none;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
