const path = process.env.PUBLIC_URL;

function About() {
	return (
		<section id='about'>
			<div className='inner'>
				<h2>About me</h2>
				<div className='about_box'>
					<div className='right'>
						<div className='pic'>
							<img src={`${path}/img/my.jpg`} alt='증명사진' />
						</div>
					</div>
					<div className='left'>
						<div className='about_text'>
							<h3>
								안녕하세요,
								<br /> 프론트엔드 개발자로 새로운 도약을 꿈꾸는 고유라입니다.
							</h3>
							<div className='desc'>
								<p>
									저는 지난 4년동안 퍼블리셔로 일하며, 개발에 관심을 가졌습니다.
									<br />
									내가 구현한대로 작동되는 사이트에 애정이 생김과 동시에 더 넓은
									영역으로 발을 넓히고 싶은 갈증이 생겼습니다. <br />
									퇴사후 스터디를 진행하며, ES6, REACT, NODE등을 공부하며 역량을
									늘렸습니다. <br />
									빠르게 변화하는 트랜드에 맞춰 계속 되는 공부와 자기개발을 통해
									성장하는 프론트엔드 개발자가 되겠습니다. <br /> 감사합니다.
								</p>
							</div>
							<div className='mysite'>
								<a href='https://github.com/EuraKo' target='_blank'>
									<img src={`${path}/img/git.png`} alt='깃허브 주소 바로가기' />
									git hub
								</a>
								<a href='https://mongzs.tistory.com/' target='_blank'>
									<img
										src={`${path}/img/blog.png`}
										alt='블로그 주소 바로가기'
									/>
									blog
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
