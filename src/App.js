import { Container, makeStyles } from '@material-ui/core';
import ItemListContainer from './component/item-list-container/ItemListContainer';
import NavBar from './component/navbar/NavBar';

const useStyles = makeStyles({
  appContainer:{
    display: 'flex',
    flexDirection:'column'
  },
  content:{
    marginTop: '1em',
  }
})

const App = () => {
  const products = [
    {
      title: 'Tales of Japan Hardcover Notebook',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1403/8979/products/Tales-of-Japan-Hardcover-Notebook-manga-style-notebook-lined-blank-grid-paper-stationery-school-supplies-office-supplies-22_1024x1024.png?v=1602285677', 
      prize: '$25.99 USD', 
    }, 
    {
      title: 'KOKUYO Campus Notebook - Semi B5 - Lined',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1403/8979/products/Kokuyo-Campus-Notebook-Semi-B5-Dotted-6-mm-Rule-ruled-paper-stationery-school-supplies-office-supplies_grande.png?v=1581968040', 
      prize: '$4.99 USD', 
    }, 
    {
      title: 'Sumikko Gurashi Daily Notebook',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1403/8979/products/1-pc-Sumikko-Gurashi-Daily-planner-Notebook-leather-planner-stationery-school-supplies-office-supplies_1024x1024.png?v=1618650994', 
      prize:'$25.99 USD', 
    }
  ];

  const classes = useStyles()

  return (
    <div className={classes.appContainer}>
        <NavBar/>
        <Container className={classes.content}>
          <ItemListContainer products={products}/>
        </Container>
    </div>
  )
}

export default App;