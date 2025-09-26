import React from 'react';
import Home from './home';

function IndexPage() {
  return <Home />;
}

export const Head = () => (
  <>
    <title>Ammar Khurshid | Portfolio</title>
    <meta name='description' content='The portfolio of Ammar Khurshid, a developer.' />
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' />
    <script src='https://www.google.com/recaptcha/api.js' async defer></script>
    <script type='text/javascript'>var onloadCallback = function() {alert('grecaptcha is ready!')};</script>
  </>
);
export default IndexPage;
