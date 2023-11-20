import React from 'react';
import Home from './home';

function IndexPage() {
    return <Home />;
}

const Head = () => (
    <>
        <title>Portfolio</title>;
        <link
            href='https://fonts.googleapis.com/css?family=Lato:300,400,700,900'
            rel='stylesheet'
        />
        <script
            src='https://www.google.com/recaptcha/api.js'
            async
            defer
        ></script>
        <script type='text/javascript'>
            var onloadCallback = function() {alert('grecaptcha is ready!')};
        </script>
    </>
);
export default IndexPage;
