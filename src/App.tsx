import css from './App.module.css'
import Dependency from './components/Page/Dependency/Dependency'
import { IDependencyPage } from './model/dependencyPage'
import { PageType } from './model/pageType'
import { useState } from 'react'
import Eos from './components/Page/Eos/Eos'
import { IEosPage } from './model/EosPage'

function App() {
	const [data, setDependencyData] = useState<IDependencyPage | IEosPage>({} as IDependencyPage | IEosPage)
	window.addEventListener('message', event => {
		setDependencyData(event.data.data)
	})
	let page = <></>

	switch (data.pageType) {
		case PageType.Dependency:
			page = <Dependency data={data}/>
			break
		case PageType.Eos:
			page = <Eos data={data}/>
			break
		default:
			page = <>Nothing to show</>
	}

	return (
		<div className={css.App}>
			<div className={css['App-body']}>{page}</div>
		</div>
	)
}

export default App