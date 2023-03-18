$(document).ready(function () {
  var position = [
    { top: '35%', left: '42%' },
    { top: '1%', left: '66%' },
    { top: '-7%', left: '12%' },
    { top: '61%', left: '25%' },
    { top: '52%', left: '70%' },
    { top: '26%', left: '10%' },
    { top: '6%', left: '37%' },
    { top: '21%', left: '74%' },
  ]

  if (window.innerWidth < 500) {
    position.map((pos) => {
      pos.top = parseInt(pos.top) + 7 + '%'
      pos.left = parseInt(pos.left) - 10 + '%'
    })
  }

  $('.start').click(function () {
    var score = 0
    $('.score').html(score)

    $('.start-container').css('display', 'none')
    $('.background-container').css('display', 'block')
    $('.score-container').css('display', 'block')

    $('.worm').click(function () {
      score++
      $('.score').html(score)
    })

    const interval = setInterval(() => {
      var pos = position[Math.floor(Math.random() * position.length)]
      $('.worm').css({
        display: 'block',
        top: pos.top,
        left: pos.left,
      })
    }, 580)

    setTimeout(() => {
      $('.start-container').css('display', 'flex')
      $('.background-container').css('display', 'none')
      $('.score-container').css('display', 'none')
      $('.result').html(`Score: ${score}`)
      $('.start').html('Play again')
      $('.worm').css('display', 'none')
      clearInterval(interval)
    }, 20000)
  })
})
