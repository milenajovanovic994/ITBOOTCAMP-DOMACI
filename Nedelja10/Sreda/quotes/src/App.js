import { useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import CreateQuote from './components/CreateQuote';
import Home from './components/Home'
import Login from './components/Login';
import Quotes from './components/Quotes';
import Register from './components/Register';
import StyledLink from './components/StyledLink';

const App = () => {
	const [user, setUser] = useState(null)
	const [users, setUsers] = useState([])
	const [error, setError] = useState('')
	const [quotes, setQuotes] = useState([])



	return (
		<Router>
			<nav>
				<StyledLink>
					<Link to="/quotes">Quotes</Link>
				</StyledLink>
				<StyledLink>
					<Link to="/createquote">Create Quote</Link>
				</StyledLink>

				{user ?
					user.username
					:
					<>
						<StyledLink>
							<Link to="/">Home</Link>
						</StyledLink>
						<StyledLink>
							<Link to="/login">Login</Link>
						</StyledLink>
						<StyledLink>
							<Link to="/register">Register</Link>
						</StyledLink>
					</>
				}


			</nav>
			<Switch>
				<Route exact path="/">
					<Home user={user} />
				</Route>
				<Route exact path="/login">
					<Login setUser={setUser} setUsers={setUsers} error={error} setError={setError} />
				</Route>
				<Route exact path="/register">
					<Register users={users} setUsers={setUsers} error={error} setError={setError} />
				</Route>
				<Route exact path="/quotes">
					<Quotes quotes={quotes} setQuotes={setQuotes} user={user} />
				</Route>
				<Route exact path="/createquote">
					<CreateQuote setQuotes={setQuotes} user={user} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
