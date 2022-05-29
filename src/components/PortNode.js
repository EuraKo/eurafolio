const path = process.env.PUBLIC_URL;
function PortNode() {
	return (
		<section id='PortNode' className='flio_big'>
			<div className='inner'>
				<h2>PORTFOLIO - node.</h2>
			</div>
			<div className='flio_wrap'>
				<div className='img'>
					<img
						src={`${path}/img/node_1.png`}
						alt='포트폴리오 node 메인 이미지'
					/>
				</div>

				<div className='info inner'>
					<dl>
						<dt>TITLE</dt>
						<dd>CRUD 게시판</dd>
						<dt>URL</dt>
						<dd>
							<a href='https://react-jun.herokuapp.com/' className='cont'>
								https://react-jun.herokuapp.com/
							</a>
						</dd>
						<dt>DESCRIPTION</dt>
						<dd>
							프론트앤드개발을 공부했지만, 백엔드와의 협업을 위해 최종 웹에
							배포되는 흐름을 이해해야겠다고 생각했습니다. 프레임워크는 react를
							썻고, NODE를 사용하여 서버를 구성하고, mongo DB를 사용하여 객체형
							DB설계를 경험했습니다. <br /> firebase를 사용하여 회원관리를
							학습했고, heroku를 통해 웹에 최종 배포했습니다.
						</dd>
						<dt>SKILLS</dt>
						<dd>
							<ul className='skills'>
								<li>
									<img
										src={`${path}/img/icon/icon_react.png`}
										alt='아이콘 리액트'
									/>
								</li>
								<li>
									<img
										src={`${path}/img/icon/icon_redux.png`}
										alt='아이콘 리덕스'
									/>
								</li>
								<li>
									<img
										src={`${path}/img/icon/icon_scss.png`}
										alt='아이콘 사스'
									/>
								</li>
								<li>
									<img
										src={`${path}/img/icon/icon_node.png`}
										alt='아이콘 노드'
									/>
								</li>
								<li>
									<img
										src={`${path}/img/icon/icon_mongo.png`}
										alt='아이콘 몽고디비'
									/>
								</li>
								<li>
									<img
										src={`${path}/img/icon/icon_firebase.png`}
										alt='아이콘 파이어베이스'
									/>
								</li>
								<li>
									<img
										src={`${path}/img/icon/icon_heroku.png`}
										alt='아이콘 헤로쿠'
									/>
								</li>
								<li>
									<img src={`${path}/img/icon/icon_git.png`} alt='아이콘 깃' />
								</li>
							</ul>
						</dd>
					</dl>
				</div>
			</div>
		</section>
	);
}

export default PortNode;
