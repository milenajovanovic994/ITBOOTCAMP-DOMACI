import { useEffect, useState } from 'react'
import CompanyName from './components/CompanyName'
import Launches from './components/Launches'
import Select from './components/Select'
import { getCompanyInfo, getPastLaunches } from './service'


const App = () => {
	const [launches, setLaunches] = useState([])
	const [companyName, setCompanyName] = useState('')
	const [select,setSelect] = useState([])
	

	useEffect(() => {
		getPastLaunches().then(res => {
			setLaunches(res.data)
		})
		getCompanyInfo().then(res => {
			setCompanyName(res.data.name)
		})
	}, [])

	

	return (
		<>
			<Select setSelect={setSelect} launches={launches} />
			<CompanyName name={companyName} />
			<Launches launches={launches.filter(launch => launch.date_utc.startsWith(select))} />
		</>
	)
}

export default App;
