import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme['gray-900']};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: 0.3s background-color;
  }
`
