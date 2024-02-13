const http = require('http');
const PORT = 3000;

// Sample products data
const menProducts = [
  { id: 0, name: 'Rado wrist Watch', Brand: 'RADO',category: 'Men`s Watch', Price:'155555 INR' ,Origin:'Swizerland' },
   
   
    {
      id: 1,
      name: 'MacBook Pro',
      brand: 'Apple',
      category: 'Laptop',
      price: '1999 USD',
      origin: 'United States'
    },
    {
      id: 2,
      name: 'Samsung QLED TV',
      brand: 'Samsung',
      category: 'Television',
      price: '1499 USD',
      origin: 'South Korea'
    },
    {
      id: 3,
      name: 'Nike Air Jordan 1',
      brand: 'Nike',
      category: 'Sneakers',
      price: '150 USD',
      origin: 'United States'
    },
    {
      id: 4,
      name: 'Rolex Submariner',
      brand: 'Rolex',
      category: 'Watch',
      price: '8000 USD',
      origin: 'Switzerland'
    },
    {
      id: 5,
      name: 'Sony WH-1000XM4',
      brand: 'Sony',
      category: 'Headphones',
      price: '349 USD',
      origin: 'Japan'
    },
    {
      id: 6,
      name: 'Canon EOS R5',
      brand: 'Canon',
      category: 'Camera',
      price: '3899 USD',
      origin: 'Japan'
    },
    {
      id: 7,
      name: 'Chanel No. 5',
      brand: 'Chanel',
      category: 'Perfume',
      price: '135 USD',
      origin: 'France'
    },
    {
      id: 8,
      name: 'Tesla Model S',
      brand: 'Tesla',
      category: 'Car',
      price: '79990 USD',
      origin: 'United States'
    },
    {
      id: 9,
      name: 'PlayStation 5',
      brand: 'Sony',
      category: 'Gaming Console',
      price: '499 USD',
      origin: 'Japan'
    },
    {
      id: 10,
      name: 'Nespresso VertuoPlus',
      brand: 'Nespresso',
      category: 'Coffee Machine',
      price: '199 USD',
      origin: 'Switzerland'
    }
  ];
  
  
  


  const womenProducts = [
    { 
       
      id: 1,
      name: 'MacBook Air',
      brand: 'Apple',
      category: 'Laptop',
      price: '999 USD',
      origin: 'United States'
       
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      brand: 'Samsung',
      category: 'Smartphone',
      price: '799 USD',
      origin: 'South Korea'
    },
    {
      id: 3,
      name: 'Louis Vuitton Neverfull MM',
      brand: 'Louis Vuitton',
      category: 'Handbag',
      price: '1500 USD',
      origin: 'France'
    },
    {
      id: 4,
      name: 'Gucci GG Marmont Matelassé Mini Bag',
      brand: 'Gucci',
      category: 'Handbag',
      price: '980 USD',
      origin: 'Italy'
    },
    {
      id: 5,
      name: 'Chanel Classic Flap Bag',
      brand: 'Chanel',
      category: 'Handbag',
      price: '6500 USD',
      origin: 'France'
    },
    {
      id: 6,
      name: 'Christian Louboutin Pigalle Follies',
      brand: 'Christian Louboutin',
      category: 'Shoes',
      price: '695 USD',
      origin: 'France'
    },
    {
      id: 7,
      name: 'Tiffany & Co. T Diamond Bracelet',
      brand: 'Tiffany & Co.',
      category: 'Jewelry',
      price: '2000 USD',
      origin: 'United States'
    },
    {
      id: 8,
      name: 'Dior J`adore Eau de Parfum',
      brand: 'Dior',
      category: 'Perfume',
      price: '120 USD',
      origin: 'France'
    },
    {
      id: 9,
      name: 'Gucci Bloom Eau de Parfum',
      brand: 'Gucci',
      category: 'Perfume',
      price: '110 USD',
      origin: 'Italy'
    },
    {
      id: 10,
      name: 'Rolex Datejust',
      brand: 'Rolex',
      category: 'Watch',
      price: '10000 USD',
      origin: 'Switzerland'
    }
  ];
  

// Create HTTP server
const server = http.createServer((req, res) => {
  // Set content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // API endpoints
  if (req.url === '/') {
    res.end(JSON.stringify({ msg: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.end(JSON.stringify(womenProducts));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Page not found' }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
