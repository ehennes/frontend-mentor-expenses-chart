module.exports=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" sizes="32x32" href="public/images/favicon-32x32.png">
  <link rel="stylesheet" type="text/css" href="public/css/main.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
    rel="stylesheet">

  <title>Frontend Mentor | Expenses chart component</title>
</head>
<body>
  <section>
    <header>
      <div class="header-text">
        <p class="header-text-title title-text">My balance</p>
        <p class="header-text-amount">$921.48</p>
      </div>
      <img src="public/images/logo.svg" alt="">
    </header>

    <main>
      <h1>Spending - Last 7 days</h1>
      <div class="chart">
        <div class="bar-container" data-spend-amount="">
          <div class="bar"></div>
          <p class="day">mon</p>
        </div>
        <div class="bar-container" data-spend-amount="">
          <div class="bar"></div>
          <p class="day">tue</p>
        </div>
        <div class="bar-container" data-spend-amount="">
          <div class="bar"></div>
          <p class="day">wed</p>
        </div>
        <div class="bar-container" data-spend-amount="">
          <div class="bar"></div>
          <p class="day">thu</p>
        </div>
        <div class="bar-container" data-spend-amount="">
          <div class="bar"></div>
          <p class="day">fri</p>
        </div>
        <div class="bar-container" data-spend-amount="">
          <div class="bar"></div>
          <p class="day">sat</p>
        </div>
        <div? class="bar-container" data-spend-amount="">
          <div class="bar"></div>
          <p class="day">sun</p>
        </div>  
      </div>
      <hr>
      <div class="total-spending">
        <div class="current-month-text">
          <p class="current-month-title title-text">Total this month</p>
          <p class="current-month-amount">$478.33</p>
        </div>
        <div class="last-month-text">
          <p class="last-month-change"><strong>+2.4%</strong></p>
          <p class="last-month-title title-text">from last month</p>
        </div>
      </div>
    </main>

    <footer>
      <small class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://www.linkedin.com/in/emily-hennes/"target="_blank">Emily Hennes</a>.
      </small>
    </footer>
  </section>
  <script src="https://unpkg.com/@popperjs/core@2"><\/script>
  <script src="https://unpkg.com/tippy.js@6"><\/script>
  <script src="src/js/index.js" type="text/javascript"><\/script>
</body>
</html>`;
