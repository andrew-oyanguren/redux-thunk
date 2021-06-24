import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [ // use these to generate items from our component using map().
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote.',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The second book I ever wrote',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map(item => ( // map through our array of objects and return jsx components.
           <ProductItem
            key={item.id} // remember eatch rendered list item must have a key in react.
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
