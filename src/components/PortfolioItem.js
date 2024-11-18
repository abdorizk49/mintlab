import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/bundle';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SuggestedItems from './SuggestedItems';

function PortfolioItem() {

  return (
    <>
      <section className='portfolioItem bg-gray'>
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <Swiper
                  loop
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  modules={[EffectCoverflow, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image src="https://i.imgur.com/TOLoMCM.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="https://i.imgur.com/TOLoMCM.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="https://i.imgur.com/TOLoMCM.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src="https://i.imgur.com/TOLoMCM.png" />
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={6} xs={12}>
                <div className='project-info'>
                  <div className='head-info'>
                    <h2>Social Media</h2>
                  </div>
                  <div className='body-info'>
                    <Table>
                      <tbody>
                        <tr>
                          <th>Date:</th>
                          <td>2022-05</td>
                        </tr>
                        <tr>
                          <th>Client:</th>
                          <td>Company1</td>
                        </tr>
                        <tr>
                          <th>Category:</th>
                          <td>social</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className='foot-info'>
                    <Link href="https://www.elezaby-group.com/profile" className='btn btn-info' target='_blank'><span>view project</span></Link>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className='project-info'>
                  <div className='head-info'>
                    <h3>Company1</h3>
                  </div>
                  <div className='body-info'>
                    <div className='body-content'>
                      <p>
                        In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme). that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
      <SuggestedItems />
    </>
  );
}

export default PortfolioItem;
