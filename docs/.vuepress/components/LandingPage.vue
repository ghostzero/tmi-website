<template>
  <div class="landing-page">
    <div class="heading">
      <h1>TMI.php</h1>
      <h3>The Twitch Message Interface for PHP 7.4+</h3>
      <p>Inspired by tmi.js and php-irc-client this package is a full featured, high performance Twitch IRC client written in PHP 7.4.</p>
      <p>Also have a look at ghostzero/tmi-cluster. TMI Cluster is a Laravel package that makes the PHP TMI client scalable.</p>

      <div>
        <a href="/docs/" class="getting-started">
          Getting Started ->
        </a>
      </div>
    </div>

    <div class="footer">
      MIT Licensed | Copyright © 2020-present René Preuß & Contributors
    </div>
  </div>
</template>

<script>
export default {
name: "LandingPage"
}
</script>

<style scoped>
  h1 {
    font-size: 5rem;
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 30px;
  }
  p {
    padding-bottom: 1rem;
  }
  .heading {
    padding-top: 50px;
    padding-bottom: 25px;
    font-family: 'JetBrains Mono', 'Inter', sans-serif;
  }

  .getting-started {
    display: inline-block;
    margin: 1rem auto;
    padding: 1rem 2rem;
    color: black;
    background: white;
    border-radius: 4px;
    font-weight: bold;
  }
  .landing-page {
    text-align: center;
    width: 50%;
    margin: auto auto;
    color: white;
  }

  @media(max-width:768px){
    .landing-page {
      width: 90%!important;
    }
    .heading {
      padding: 1rem!important;
    }
    .footer {
      margin-top: 0!important;
    }
  }

  .footer {
    margin-top: 100px;
    padding: 1rem;
    color: rgba(255,255,255,.2);
  }
</style>
