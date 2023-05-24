import bcryptjs from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Paula',
      email: 'admin@example.com',
      password: bcryptjs.hashSync('mypassword123', 10),
      isAdmin: true
    },
    {
      name: 'Christian',
      email: 'admin2@example.com',
      password: bcryptjs.hashSync('mypassword456', 10),
      isAdmin: true
    },
    {
      name: 'Ian',
      email: 'email1@example.com',
      password: bcryptjs.hashSync('fdtgreg48', 10),
      isAdmin: false
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: bcryptjs.hashSync('jane12345', 10),
      isAdmin: false
    },
    {
      name: 'John',
      email: 'john@example.com',
      password: bcryptjs.hashSync('john123456', 10),
      isAdmin: false
    }
  ],
  products: [
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in hendrerit libero, vitae accumsan nibh. Quisque id lectus eu lacus faucibus suscipit vel sed nisi. Nam faucibus, tortor id blandit auctor, velit ligula pulvinar quam, a placerat enim felis et nunc. Sed molestie velit libero, tempus malesuada mauris efficitur at. Suspendisse sem quam, elementum sit amet tempor non, interdum quis elit. Praesent interdum, sapien sit amet porta consectetur, tortor ligula molestie massa, nec tincidunt enim dui sit amet diam. Donec ornare venenatis libero, in eleifend risus commodo id. Nam pellentesque tortor vitae turpis egestas lacinia.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Awesome Utils',
      slug: 'utils',
      category: 'stationery',
      image: '/images/pencils-1.jpg',
      imageOnHover: '/images/pencils-1-1.jpg',
      images: [
        '/images/pencils-1.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 70,
      brand: 'Norma',
      rating: 2.5,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Pink Combo',
      slug: 'pink-combo',
      category: 'stationery',
      image: '/images/pencils-2.jpg',
      imageOnHover: '/images/pencils-2-1.jpg',
      images: [
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg'
      ],
      price: 200,
      brand: 'Faber Castle',
      rating: 5,
      numReview: 60,
      countInStock: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Cute pencils and wire',
      slug: 'pencils-wire',
      category: 'writting',
      image: '/images/pencils-3.jpg',
      imageOnHover: '/images/pencils-3-1.jpg',
      images: [
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg'
      ],
      price: 10,
      brand: 'Norma',
      rating: 4.5,
      numReview: 10,
      countInStock: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Colors',
      slug: 'colors',
      category: 'writting',
      image: '/images/pencils-4.jpg',
      imageOnHover: '/images/pencils-4-1.jpg',
      images: [
        '/images/pencils-4.jpg',
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg'
      ],
      price: 15,
      brand: 'Papier',
      rating: 3.0,
      numReview: 20,
      countInStock: 180,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Notebook',
      slug: 'notebook',
      category: 'writting',
      image: '/images/pencils-5.jpg',
      imageOnHover: '/images/pencils-5-1.jpg',
      images: [
        '/images/pencils-5.jpg',
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg'
      ],
      price: 40,
      brand: 'Hasbro',
      rating: 5.0,
      numReview: 9,
      countInStock: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Markers',
      slug: 'markers',
      category: 'writting',
      image: '/images/pencils-6.jpg',
      imageOnHover: '/images/pencils-6-1.jpg',
      images: [
        '/images/pencils-6.jpg',
        '/images/pencils-1.jpg',
        '/images/pencils-2.jpg',
        '/images/pencils-3.jpg',
        '/images/pencils-4.jpg'
      ],
      price: 17,
      brand: 'Fabber Castle',
      rating: 3.8,
      numReview: 30,
      countInStock: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ],
  deliveryCompanies: [
    {
      id: '63518932f3ef4256d999b524',
      deliveryCompanyName: 'DEPRISA',
      deliveryCompanyImgUrl:
        'https://s3.amazonaws.com/images.dev.mipaquete/DEPRISA.jpg',
      shippingCost: 19300,
      collectionCommissionWithRate: null,
      collectionCommissionWithOutRate: null,
      isMessengerService: false,
      shippingTime: 1440,
      realWeightVolume: 6,
      officeAddress: null,
      forwardingService: false,
      singleOfficeDelivery: true,
      pickupService: true,
      pickupTime: 360,
      deliveryCompanyId: '632b73069fd0d82d8b77c6b5',
      routeType: 'local',
      score: 4.9,
      insurancePercentage: 0,
      operationPercentage: 0.01
    },
    {
      id: '60b4912fe0692b26737d0e7a',
      deliveryCompanyName: 'TCC',
      deliveryCompanyImgUrl:
        'https://s3.amazonaws.com/images.dev.mipaquete/tcc.png',
      shippingCost: 18710,
      collectionCommissionWithRate: null,
      collectionCommissionWithOutRate: null,
      isMessengerService: false,
      shippingTime: 1440,
      realWeightVolume: 6,
      officeAddress: 'Cra 64 # 67 B-35',
      forwardingService: false,
      singleOfficeDelivery: false,
      pickupService: true,
      pickupTime: 360,
      deliveryCompanyId: '5ca22d9587981510092322f6',
      routeType: 'local',
      score: 4.5,
      insurancePercentage: 0.006,
      operationPercentage: 0
    },
    {
      id: '60b4a78d8824222d5098907e',
      deliveryCompanyName: 'SERVIENTREGA',
      deliveryCompanyImgUrl:
        'https://s3.amazonaws.com/images.dev.mipaquete/servientrega.png',
      shippingCost: 9425,
      collectionCommissionWithRate: null,
      collectionCommissionWithOutRate: null,
      isMessengerService: true,
      shippingTime: 2880,
      realWeightVolume: 3,
      officeAddress: 'CRA 48 # 18 - 47',
      forwardingService: false,
      singleOfficeDelivery: false,
      pickupService: true,
      pickupTime: 360,
      deliveryCompanyId: '5fceb46c8229797cb139a7aa',
      routeType: 'local',
      score: 4.6,
      insurancePercentage: 0.02,
      operationPercentage: 0
    },
    {
      id: '60b4af2c8824222d50a9367a',
      deliveryCompanyName: 'Envia',
      deliveryCompanyImgUrl:
        'https://s3.amazonaws.com/images.dev.mipaquete/envia.png',
      shippingCost: 8350,
      collectionCommissionWithRate: null,
      collectionCommissionWithOutRate: null,
      isMessengerService: true,
      shippingTime: 4320,
      realWeightVolume: 3,
      officeAddress: null,
      forwardingService: false,
      singleOfficeDelivery: false,
      pickupService: true,
      pickupTime: 360,
      deliveryCompanyId: '6080a75ef08a770ddd9724fd',
      routeType: 'local',
      score: 4.3,
      insurancePercentage: 0.01,
      operationPercentage: 0
    },
    {
      id: '60b491e2e0692b26737dc197',
      deliveryCompanyName: 'Coordinadora',
      deliveryCompanyImgUrl:
        'https://s3.amazonaws.com/images.dev.mipaquete/coordinadora.png',
      shippingCost: 16290,
      collectionCommissionWithRate: null,
      collectionCommissionWithOutRate: null,
      isMessengerService: false,
      shippingTime: 1440,
      realWeightVolume: 6,
      officeAddress: 'Calle 30 A No.53-16',
      forwardingService: false,
      singleOfficeDelivery: false,
      pickupService: true,
      pickupTime: 360,
      deliveryCompanyId: '5cb0f5fd244fe2796e65f9fc',
      routeType: 'local',
      score: 4.9,
      insurancePercentage: 0.006,
      operationPercentage: 0
    },
    {
      id: '60b491e2e0692b26737dc197',
      deliveryCompanyName: 'Coordinadora',
      deliveryCompanyImgUrl:
        'https://s3.amazonaws.com/images.dev.mipaquete/coordinadora.png',
      shippingCost: 16290,
      collectionCommissionWithRate: null,
      collectionCommissionWithOutRate: null,
      isMessengerService: false,
      shippingTime: 1440,
      realWeightVolume: 6,
      officeAddress: 'Calle 30 A No.53-16',
      forwardingService: false,
      singleOfficeDelivery: false,
      pickupService: true,
      pickupTime: 360,
      deliveryCompanyId: '5cb0f5fd244fe2796e65f9fy',
      routeType: 'local',
      score: 4.9,
      insurancePercentage: 0.006,
      operationPercentage: 0
    }
  ],
  orders: [
    {
      _id: {
        $oid: '642cb593b7d551f44e0ebec5'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '20230404787wv3o',
      orderItems: [
        {
          name: 'Colors',
          quantity: 2,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '642cb593b7d551f44e0ebec6'
          }
        },
        {
          name: 'Markers',
          quantity: 1,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '642cb593b7d551f44e0ebec7'
          }
        },
        {
          name: 'Pink Combo',
          quantity: 1,
          image: '/images/pencils-2.jpg',
          price: 200,
          slug: 'pink-combo',
          _id: {
            $oid: '642cb593b7d551f44e0ebec8'
          }
        },
        {
          name: 'Notebook',
          quantity: 1,
          image: '/images/pencils-5.jpg',
          price: 40,
          slug: 'notebook',
          _id: {
            $oid: '642cb593b7d551f44e0ebec9'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Christian Torres',
        address: 'Calle 12 AA Sur #55D-30',
        city: 'Medellin',
        postalCode: '50001',
        country: 'Colombia'
      },
      paymentMethod: 'MercadoPago',
      itemsPrice: 287,
      shippingPrice: 0,
      taxPrice: 43.05,
      totalPrice: 330.05,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-04T23:41:07.799Z'
      },
      updatedAt: {
        $date: '2023-04-09T00:30:21.006Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-09T00:30:21.002Z'
      },
      paymentResult: {
        id: '1313897891',
        order: {
          id: '8615944470',
          type: 'mercadopago'
        },
        status: 'approved',
        result: 'accredited',
        payer: {
          firstName: '',
          lastName: '',
          email: 'test_user_80507629@testuser.com',
          phone: '',
          identification: {
            number: '32659430',
            type: 'DNI'
          }
        }
      }
    },
    {
      _id: {
        $oid: '642cb9e6a0daa3c72fab0e92'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '20230404878ff0J',
      orderItems: [
        {
          name: 'Colors',
          quantity: 2,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '642cb9e6a0daa3c72fab0e93'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '642cb9e6a0daa3c72fab0e94'
          }
        },
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '642cb9e6a0daa3c72fab0e95'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Christian Torres',
        address: 'Calle 12 AA Sur #55D-30',
        city: 'Medellin',
        postalCode: '50001',
        country: 'Colombia'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 204,
      shippingPrice: 0,
      taxPrice: 30.6,
      totalPrice: 234.6,
      isPaid: false,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-04T23:59:34.889Z'
      },
      updatedAt: {
        $date: '2023-04-04T23:59:34.889Z'
      },
      __v: 0
    },
    {
      _id: {
        $oid: '642cbb73a0daa3c72fab0eaa'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6f'
      },
      orderNumber: '202304048686tRB',
      orderItems: [
        {
          name: 'Cute pencils and wire',
          quantity: 2,
          image: '/images/pencils-3.jpg',
          price: 10,
          slug: 'pencils-wire',
          _id: {
            $oid: '642cbb73a0daa3c72fab0eab'
          }
        },
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '642cbb73a0daa3c72fab0eac'
          }
        },
        {
          name: 'Markers',
          quantity: 1,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '642cbb73a0daa3c72fab0ead'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Christian Torres',
        address: 'Calle 12 AA Sur #55D-30',
        city: 'Medellin',
        postalCode: '50001',
        country: 'Colombia'
      },
      paymentMethod: 'Credit Card',
      itemsPrice: 177,
      shippingPrice: 15,
      taxPrice: 26.55,
      totalPrice: 218.55,
      isPaid: false,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-05T00:06:11.872Z'
      },
      updatedAt: {
        $date: '2023-04-05T00:06:11.872Z'
      },
      __v: 0
    },
    {
      _id: {
        $oid: '642ce2276c0bcc099765c19c'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304049196x3od',
      orderItems: [
        {
          name: 'Colors',
          quantity: 2,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '642ce2276c0bcc099765c19d'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '642ce2276c0bcc099765c19e'
          }
        },
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '642ce2276c0bcc099765c19f'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Christian Torres',
        address: 'Calle 12 AA Sur #55D-30',
        city: 'Medellin',
        postalCode: '50001',
        country: 'Colombia'
      },
      paymentMethod: 'Credit Card',
      itemsPrice: 204,
      shippingPrice: 0,
      taxPrice: 30.6,
      totalPrice: 234.6,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-05T02:51:19.205Z'
      },
      updatedAt: {
        $date: '2023-04-09T00:00:04.963Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-09T00:00:04.959Z'
      },
      paymentResult: {
        id: '1312479804',
        order: {
          id: '8615429196',
          type: 'mercadopago'
        },
        status: 'approved',
        result: 'accredited',
        payer: {
          firstName: '',
          lastName: '',
          email: 'test_user_80507629@testuser.com',
          phone: '',
          identification: {
            number: '32659430',
            type: 'DNI'
          }
        }
      }
    },
    {
      _id: {
        $oid: '64346dba9c0f73a5de2daef8'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304102038gBws',
      orderItems: [
        {
          name: 'Colors',
          quantity: 2,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '64346dba9c0f73a5de2daef9'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '64346dba9c0f73a5de2daefa'
          }
        },
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '64346dba9c0f73a5de2daefb'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Paula Morales',
        address: 'Calle 1 de 1 de 1',
        city: 'Medellin',
        postalCode: '11111123',
        country: 'Colombia'
      },
      paymentMethod: 'MercadoPago',
      itemsPrice: 204,
      shippingPrice: 0,
      taxPrice: 30.6,
      totalPrice: 234.6,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-10T20:12:42.043Z'
      },
      updatedAt: {
        $date: '2023-04-10T21:47:51.801Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-10T21:47:51.791Z'
      },
      paymentResult: {
        id: '1313931101',
        order: {
          id: '8645474279',
          type: 'mercadopago'
        },
        status: 'approved',
        result: 'accredited',
        payer: {
          firstName: '',
          lastName: '',
          email: 'test_user_80507629@testuser.com',
          phone: '+null null',
          identification: {
            number: '32659430',
            type: 'DNI'
          }
        }
      }
    },
    {
      _id: {
        $oid: '643490aa713462e2adff2d10'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304106557H9XB',
      orderItems: [
        {
          name: 'Colors',
          quantity: 1,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '643490aa713462e2adff2d11'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Paula Morales',
        address: 'Calle 1 de 1 de 1',
        city: 'Medellin',
        postalCode: '11111123',
        country: 'Colombia'
      },
      paymentMethod: 'MercadoPago',
      itemsPrice: 15,
      shippingPrice: 15,
      taxPrice: 2.25,
      totalPrice: 32.25,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-10T22:41:46.566Z'
      },
      updatedAt: {
        $date: '2023-04-10T22:42:03.380Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-10T22:42:03.376Z'
      },
      paymentResult: {
        id: '1313931641',
        order: {
          id: '8646905821',
          type: 'mercadopago'
        },
        status: 'approved',
        result: 'accredited',
        payer: {
          firstName: '',
          lastName: '',
          email: 'test_user_80507629@testuser.com',
          phone: '+No area code No phone number',
          identification: {
            number: '32659430',
            type: 'DNI'
          }
        }
      }
    },
    {
      _id: {
        $oid: '6434a571296ef9562c4a2981'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304105591jbO6',
      orderItems: [
        {
          name: 'Colors',
          quantity: 2,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '6434a571296ef9562c4a2982'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '6434a571296ef9562c4a2983'
          }
        },
        {
          name: 'Cute pencils and wire',
          quantity: 2,
          image: '/images/pencils-3.jpg',
          price: 10,
          slug: 'pencils-wire',
          _id: {
            $oid: '6434a571296ef9562c4a2984'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Paula Morales',
        address: 'Calle 1 de 1 de 1',
        city: 'Medellin',
        postalCode: '11111123',
        country: 'Colombia'
      },
      paymentMethod: 'MercadoPago',
      itemsPrice: 84,
      shippingPrice: 15,
      taxPrice: 12.6,
      totalPrice: 111.6,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-11T00:10:25.597Z'
      },
      updatedAt: {
        $date: '2023-04-11T00:11:13.820Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-11T00:11:13.819Z'
      },
      paymentResult: {
        id: '1313933571',
        order: {
          id: '8649022807',
          type: 'mercadopago'
        },
        status: 'approved',
        result: 'accredited',
        payer: {
          firstName: '',
          lastName: '',
          email: 'test_user_80507629@testuser.com',
          phone: '+No area code No phone number',
          identification: {
            number: '32659430',
            type: 'DNI'
          }
        }
      }
    },
    {
      _id: {
        $oid: '6434d7132b52e75f090c2b18'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304101777V9Mt',
      orderItems: [
        {
          name: 'Colors',
          quantity: 2,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '6434d7132b52e75f090c2b19'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '6434d7132b52e75f090c2b1a'
          }
        },
        {
          name: 'Pink Combo',
          quantity: 1,
          image: '/images/pencils-2.jpg',
          price: 200,
          slug: 'pink-combo',
          _id: {
            $oid: '6434d7132b52e75f090c2b1b'
          }
        },
        {
          name: 'Notebook',
          quantity: 1,
          image: '/images/pencils-5.jpg',
          price: 40,
          slug: 'notebook',
          _id: {
            $oid: '6434d7132b52e75f090c2b1c'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Paula Morales',
        address: 'Calle 1 de 1 de 1',
        city: 'Medellin',
        postalCode: '11111123',
        country: 'Colombia'
      },
      paymentMethod: 'MercadoPago',
      itemsPrice: 304,
      shippingPrice: 0,
      taxPrice: 45.6,
      totalPrice: 349.6,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-11T03:42:11.783Z'
      },
      updatedAt: {
        $date: '2023-04-11T03:42:45.052Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-11T03:42:45.049Z'
      },
      paymentResult: {
        id: '1312498178',
        order: {
          id: '8651615807',
          type: 'mercadopago'
        },
        status: 'approved',
        result: 'accredited',
        payer: {
          firstName: '',
          lastName: '',
          email: 'test_user_80507629@testuser.com',
          phone: '+No area code No phone number',
          identification: {
            number: '32659430',
            type: 'DNI'
          }
        }
      }
    },
    {
      _id: {
        $oid: '64360ca3796eb5f393ce2f39'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304119034Fvjr',
      orderItems: [
        {
          name: 'Colors',
          quantity: 3,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '64360ca3796eb5f393ce2f3a'
          }
        },
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '64360ca3796eb5f393ce2f3b'
          }
        },
        {
          name: 'Cute pencils and wire',
          quantity: 1,
          image: '/images/pencils-3.jpg',
          price: 10,
          slug: 'pencils-wire',
          _id: {
            $oid: '64360ca3796eb5f393ce2f3c'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Christian Torres',
        address: 'Calle 12 AA Sur #55D-30',
        city: 'Medellin',
        postalCode: '50001',
        country: 'Colombia'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 195,
      shippingPrice: 15,
      taxPrice: 29.25,
      totalPrice: 239.25,
      isPaid: false,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-12T01:42:59.047Z'
      },
      updatedAt: {
        $date: '2023-04-12T01:42:59.047Z'
      },
      __v: 0
    },
    {
      _id: {
        $oid: '643729117d328a40242e2a22'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304123638ca6T',
      orderItems: [
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '643729117d328a40242e2a23'
          }
        },
        {
          name: 'Pink Combo',
          quantity: 2,
          image: '/images/pencils-2.jpg',
          price: 200,
          slug: 'pink-combo',
          _id: {
            $oid: '643729117d328a40242e2a24'
          }
        },
        {
          name: 'Cute pencils and wire',
          quantity: 1,
          image: '/images/pencils-3.jpg',
          price: 10,
          slug: 'pencils-wire',
          _id: {
            $oid: '643729117d328a40242e2a25'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Paula Morales',
        address: 'Calle 1 de 1 de 1',
        city: 'Medellin',
        postalCode: '11111123',
        country: 'Colombia'
      },
      paymentMethod: 'MercadoPago',
      itemsPrice: 550,
      shippingPrice: 0,
      taxPrice: 82.5,
      totalPrice: 632.5,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-12T21:56:33.644Z'
      },
      updatedAt: {
        $date: '2023-04-12T21:58:11.473Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-12T21:58:11.470Z'
      },
      paymentResult: {
        id: '1314017569',
        order: {
          id: '8684107871',
          type: 'mercadopago'
        },
        status: 'approved',
        result: 'accredited',
        payer: {
          firstName: '',
          lastName: '',
          email: 'test_user_80507629@testuser.com',
          phone: '+No area code No phone number',
          identification: {
            number: '32659430',
            type: 'DNI'
          }
        }
      }
    },
    {
      _id: {
        $oid: '64372a227d328a40242e2a37'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '2023041266977tV5',
      orderItems: [
        {
          name: 'Awesome Utils',
          quantity: 3,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '64372a227d328a40242e2a38'
          }
        },
        {
          name: 'Cute pencils and wire',
          quantity: 2,
          image: '/images/pencils-3.jpg',
          price: 10,
          slug: 'pencils-wire',
          _id: {
            $oid: '64372a227d328a40242e2a39'
          }
        },
        {
          name: 'Colors',
          quantity: 1,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '64372a227d328a40242e2a3a'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Paula Morales',
        address: 'Calle 1 de 1 de 1',
        city: 'Medellin',
        postalCode: '11111123',
        country: 'Colombia'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 245,
      shippingPrice: 0,
      taxPrice: 36.75,
      totalPrice: 281.75,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-12T22:01:06.699Z'
      },
      updatedAt: {
        $date: '2023-04-12T22:11:50.421Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-12T22:11:50.417Z'
      },
      paymentResult: {
        id: '16N0034051890020M',
        order: {},
        status: 'COMPLETED',
        result: 'accredited',
        payer: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'sb-gaztl25498995@personal.example.com',
          phone: 'Paypal does not support phone numbers',
          identification: {}
        }
      }
    },
    {
      _id: {
        $oid: '64372e74718f4ec61f70963d'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304122474tGvc',
      orderItems: [
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '64372e74718f4ec61f70963e'
          }
        },
        {
          name: 'Pink Combo',
          quantity: 1,
          image: '/images/pencils-2.jpg',
          price: 200,
          slug: 'pink-combo',
          _id: {
            $oid: '64372e74718f4ec61f70963f'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Paula Morales',
        address: 'Calle 1 de 1 de 1',
        city: 'Medellin',
        postalCode: '11111123',
        country: 'Colombia'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 340,
      shippingPrice: 0,
      taxPrice: 51,
      totalPrice: 391,
      isPaid: true,
      isDelivered: false,
      createdAt: {
        $date: '2023-04-12T22:19:32.484Z'
      },
      updatedAt: {
        $date: '2023-04-12T22:20:42.567Z'
      },
      __v: 0,
      paidAt: {
        $date: '2023-04-12T22:20:42.565Z'
      },
      paymentResult: {
        id: '8LB50320SN630484P',
        order: {},
        status: 'COMPLETED',
        result: 'accredited',
        payer: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'sb-gaztl25498995@personal.example.com',
          phone: 'Paypal does not support phone numbers',
          identification: {}
        }
      }
    },
    {
      _id: {
        $oid: '643868fed710ce4bdf7aa87b'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304134968pMPv',
      orderItems: [
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '643868fed710ce4bdf7aa87c'
          }
        }
      ],
      shippingAddress: {
        fullName: 'Christian Torres',
        address: 'Calle 12 AA Sur #55D-30',
        city: 'Medellin',
        postalCode: '50001',
        country: 'Colombia'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 140,
      shippingPrice: 15,
      taxPrice: 21,
      totalPrice: 176,
      isPaid: true,
      isDelivered: false,
      paidAt: {
        $date: '2023-04-13T20:43:01.914Z'
      },
      createdAt: {
        $date: '2023-04-13T20:41:34.972Z'
      },
      updatedAt: {
        $date: '2023-04-13T20:43:01.922Z'
      },
      __v: 0,
      paymentResult: {
        id: '10A03752X3222154L',
        order: {},
        status: 'COMPLETED',
        result: 'accredited',
        payer: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'sb-gaztl25498995@personal.example.com',
          phone: 'Paypal does not support phone numbers',
          identification: {}
        }
      }
    },
    {
      _id: {
        $oid: '644ad6c7852d682a55a51a74'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '2023042774135yRl',
      orderItems: [
        {
          name: 'Colors',
          quantity: 3,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '644ad6c7852d682a55a51a75'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '644ad6c7852d682a55a51a76'
          }
        },
        {
          name: 'Awesome Utils',
          quantity: 1,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '644ad6c7852d682a55a51a77'
          }
        }
      ],
      shippingInfo: {
        fullName: 'Christian Torres',
        cellPhone: '3024686403',
        address: 'Calle 12 AA Sur #55D-30',
        city: '05001000',
        department: 'Antioquia',
        country: 'Colombia',
        isCashOnDelivery: false,
        deliveryCompany: '5ca22d9587981510092322f6'
      },
      paymentMethod: 'MercadoPago',
      itemsPrice: 149,
      shippingPrice: 8640,
      taxPrice: 0,
      totalPrice: 8789,
      isPaid: false,
      isDelivered: false,
      paidAt: null,
      createdAt: {
        $date: '2023-04-27T20:10:47.420Z'
      },
      updatedAt: {
        $date: '2023-04-27T20:10:47.420Z'
      },
      __v: 0
    },
    {
      _id: {
        $oid: '644b0289fd9a6423de5ee2e1'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202304279223RQIc',
      orderItems: [
        {
          name: 'Colors',
          quantity: 3,
          image: '/images/pencils-4.jpg',
          price: 15,
          slug: 'colors',
          _id: {
            $oid: '644b0289fd9a6423de5ee2e2'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 17,
          slug: 'markers',
          _id: {
            $oid: '644b0289fd9a6423de5ee2e3'
          }
        },
        {
          name: 'Awesome Utils',
          quantity: 1,
          image: '/images/pencils-1.jpg',
          price: 70,
          slug: 'utils',
          _id: {
            $oid: '644b0289fd9a6423de5ee2e4'
          }
        }
      ],
      shippingInfo: {
        fullName: 'Christian Torres',
        cellPhone: '3024686403',
        address: 'Calle 12 AA Sur #55D-30',
        city: '05001000',
        department: 'Antioquia',
        country: 'Colombia',
        isCashOnDelivery: false,
        deliveryCompany: '5ca22d9587981510092322f6'
      },
      paymentMethod: 'MercadoPago',
      itemsPrice: 149,
      shippingPrice: 8640,
      taxPrice: 0,
      totalPrice: 8789,
      isPaid: true,
      isDelivered: false,
      paidAt: {
        $date: '2023-04-28T00:45:36.337Z'
      },
      createdAt: {
        $date: '2023-04-27T23:17:29.230Z'
      },
      updatedAt: {
        $date: '2023-04-28T00:45:36.340Z'
      },
      __v: 0,
      paymentResult: {
        id: '1312718212',
        order: {
          id: '8942648366',
          type: 'mercadopago'
        },
        status: 'approved',
        result: 'accredited',
        payer: {
          firstName: '',
          lastName: '',
          email: 'test_user_80507629@testuser.com',
          phone: '+No area code No phone number',
          identification: {
            number: '32659430',
            type: 'DNI'
          }
        }
      }
    },
    {
      _id: {
        $oid: '6454125568c296bf6ee81529'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6f'
      },
      orderNumber: '202305047753gTaR',
      orderItems: [
        {
          name: 'Awesome Utils',
          quantity: 2,
          image: '/images/pencils-1.jpg',
          price: 7000,
          slug: 'utils',
          _id: {
            $oid: '6454125568c296bf6ee8152a'
          }
        },
        {
          name: 'Pink Combo',
          quantity: 1,
          image: '/images/pencils-2.jpg',
          price: 20000,
          slug: 'pink-combo',
          _id: {
            $oid: '6454125568c296bf6ee8152b'
          }
        },
        {
          name: 'Cute pencils and wire',
          quantity: 1,
          image: '/images/pencils-3.jpg',
          price: 10500,
          slug: 'pencils-wire',
          _id: {
            $oid: '6454125568c296bf6ee8152c'
          }
        }
      ],
      shippingInfo: {
        fullName: 'Paula Morales',
        cellPhone: '3024686403',
        address: 'Calle 1 de 1 de 1',
        city: '05001000',
        department: 'Antioquia',
        country: 'Colombia',
        isCashOnDelivery: false,
        deliveryCompany: '6080a75ef08a770ddd9724fd'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 44500,
      shippingPrice: 7450,
      taxPrice: 0,
      totalPrice: 51950,
      isPaid: true,
      isDelivered: false,
      paidAt: {
        $date: '2023-05-04T21:04:53.134Z'
      },
      createdAt: {
        $date: '2023-05-04T20:15:17.758Z'
      },
      updatedAt: {
        $date: '2023-05-04T21:04:53.137Z'
      },
      __v: 0,
      paymentResult: {
        id: '8PM610038D4896356',
        order: {},
        status: 'COMPLETED',
        result: 'accredited',
        payer: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'sb-gaztl25498995@personal.example.com',
          phone: 'Paypal does not support phone numbers',
          identification: {
            number: 'Paypal Payer ID: 6UUB2DG53LXK6'
          }
        }
      }
    },
    {
      _id: {
        $oid: '64541eb35d6c42c60fcbb4d0'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6f'
      },
      orderNumber: '202305043533QP9o',
      orderItems: [
        {
          name: 'Awesome Utils',
          quantity: 1,
          image: '/images/pencils-1.jpg',
          price: 7000,
          slug: 'utils',
          _id: {
            $oid: '64541eb35d6c42c60fcbb4d1'
          }
        },
        {
          name: 'Colors',
          quantity: 1,
          image: '/images/pencils-4.jpg',
          price: 6500,
          slug: 'colors',
          _id: {
            $oid: '64541eb35d6c42c60fcbb4d2'
          }
        }
      ],
      shippingInfo: {
        fullName: 'Paula Morales',
        cellPhone: '3024686403',
        address: 'Calle 1 de 1 de 1',
        city: '05001000',
        department: 'Antioquia',
        country: 'Colombia',
        isCashOnDelivery: false,
        deliveryCompany: '5fceb46c8229797cb139a7aa'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 13500,
      shippingPrice: 9425,
      taxPrice: 0,
      totalPrice: 22925,
      isPaid: true,
      isDelivered: false,
      paidAt: {
        $date: '2023-05-04T21:09:29.207Z'
      },
      createdAt: {
        $date: '2023-05-04T21:08:03.544Z'
      },
      updatedAt: {
        $date: '2023-05-04T21:09:29.208Z'
      },
      __v: 0,
      paymentResult: {
        id: '64S3837942039681E',
        order: {},
        status: 'COMPLETED',
        result: 'accredited',
        payer: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'sb-gaztl25498995@personal.example.com',
          phone: 'Paypal does not support phone numbers',
          identification: {
            number: 'Paypal Payer ID: 6UUB2DG53LXK6'
          }
        }
      }
    },
    {
      _id: {
        $oid: '645420457eabaa8b3b707a5d'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6f'
      },
      orderNumber: '202305045376OHGF',
      orderItems: [
        {
          name: 'Colors',
          quantity: 1,
          image: '/images/pencils-4.jpg',
          price: 6500,
          slug: 'colors',
          _id: {
            $oid: '645420457eabaa8b3b707a5e'
          }
        },
        {
          name: 'Cute pencils and wire',
          quantity: 2,
          image: '/images/pencils-3.jpg',
          price: 10500,
          slug: 'pencils-wire',
          _id: {
            $oid: '645420457eabaa8b3b707a5f'
          }
        }
      ],
      shippingInfo: {
        fullName: 'Paula Morales',
        cellPhone: '3024686403',
        address: 'Calle 1 de 1 de 1',
        city: '05001000',
        department: 'Antioquia',
        country: 'Colombia',
        isCashOnDelivery: false,
        deliveryCompany: '5ca22d9587981510092322f6'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 27500,
      shippingPrice: 8640,
      taxPrice: 0,
      totalPrice: 36140,
      isPaid: true,
      isDelivered: false,
      paidAt: {
        $date: '2023-05-04T21:15:05.162Z'
      },
      createdAt: {
        $date: '2023-05-04T21:14:45.389Z'
      },
      updatedAt: {
        $date: '2023-05-04T21:15:05.164Z'
      },
      __v: 0,
      paymentResult: {
        id: '94M94055WL8394245',
        order: {},
        status: 'COMPLETED',
        result: 'accredited',
        payer: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'sb-gaztl25498995@personal.example.com',
          phone: 'Paypal does not support phone numbers',
          identification: {
            number: 'Paypal Payer ID: 6UUB2DG53LXK6'
          }
        }
      }
    },
    {
      _id: {
        $oid: '645424e87eabaa8b3b707a74'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6f'
      },
      orderNumber: '202305042862kCY3',
      orderItems: [
        {
          name: 'Cute pencils and wire',
          quantity: 2,
          image: '/images/pencils-3.jpg',
          price: 10500,
          slug: 'pencils-wire',
          _id: {
            $oid: '645424e87eabaa8b3b707a75'
          }
        },
        {
          name: 'Pink Combo',
          quantity: 1,
          image: '/images/pencils-2.jpg',
          price: 20000,
          slug: 'pink-combo',
          _id: {
            $oid: '645424e87eabaa8b3b707a76'
          }
        }
      ],
      shippingInfo: {
        fullName: 'Paula Morales',
        cellPhone: '3024686403',
        address: 'Calle 1 de 1 de 1',
        city: '05001000',
        department: 'Antioquia',
        country: 'Colombia',
        isCashOnDelivery: false,
        deliveryCompany: '632b73069fd0d82d8b77c6b5'
      },
      paymentMethod: 'Paypal',
      itemsPrice: 41000,
      shippingPrice: 9371,
      taxPrice: 0,
      totalPrice: 50371,
      isPaid: true,
      isDelivered: false,
      paidAt: {
        $date: '2023-05-04T21:35:36.537Z'
      },
      createdAt: {
        $date: '2023-05-04T21:34:32.867Z'
      },
      updatedAt: {
        $date: '2023-05-04T21:35:36.539Z'
      },
      __v: 0,
      paymentResult: {
        id: '3P841383SL251622D',
        order: {},
        status: 'COMPLETED',
        result: 'accredited',
        payer: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'sb-gaztl25498995@personal.example.com',
          phone: 'Paypal does not support phone numbers',
          identification: {
            number: 'Paypal Payer ID: 6UUB2DG53LXK6'
          }
        }
      }
    },
    {
      _id: {
        $oid: '645acf6aa663dfd846ecebff'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6e'
      },
      orderNumber: '202305098120sjXr',
      orderItems: [
        {
          name: 'Colors',
          quantity: 2,
          image: '/images/pencils-4.jpg',
          price: 6500,
          slug: 'colors',
          _id: {
            $oid: '645acf6aa663dfd846ecec00'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 7300,
          slug: 'markers',
          _id: {
            $oid: '645acf6aa663dfd846ecec01'
          }
        }
      ],
      shippingInfo: {
        fullName: 'Christian Torres',
        cellPhone: '3024686403',
        address: 'Calle 12 AA Sur #55D-30',
        city: '05001000',
        department: 'Antioquia',
        country: 'Colombia',
        isCashOnDelivery: false,
        deliveryCompany: '5cb0f5fd244fe2796e65f9fc'
      },
      paymentMethod: 'Botón Bancolombia',
      itemsPrice: 27600,
      shippingPrice: 7571,
      taxPrice: 0,
      totalPrice: 35171,
      isPaid: false,
      isDelivered: false,
      paidAt: null,
      createdAt: {
        $date: '2023-05-09T22:55:38.132Z'
      },
      updatedAt: {
        $date: '2023-05-09T22:55:38.132Z'
      },
      __v: 0
    },
    {
      _id: {
        $oid: '645ad186a663dfd846ecec29'
      },
      user: {
        $oid: '642500a1da1be0f336c42b6f'
      },
      orderNumber: '202305098502DuFO',
      orderItems: [
        {
          name: 'Colors',
          quantity: 3,
          image: '/images/pencils-4.jpg',
          price: 6500,
          slug: 'colors',
          _id: {
            $oid: '645ad186a663dfd846ecec2a'
          }
        },
        {
          name: 'Markers',
          quantity: 2,
          image: '/images/pencils-6.jpg',
          price: 7300,
          slug: 'markers',
          _id: {
            $oid: '645ad186a663dfd846ecec2b'
          }
        },
        {
          name: 'Awesome Utils',
          quantity: 1,
          image: '/images/pencils-1.jpg',
          price: 7000,
          slug: 'utils',
          _id: {
            $oid: '645ad186a663dfd846ecec2c'
          }
        }
      ],
      shippingInfo: {
        fullName: 'Christian Torres',
        cellPhone: '3024686403',
        address: 'Calle 12 AA Sur #55D-30',
        city: '05001000',
        department: 'Antioquia',
        country: 'Colombia',
        isCashOnDelivery: false,
        deliveryCompany: '5ca22d9587981510092322f6'
      },
      paymentMethod: 'Botón Bancolombia',
      itemsPrice: 41100,
      shippingPrice: 8640,
      taxPrice: 0,
      totalPrice: 49740,
      isPaid: true,
      isDelivered: false,
      paidAt: {
        $date: '2023-05-09T23:07:58.000Z'
      },
      createdAt: {
        $date: '2023-05-09T23:04:38.507Z'
      },
      updatedAt: {
        $date: '2023-05-09T23:07:58.500Z'
      },
      __v: 0,
      paymentResult: {
        id: '_ttdoQ0FfgX',
        order: {
          type: 'transferVoucher',
          id: 'TRpFS2IWgokT'
        },
        status: 'approved',
        result: 'null'
      }
    }
  ]
}

export default data
