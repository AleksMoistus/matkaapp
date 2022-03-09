const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const hike1 = {
  id: 0,
  name: "Forest hike",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam dolor ex, incidunt facere similique beatae totam ratione, culpa, iusto et aperiam nostrum tenetur hic minima itaque perspiciatis rerum distinctio.",
  imgURL: "../../public/Assets/foresthike.jpg"
}
const hike2 = {
  id: 1,
  name: "Mountain hike",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam dolor ex, incidunt facere similique beatae totam ratione, culpa, iusto et aperiam nostrum tenetur hic minima itaque perspiciatis rerum distinctio.",
  imgURL: "../../public/Assets/foresthike.jpg"
}
const hike3 = {
  id: 2,
  name: "Cross terrain hike",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam dolor ex, incidunt facere similique beatae totam ratione, culpa, iusto et aperiam nostrum tenetur hic minima itaque perspiciatis rerum distinctio.",
  imgURL: "../../public/Assets/foresthike.jpg"
}

const hikes = [hike1, hike2, hike3]


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {hikes: hikes}))
  .get('/kontakt', (req, res) => res.render('pages/kontakt'))
  .get('/upcoming', (req, res) => res.render('pages/upcoming'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  