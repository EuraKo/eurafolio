const path = process.env.PUBLIC_URL;
function Skill() {
	const skillObj = [
		{
			title: 'Front End Developer',
			items: [
				{ name: 'react', img: 'react' },
				{ name: 'redux', img: 'redux' },
				{ name: 'redux-saga', img: 'saga' },
				{ name: 'ES6', img: 'es6' },
				{ name: 'html', img: 'html' },
				{ name: 'css', img: 'css' },
				{ name: 'js', img: 'js' },
				{ name: 'pug', img: 'pug' },
				{ name: 'scss', img: 'scss' },
				{ name: 'jquery', img: 'jquery' },
				{ name: 'three.js', img: 'three' },
			],
		},

		{
			title: 'Version Control',
			items: [
				{ name: 'git', img: 'git' },
				{ name: 'svn', img: 'svn' },
			],
		},
		{
			title: 'Back End',
			items: [
				{ name: 'node', img: 'node' },
				{ name: 'mongo DB', img: 'mongo' },
				{ name: 'firebase', img: 'firebase' },
				{ name: 'heroku', img: 'heroku' },
			],
		},
		{
			title: 'Design Tool',
			items: [
				{ name: 'photoshop', img: 'ps' },
				{ name: 'illust', img: 'ai' },
				{ name: 'XD', img: 'xd' },
				{ name: 'zeplin', img: 'zeplin' },
				{ name: 'figma', img: 'figma' },
				{ name: 'sketch', img: 'sketch' },
			],
		},
	];
	return (
		<section id='skill'>
			<div className='inner'>
				<h2>Skill</h2>
				<div className='skill_box'>
					{skillObj.map((skill, idx) => {
						return (
							<article key={idx} className='skill_group'>
								<h3>{skill.title}</h3>
								<div className='icon_group'>
									{skill.items.map((item, idx) => {
										return (
											<div className='icon_box' key={idx}>
												<img
													src={`${path}/img/icon/icon_${item.img}.png`}
													alt=''
												/>
												<p>{item.name}</p>
											</div>
										);
									})}
								</div>
							</article>
						);
					})}

					<article className='skill_group'>
						<h3>Certificate</h3>
						<ul>
							<li>
								컴퓨터그래픽스운용기능사 / <span>한국산업인력공단</span>
							</li>
							<li>
								웹디자인기능사 / <span>한국산업인력공단</span>
							</li>
							<li>
								GTQ 그래픽 1급 / <span>한국생산성본부</span>
							</li>
							<li>
								GTQi 그래픽 1급 / <span>한국생산성본부</span>
							</li>
							<li>
								실기교사 교원자격증(디자인) / <span>교육과학기술부</span>
							</li>
						</ul>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Skill;
