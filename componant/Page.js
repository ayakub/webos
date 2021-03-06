import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`

html {
    --red: #ff0000;
    --black: 393939;
    --grey: #3A3A3A;
    -grey: var(--grey);
    --lightGrey: e1e1e1;
    --lightGray: var (--lightGray);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}
body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemfont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
}
a {
    text-decoration: none;
    color: var(---black);
}
a:hover {
    text-decoration: underline;
}
button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemfont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif,
}
`;

const innerStyles = styled.div`
max-width: var(--maxwidth);
margin: 0 auto;
padding: 2rem;
`;

export default function Page ({children, cool}) {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <innerStyles />
            {children}
        </div>
    );
}

Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.any,
};
