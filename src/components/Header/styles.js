import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
`;

export const Logo = styled.div`
  width: 230px;
  background: ${({ theme }) => darken(0.05, theme.colors.primary)};

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: 20px;

    &:hover {
      color: ${({ theme }) => lighten(0.35, theme.colors.primary)}
    }

    span {
      font-weight: 300;
    }
  }
`;

export const ProfileMenu = styled.div`

`;
