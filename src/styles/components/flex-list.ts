import styled from 'styled-components'

interface FlexListProps {
  direction: 'row' | 'column'
  gap: number
}

export const FlexList = styled.div<FlexListProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;

  gap: ${(props) => props.gap}rem;
`
