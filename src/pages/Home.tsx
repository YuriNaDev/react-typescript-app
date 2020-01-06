import React from 'react'
import FcOne from '../components/functionComponents/FcOne'
import FcTwo from '../components/functionComponents/FcTwo'
import FcThree from '../components/functionComponents/FcThree'

const Home: React.FC = () => (
	<>
		<FcOne message="FcOne" />
		<FcTwo message="FcTwo" />
		<FcThree message="FcThree" />
	</>
)

export default Home
