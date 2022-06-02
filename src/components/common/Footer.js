const path = process.env.PUBLIC_URL;

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<h2 className='logo'>
					<a href='#intro'>
						<img src={`${path}/img/my_logo_wh.svg`} alt='메인로고' />
					</a>
				</h2>
				<div className='footer_box'>
					<ul>
						<li>제작자 : 고유라</li>
						<li>
							연락처 : <a href='tel:01082228443'>010.8222.8443</a>
						</li>
						<li>
							이메일 : <a href='mailto:sow5252@gmail.com'></a>sow5252@gmail.com
						</li>
					</ul>
					<div className='copy'>
						Copyright &copy; 2022. eura portfolio. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
