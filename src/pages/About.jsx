import phoneOne from "../assets/svg/phoneOne.svg";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import "swiper/css/bundle";
import { FaStar } from "react-icons/fa";
function About() {
  return (
    <div>
      <div className="about">
        <div className="about-1">
          <div className="container">
            <div className="flex-column">
              <div className="column">
                <div className="column-1">
                  <div className="page-title text-4xl">About Vaccinize</div>
                  <p className="mb-12 leading-10 font-thin ">
                    The app visually mimics the printed schedules, which are
                    reviewed and published annually. Users can identify correct
                    vaccine, dosage, and timing with 2 or 3 clicks. Any changes
                    in the schedules will be released through app updates. This
                    app is one of an expanding collection of applications from
                    CDC on a variety of topics, each optimized for your mobile
                    device.
                  </p>
                  <Link to={"/"} className="btn btn-primary btn-large ">
                    Explore
                  </Link>
                </div>
              </div>
              <div className="column">
                <div className="column-2">
                  <img src={phoneOne} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-2">
          <div className="container">
            <div className="flex-column mt-12">
              <div className="column">
                <div className="column-1">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5404/a2d5/7dbe3e6ed751b30f35e0ea423e621231?Expires=1670803200&Signature=IwjhrGx26vf9qT7Bqau5Q~sTe9vHDQVrNgwc~ytIsNVn6m53WuvOtI3q50OlvH71JqJe8fQykEezVbxCFtnvQ4H~U3qutLPZcotrEPwTwpAgR4kxADUTALJhKcwkstoIeR9iYC~WOJtVkFEah4jXZTA1BCbqvxgEeANUHJP5vmFCRXYOq4swpjTuLcVeFJARMf0aJhH1xEIbqUd~8eclCMjNST~UJK-UbS3IoqkoVGMTUvgN8YZUFPC~cJNQzgvNAuPB9noeFPxg64vkG-rKib5O8mjQl7Zg9kvhui~Lit1xmDcKTmSxxmD10VMTHcwLrmB2g~VhNr4DGyOpfrW0~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="gloves"
                    className="gloves-img mb-10"
                  />

                  <p className="text-2xl page-title mb-12">
                    A few words about Vaccinize
                  </p>
                  <p className="leading-10 font-thin pr-40">
                    This app is one of an expanding collection of applications
                    from CDC on a variety of topics, each optimized for your
                    mobile device. Any changes in the schedules will be released
                    through app updates.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="column-2">
                  <p className="text-2xl page-title mb-12">
                    Explore Vaccinize in a different way
                  </p>
                  <p className="mb-12 leading-6 font-thin">
                    Optimized for tablets and useful on smartphones, the app
                    shows child, adolescent, and adult vaccines recommended by
                    the Advisory Committee on Immunization Practices.
                  </p>
                  <div className="flex justify-between">
                    <p className="px-3 text-center py-3">
                      <span className="text-2xl colored-text font-bold ">
                        3k+
                      </span>{" "}
                      <br />
                      Downloads
                    </p>
                    <p className="px-3 text-center py-3">
                      <span className="text-2xl colored-text font-bold ">
                        2.5k+
                      </span>{" "}
                      <br /> Reviews
                    </p>
                    <p className="px-3 text-center py-3">
                      <span className="text-2xl colored-text font-semibold ">
                        500+
                      </span>{" "}
                      <br /> Team
                    </p>
                    <p className="px-3 text-center py-3">
                      <span className="text-2xl colored-text font-bold ">
                        100%
                      </span>{" "}
                      <br /> Confidentiality
                    </p>
                  </div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/9a18/35f2/4ba868916cb1ab097ad681cc3a294602?Expires=1670803200&Signature=ErxDtDIdqO1wpnGNpg8sQUma1fCk99JnLLwFcJADJIDszSrza07R31c~qY0v6zRtQvUCnuKqkeCSxB1lfzZyB~6qWlcGPFOV0rQGTpEsEUgoUI952igrDFyLJ9qb8hD6X0cUNYNGpURENtWKbrmoOQBiiePaIAIcsB6-hbQbItJIKOZTzuX59QP1KZG3~h1lLsorQQ5BvdT2uZEMq7YD2AcyJmaSYSPfNOLKO8ImF-XdJ4a84pW02kbWUuFHTzGwXFRvX19OtT5keimdQnGrSDcwnOalQIk6YCofo7YlYNtjsWog~fpWMePmCE5yJbMS5nqZB4DvVEn7Ent9YkdbHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="doctor"
                    className="doctor-phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-3">
          <div className="container">
            <div className="card about3-content">
              <div className="card-content py-12 px-12">
                <p className="text-2xl page-title mb-12">Need any Help?</p>
                <p className=" font-light py-3 mb-12 pr-8">
                  We're Here To Help This is your first port of call whenever
                  you need assistance with using our products and services, even
                  the simplest medical operations.
                </p>
                <Link to={"/help-center"} className="btn btn-primary btn-large">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-4">
          <div className="container">
            <div className="flex-column">
              <div className="column">
                <div className="column-1">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/f474/9256/e269cccbdfb5bd5958e1feb5eb8014a8?Expires=1670803200&Signature=A34cJbcm7qhDDqJqny4JX5nFA~ayTDtGKWvRZm-BILHaRvJ1d7KaUt5VpKGyW7w4UfIj7FGXPjP55o4-qLSmPMOIv9AUDD0Use9h7VFvqhNXOsqrhqpZ7uVIWs3oeWsjZJ4aPUNyP12cWvELu0mVbArZkL9vKO83y5-lf4PocZFiYF5-ng5rkbPRHXg6IzFpsnJvaKXN~onWctEQlkXV6aXMFZpmreySOBMOPs24mIUwn6Of9BwT~sPNVI8PSy3YxAfoeDeRbxk2uolY~gC0hMbc1jgAS~YgU2r2WfbW9ff1cmJO0pqi38MND7j1-FNAzFDvVHz15Kvhsjm6GM3plg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt=""
                    className="groupie"
                  />
                </div>
              </div>
              <div className="column">
                <div className="column-2">
                  <div className="">
                    <p className="page-title text-2xl"> Our Happy Users</p>
                  </div>
                  <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="slider-card ">
                        <div className="sliderCard-content">
                          <div className="swiper-slide">
                            <div className="feedback mb-14">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ducimus, quam consectetur.
                              Voluptatem voluptates esse voluptas ducimus
                              aperiam odio officia.
                            </div>

                            <div className="profile">
                              <div className="profile-pic">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/4f8d/b4fa/9be6900a586d93d484bd28dd3f84f9a6?Expires=1670198400&Signature=KCoDC3jpX6YHvRFKfqEhdprbAnWD2Uc6IETAirGl1N-KYR0dmmr8nyptD6BXYhdNGYlvTJ4kgAKeQ6wCYIJbZyP1o0o-z79FZ2BkODWHw-sxqVxqYx0S2yCEbIMhSWtrIKY1tc6Rk002SthOtW-FPXbljA2w35DxlD7LqYKyYjqxaoGouvqP-R37MMNskuYJ4oW8DO-BjJMNcaW-EERc4ftxPbWAwC9pZ9uTfzdbGQLohwWzqJ2o1ARyWWJP45doFhbHJumlA3Vk-cEPvP78Qhj3r2ylA1FBuSgP7XWU6Kk7-VgRJ6U6E-rL-7POa0qfw2xNtz9hB0kq4vxrw9F2EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                  alt="profile-pic"
                                />
                              </div>
                              <div className="profile-details ml-3">
                                <p className="content-title w-full">
                                  Spencer James
                                </p>
                                <p className="font-light">Lagos, Nigeria</p>
                                <div className="rating">
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-card ">
                        <div className="sliderCard-content">
                          <div className="swiper-slide">
                            <div className="feedback mb-14">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ducimus, quam consectetur.
                              Voluptatem voluptates esse voluptas ducimus
                              aperiam odio officia.
                            </div>

                            <div className="profile">
                              <div className="profile-pic">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/4f8d/b4fa/9be6900a586d93d484bd28dd3f84f9a6?Expires=1670198400&Signature=KCoDC3jpX6YHvRFKfqEhdprbAnWD2Uc6IETAirGl1N-KYR0dmmr8nyptD6BXYhdNGYlvTJ4kgAKeQ6wCYIJbZyP1o0o-z79FZ2BkODWHw-sxqVxqYx0S2yCEbIMhSWtrIKY1tc6Rk002SthOtW-FPXbljA2w35DxlD7LqYKyYjqxaoGouvqP-R37MMNskuYJ4oW8DO-BjJMNcaW-EERc4ftxPbWAwC9pZ9uTfzdbGQLohwWzqJ2o1ARyWWJP45doFhbHJumlA3Vk-cEPvP78Qhj3r2ylA1FBuSgP7XWU6Kk7-VgRJ6U6E-rL-7POa0qfw2xNtz9hB0kq4vxrw9F2EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                  alt="profile-pic"
                                />
                              </div>
                              <div className="profile-details ml-3">
                                <p className="content-title">Jawando Quadri</p>
                                <p className="font-light">Lagos, Nigeria</p>
                                <div className="rating">
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-card ">
                        <div className="sliderCard-content">
                          <div className="swiper-slide">
                            <div className="feedback mb-14">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ducimus, quam consectetur.
                              Voluptatem voluptates esse voluptas ducimus
                              aperiam odio officia.
                            </div>

                            <div className="profile">
                              <div className="profile-pic">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/4f8d/b4fa/9be6900a586d93d484bd28dd3f84f9a6?Expires=1670198400&Signature=KCoDC3jpX6YHvRFKfqEhdprbAnWD2Uc6IETAirGl1N-KYR0dmmr8nyptD6BXYhdNGYlvTJ4kgAKeQ6wCYIJbZyP1o0o-z79FZ2BkODWHw-sxqVxqYx0S2yCEbIMhSWtrIKY1tc6Rk002SthOtW-FPXbljA2w35DxlD7LqYKyYjqxaoGouvqP-R37MMNskuYJ4oW8DO-BjJMNcaW-EERc4ftxPbWAwC9pZ9uTfzdbGQLohwWzqJ2o1ARyWWJP45doFhbHJumlA3Vk-cEPvP78Qhj3r2ylA1FBuSgP7XWU6Kk7-VgRJ6U6E-rL-7POa0qfw2xNtz9hB0kq4vxrw9F2EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                  alt="profile-pic"
                                />
                              </div>
                              <div className="profile-details ml-3">
                                <p className="content-title">Samuel Sope</p>
                                <p className="font-light">Lagos, Nigeria</p>
                                <div className="rating">
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-card ">
                        <div className="sliderCard-content">
                          <div className="swiper-slide">
                            <div className="feedback mb-14">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ducimus, quam consectetur.
                              Voluptatem voluptates esse voluptas ducimus
                              aperiam odio officia.
                            </div>

                            <div className="profile">
                              <div className="profile-pic">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/4f8d/b4fa/9be6900a586d93d484bd28dd3f84f9a6?Expires=1670198400&Signature=KCoDC3jpX6YHvRFKfqEhdprbAnWD2Uc6IETAirGl1N-KYR0dmmr8nyptD6BXYhdNGYlvTJ4kgAKeQ6wCYIJbZyP1o0o-z79FZ2BkODWHw-sxqVxqYx0S2yCEbIMhSWtrIKY1tc6Rk002SthOtW-FPXbljA2w35DxlD7LqYKyYjqxaoGouvqP-R37MMNskuYJ4oW8DO-BjJMNcaW-EERc4ftxPbWAwC9pZ9uTfzdbGQLohwWzqJ2o1ARyWWJP45doFhbHJumlA3Vk-cEPvP78Qhj3r2ylA1FBuSgP7XWU6Kk7-VgRJ6U6E-rL-7POa0qfw2xNtz9hB0kq4vxrw9F2EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                  alt="profile-pic"
                                />
                              </div>
                              <div className="profile-details ml-3">
                                <p className="content-title">
                                  Olorunnisola Yeside
                                </p>
                                <p className="font-light">Lagos, Nigeria</p>
                                <div className="rating">
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id="radio1"
                                    className="hidden"
                                  />
                                  <label htmlFor="radio1">
                                    <FaStar className="inline text-2xl star" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-5">
          <div className="container">
            <div className="subscribe">
              <p className="page-title text-2xl text-center mb-12">
                Subscribe to our Newsletter
              </p>

              <p className="font-light mb-8">
                Sign up to our newsletter, the Alphagram, so you can be the
                first to find out the latest news and tips about applications,
                as well as general Chevening updates throughout the year.
              </p>

              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
