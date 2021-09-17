import styled from 'styled-components'

interface GridListProps {
  columns: number
  gap: number
}

export const GridList = styled.div<GridListProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: ${(props) => props.gap}rem;

  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
