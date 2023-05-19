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
  ]
}

export default data
