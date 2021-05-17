import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;

    color:var(--white)
}
html,body, #root{
    max-height: 100vh;
    max-width: 100wh;

    height: 100%;
    width: 100%;
}
*,input,button{
    border:0;
    background:none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
html{
    background: var(--primary);
}
:root{
    ${(props) => {
      const theme = props.theme;

      let append = "";
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}:${value};`;
      });
      return append;
    }}
}

`;
