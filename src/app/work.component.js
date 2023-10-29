import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import '../App.css';

const WorkComponent = () => {

	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		
		

	},[]);

	return (
		<Box 
		sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}
		>
			<Typography id='work' variant='h4'>Work</Typography>
			<ul id='work-list'>
								<li>
					2017-2019 | <a href='/funily'>Funily</a>
				<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
				</li>
				<li>
					2019-2023 | <a href='/approve-it'>Approve iT</a>
				<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
				</li>
				<li>
					2019-2023 | <a href='/manage-it'>Manage iT</a>
				<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
				</li>
				<li>
					2014-Present | <a href='/app-script'>Google AppScript Developer</a>
				<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
				</li>
			</ul>
			

		</Box>
	)
}

export default WorkComponent
