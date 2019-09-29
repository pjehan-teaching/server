(function() {

  setTimeout(function() {

    Chart.defaults.global.defaultFontSize = 22;

    new Chart(document.getElementById('http-servers').getContext('2d'), {
      type: 'pie',
      data: {
        labels: ['Apache', 'NGINX', 'IIS', 'LiteSpeed', 'Google'],
        datasets: [{
          backgroundColor: ['#d22027', '#34a94e', '#5a9ad3', '#f8d032', ''],
          data: [44.3, 41, 8.9, 3.9, 0.9]
        }]
      }
    });

  }, 1000);

})();
