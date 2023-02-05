import bcrypt from 'bcrypt'

const data = {
  users: [
    {
      name: 'Paula',
      email: 'admin@example.com',
      password: bcrypt.hashSync('mypassword123', 10),
      isAdmin: true
    },
    {
      name: 'Christian',
      email: 'admin2@example.com',
      password: bcrypt.hashSync('mypassword456', 10),
      isAdmin: true
    },
    {
      name: 'Ian',
      email: 'email1@example.com',
      password: bcrypt.hashSync('fdtgreg48', 10),
      isAdmin: false
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: bcrypt.hashSync('jane12345', 10),
      isAdmin: false
    },
    {
      name: 'John',
      email: 'john@example.com',
      password: bcrypt.hashSync('john123456', 10),
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
    }
  ]
}

export default data
