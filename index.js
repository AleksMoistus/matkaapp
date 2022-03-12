const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const hike1 = {
  id: 0,
  name: "Forest hike",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam dolor ex, incidunt facere similique beatae totam ratione, culpa, iusto et aperiam nostrum tenetur hic minima itaque perspiciatis rerum distinctio.",
  imgURL: "/Assets/foresthike.jpg",
  part: ['mati@matkaja.ee', 'kati@matkaja.ee'],
}
const hike2 = {
  id: 1,
  name: "Mountain hike",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam dolor ex, incidunt facere similique beatae totam ratione, culpa, iusto et aperiam nostrum tenetur hic minima itaque perspiciatis rerum distinctio.",
  imgURL: "/Assets/foresthike.jpg",
  part: ['klaabu@gmail.com'],
}
const hike3 = {
  id: 2,
  name: "Cross terrain hike",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam dolor ex, incidunt facere similique beatae totam ratione, culpa, iusto et aperiam nostrum tenetur hic minima itaque perspiciatis rerum distinctio.",
  imgURL: "/Assets/foresthike.jpg",
  part: [],
}

const hikes = [
  hike1, 
  hike2, 
  hike3,
{
  id: 3,
  name: "Beach hike",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam dolor ex, incidunt facere similique beatae totam ratione, culpa, iusto et aperiam nostrum tenetur hic minima itaque perspiciatis rerum distinctio.",
  imgURL: "/Assets/foresthike.jpg",
  part: [],
}

]

function showRegister(req, res){
  const index = parseInt(req.params.hike)
  console.log('valitud matk' + index)
  res.render('pages/register', {hike: hikes[index]})
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/kontakt', (req, res) => res.render('pages/kontakt'))
  .get('/upcoming', (req, res) => res.render('pages/upcoming', {hikes}))
  .get('/register/:hike', showRegister)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  