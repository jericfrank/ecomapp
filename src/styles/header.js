import styled from 'styled-components';
import { Header as H, Left as L, Right as R, Body as B } from 'native-base';

export const Header = styled( H )`
`;

export const Left = styled( L )`
    flex: 1;
`;

export const Body = styled( B )`
    flex            : 1;
    justify-content : center;
    align-items     : center;
`;

export const Right = styled( R )`
    flex: 1;
`;