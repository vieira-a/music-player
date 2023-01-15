import styled from "styled-components";

export const CoverImg = styled.img`
  border-radius: 6px;
  width: ${props => props.wlg ? '189.66px' : props.wsm ? '84.03px' : '189.66px'};
  height: ${props => props.hlg ? '189.66px' : props.hsm ? '84.03px' : '189.66px'};

`