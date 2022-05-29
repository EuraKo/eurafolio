import Modal from './common/Modal';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const path = process.env.PUBLIC_URL;
function PortEtc() {
	const modal = useRef(null);
	const [index, setIndex] = useState(0);
	const projectData = useSelector((store) => store.projectReducer.project);

	const handleClick = (idx) => {
		modal.current.open();
		setIndex(idx);
	};
	return (
		<>
			<section id='proEtc'>
				<div className='inner'>
					<h2>I was a Web Publisher</h2>
					<p>
						퍼블리셔로 근무하던 기간동안의 포트폴리오입니다.
						<br />
						리스트를 클릭하면 상세내용을 볼 수 있습니다.
					</p>
					<ul className='folio_list'>
						{projectData.map((item, idx) => {
							return (
								<li
									className='item'
									key={idx}
									onClick={() => {
										handleClick(idx);
									}}>
									<div className='thum'>
										<div className='pic'>
											{item.thumImg !== '' ? (
												<img
													src={`${path}/img/project/${item.thumImg}`}
													alt={`${item.client} 메인이미지`}
												/>
											) : (
												<img
													src={`${path}/img/project/no.png`}
													alt={`보안규정상 이미지를 제공할 수 없습니다.`}
												/>
											)}
										</div>
										<div className='client'>
											<img
												src={`${path}/img/project/${item.clientImg}`}
												alt={`${item.client} 로고`}
											/>
										</div>
									</div>
									<div className='cont'>
										<div className='title'>{item.title}</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
			<Modal ref={modal}>
				{projectData.length !== 0 && (
					<>
						<Swiper
							autoHeight={true}
							slidesPerView={1}
							grabCursor={true}
							pagination={{
								type: 'fraction',
							}}
							navigation={true}
							modules={[Pagination, Navigation]}>
							{projectData[index].bigImg.map((img, idx) => {
								return (
									<SwiperSlide className='site_img' key={idx}>
										<img
											src={`${path}/img/project/${img}`}
											alt={`${projectData[index].title} 대표 이미지 ${idx}`}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>

						<div className='site_info'>
							<h2>{projectData[index].title}</h2>
							<div className='group'>
								<div className='title'>CLient .</div>
								<div className='desc'>
									<img
										src={`${path}/img/project/${projectData[index].clientImg}`}
										alt={`${projectData[index].client} 로고`}
									/>
									<p>({projectData[index].client})</p>
								</div>
							</div>
							<div className='group'>
								<div className='title'>URL .</div>
								<div className='desc'>
									{projectData[index].url !== '' ? (
										<a href={projectData[index].url} target='_blank'>
											사이트 바로가기
										</a>
									) : (
										'보안상의 이슈로 URL이 제공되지 않습니다.'
									)}
								</div>
							</div>
							<div className='group'>
								<div className='title'>Working day .</div>
								<div className='desc'>{projectData[index].working}</div>
							</div>
							<div className='group'>
								<div className='title'>Description .</div>
								<div className='desc'>{projectData[index].desc}</div>
							</div>
							<div className='group'>
								<div className='title'>Skill .</div>
								<div className='desc skills'>
									{projectData[index].skill.map((skill, idx) => {
										return (
											<img
												src={`${path}/img/icon/icon_${skill}.png`}
												alt=''
												key={idx}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</>
				)}
			</Modal>
		</>
	);
}

export default PortEtc;
