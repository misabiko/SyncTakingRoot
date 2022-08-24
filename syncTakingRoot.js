{
	const playlistId = 'PLQY6PNl6p3MYWVZa5R5Emdi-CxgM40Scm';
	const ids = {
		6: 'f8pYxhDEgfg',
		7: '-EvbkIEPyf4',
		8: 'grn83Yt38qY',
		9: 'ACquTCLlOIM',
		10: 'gbCQXFdWHVU',
		11: 'YAAZCej0G-U',
		12: '0zbyDEqSfGQ',
		13: 'DX2LKT7LyZc',
		14: 'PjGfsuEgF6g',
		15: 'AA_pu-2Omtg',
		16: '2QGxavJrkHQ',
		17: 'IV9N_Lr61QY',
		18: '66drz4evPZk',
		19: 'oWL9TbzmY1o',
		20: 'j93RsBBPG5E',
		21: 'eiSOcbhBSWQ',
		22: 'gCmBrd7etjg',
		23: 'w_IyQlLq_fw',
		24: 'AsM6_fhicWg',
		1: 'tbp02PPpjg8',
		2: 'kMJANxxZojM',
		3: 'poe38GyO5fU',
		4: 'To8ZL_ARBQ0',
		5: 'odCEqn9Rz1w',
	};

	const time = new Date();
	const hour = time.getHours();
	const seconds = time.getMinutes() * 60 + time.getSeconds();

	const id = ids[hour];
	const search = new URLSearchParams(window.location.search);

	//Check if we're already on the right video, if so, just change the timestamp and play.
	if (window.location.hostname.endsWith('youtube.com') && search.get('v') === id && search.get('list') === playlistId) {
		//Assumes there's only one video, might be wrong with ads
		const video = document.getElementsByTagName('video')[0];
		video.currentTime = seconds;
		video.play();
	}else {
		window.location.href = `https://www.youtube.com/watch?v=${id}&list=${playlistId}&index=${hour >= 6 ? hour - 5 : hour + 19}&t=${seconds}`
	}
}