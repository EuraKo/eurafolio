const path = process.env.PUBLIC_URL;
function PortEs6() {
	return (
		<section id='PortEs6' className='flio_big'>
			<div className='inner'>
				<h2>PORTFOLIO - ES6.</h2>
			</div>
			<div className='flio_wrap'>
				<div className='img'>
					<img
						src={`${path}/img/hello_1.png`}
						alt='포트폴리오 헬로 앤 코 메인 이미지'
					/>
				</div>

				<div className='info inner'>
					<dl>
						<dt>TITLE</dt>
						<dd>Hello &amp; Co.</dd>
						<dt>URL</dt>
						<dd>
							<a
								href='https://eurako.github.io/helloCo/'
								className='cont'
								target='_blank'>
								https://eurako.github.io/helloCo/
							</a>
						</dd>
						<dt>DESCRIPTION</dt>
						<dd>
							그동안 사용했던 jQuery를 완전히 배제시켜 ES6문법만을 사용하여
							제작한 사이트입니다. <br />
							Promise를 사용하여 데이터를 비동기처리했고, 유투브 API와 kakao
							API를 학습했습니다. <br />
							또한 이미지를 손쉽게 공유할 수 있는 flick API를 사용했고,
							회원가입페이지의 유효성 인증 로직을 구현헀습니다.
						</dd>
						<dt>SKILLS</dt>
						<dd>
							<ul className='skills'>
								<li>
									<img
										src={`${path}/img/icon/icon_es6.png`}
										alt='아이콘 에크마스크립트 6'
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
				</div>
			</div>
		</section>
	);
}

export default PortEs6;
