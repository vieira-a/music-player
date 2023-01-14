import styled from "styled-components";
import { colors } from "../UI/colors"

export const Heading = styled.p`
  font-size: ${props => props.lg ? '2.4rem' : props.md ? '1.9rem' : props.sm ? '1.4rem' : ''};
  color: ${colors["gray-light-title"]};
`