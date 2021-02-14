import { useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Categories from './components/Categories';
import Category from './components/Category';
import Home from './components/Home';
import StyledNav from './components/StyledNav';

const App = () => {
	const [products, setProducts] = useState([])


	return (
		<Router>
			<StyledNav>
				<ul>
					<li><Link to="/" style={{ fontSize: '20px', textDecoration: 'none', padding: '5px', color: '#291E30'}}>Home</Link></li>
					<li><Link to="/categories" style={{ fontSize: '20px', textDecoration: 'none', padding: '5px', color: '#291E30' }}>Categories</Link></li>
				</ul>
			</StyledNav>
			<Switch>
				<Route path="/categories/:category">
					<Category products={products} />
				</Route>
				<Route exact path="/">
					<Home setProducts={setProducts} products={products} />
				</Route>
				<Route path="/categories">
					<Categories />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
