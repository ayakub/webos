import App from "next/app";
import Document,{Html, Head, Nextscript, Main} from "next/document";
import { render } from "nprogress";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static getInitialProps ({renderPage}) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App  {...props}/>)
        );
        const styleTags = sheet.getStyleElement();
        console.log(styleTags);
        return { ...page, styleTags };
    }
    render () {
        return (
            <Html lang="en-CA">
                <Head />
                <body>
                    <Main />
                    <Nextscript />
                </body>
            </Html>
        )
    }
}