const path = process.env.PUBLIC_URL;
function PortReact() {
	return (
		<section id='portReact' className='flio_big'>
			<div className='inner'>
				<h2>PORTFOLIO - REACT.</h2>
			</div>
			<div className='flio_wrap'>
				<div className='img'>
					<img
						src={`${path}/img/massive_1.png`}
						alt='포트폴리오 massive 메인 이미지'
					/>
				</div>

				<div className='info inner'>
					<dl>
						<dt>TITLE</dt>
						<dd>massive .</dd>
						<dt>URL</dt>
						<dd>
							<a
								href='https://eurako.github.io/massive'
								className='cont'
								target='_blank'>
								https://eurako.github.io/massive
							</a>
						</dd>
						<dt>DESCRIPTION</dt>
						<dd>
							리액트를 사용한 프로젝트로 redux와 redux의 미들웨어인 redux-saga를
							적용하여 상태관리를 했습니다. 서브페이지의 컴포넌트를 메인으로
							불러와 컴포넌트의 재사용성을 높였습니다.
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
										src={`${path}/img/icon/icon_saga.png`}
										alt='아이콘 리덕스사가'
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
										src={`${path}/img/icon/icon_res.png`}
										alt='아이콘 반응형'
									/>
								</li>
								<li>
									<img src={`${path}/img/icon/icon_git.png`} alt='아이콘 깃' />
								</li>
							</ul>
						</dd>
					</dl>
					<a href={`${path}/img/massive.pdf`} download className='btn_normal'>
						작업설명서 다운로드
					</a>
				</div>
			</div>
		</section>
	);
}

export default PortReact;
