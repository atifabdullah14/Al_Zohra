import Link from "next/link";

const ServiceOne = () => {
  return (
    <section className='ff-servicce-three pt-120'>
      <div className='container'>
        <div className='row gutter-30 align-items-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header mb-0'>
              <span className='sub-title'>We are always open for children</span>
              <h2 className='title-animation_inner mt-0 fw-7 hb text-white'>
                Our non-profit services you must love
              </h2>
            </div>
          </div>
          <div className='col-12 col-md-4 col-xl-5'>
            <div className='text-start text-xl-end'>
              <Link
                href='/our-causes'
                aria-label='check causes'
                title='check causes'
                className='btn--primary'
              >
                Check Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='ff-service-three-inner mt-60'>
              <div className='ff-service-three-single'>
                <div className='thumb'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={44}
                    height={44}
                    viewBox='0 0 44 44'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_65_224)'>
                      <path d='M43.4296 31.9121C41.6885 27.2445 34.8448 19.1154 31.5331 15.3949H31.6897C32.4015 15.3949 32.9786 14.8178 32.9786 14.1061C32.9786 13.3942 32.4015 12.8173 31.6897 12.8173H31.4756C33.5051 10.5392 36.5506 7.1093 37.4058 6.08355C39.1731 3.96347 38.5689 2.06674 37.5146 1.08671C35.9593 -0.359013 32.9526 -0.492646 30.1703 1.48349C28.1244 -0.472708 24.0801 -0.468755 22.0383 1.48349C19.2561 -0.492474 16.2494 -0.359013 14.694 1.08671C13.6397 2.06674 13.0357 3.96347 14.803 6.08355C15.6582 7.10938 18.7035 10.5392 20.733 12.8173H20.519C19.8072 12.8173 19.2301 13.3943 19.2301 14.1061C19.2301 14.8179 19.8072 15.3949 20.519 15.3949H20.6756C18.905 17.3841 17.252 19.3277 15.4157 21.6521C15.2608 21.1141 14.7659 20.7201 14.178 20.7201H1.28889C0.57707 20.7202 0 21.2971 0 22.009V42.7111C0 43.4229 0.57707 43.9999 1.28889 43.9999H34.9449C41.1174 43.9999 45.6436 37.8474 43.4296 31.9121ZM16.4492 2.97459C17.0657 2.40147 19.2228 2.19367 21.4155 4.31023C22.1108 4.98123 23.2728 4.67521 23.5467 3.74811C23.6894 3.26488 24.6577 2.59552 26.1044 2.59552C27.551 2.59552 28.5192 3.26488 28.662 3.74811C28.9357 4.67469 30.0976 4.98174 30.7932 4.31023C32.9859 2.19359 35.1429 2.40138 35.7595 2.97459C36.1918 3.37643 35.7358 4.06084 35.4256 4.43303C34.3373 5.7386 29.3911 11.2833 28.0213 12.8173H24.1874C22.8175 11.2833 17.8714 5.7386 16.7832 4.43303C16.4729 4.06084 16.0169 3.37643 16.4492 2.97459ZM9.23046 36.1823H2.57787V33.6059H10.4235C9.84921 34.3534 9.43439 35.229 9.23046 36.1823ZM12.8892 31.0282H2.57787V28.4519H12.8892V31.0282ZM12.8892 23.2978V25.8742H2.57787V23.2978H12.8892ZM2.57787 38.7599H9.20468C9.39434 39.7446 9.8071 40.6505 10.3897 41.4222H2.57787V38.7599ZM11.6646 37.5356C11.6646 35.3924 13.4083 33.6489 15.5541 33.6489C17.6974 33.6489 19.441 35.3924 19.441 37.5356C19.441 39.6787 17.6974 41.4222 15.5541 41.4222C13.4013 41.4222 11.6646 39.6726 11.6646 37.5356ZM34.9449 41.4222H20.7161C21.5334 40.3397 22.0189 38.9934 22.0189 37.5356C22.0189 33.9648 19.0984 31.0276 15.4669 31.0733V25.8248C18.9191 21.1539 22.4181 17.3144 24.1267 15.3949H28.0821L30.2973 17.8835C30.3859 17.9831 39.1804 27.8965 41.0144 32.813C42.567 36.9754 39.428 41.4222 34.9449 41.4222Z' />
                      <path d='M25.46 24.5864H28.6823C29.3942 24.5864 29.9712 24.0093 29.9712 23.2976C29.9712 22.5859 29.3942 22.0088 28.6823 22.0088H27.3934C27.3933 21.2971 26.8163 20.7203 26.1046 20.7203C25.3927 20.7203 24.8157 21.2974 24.8157 22.0091V22.0736C23.3466 22.3729 22.2378 23.6745 22.2378 25.2303C22.2378 27.0068 23.6833 28.452 25.4601 28.452H26.749C27.1043 28.452 27.3934 28.7409 27.3934 29.0959C27.3934 29.4509 27.1043 29.7398 26.749 29.7398H23.5267C22.8149 29.7398 22.2378 30.3169 22.2378 31.0286C22.2378 31.7404 22.8149 32.3174 23.5267 32.3174H24.8156C24.8157 33.0291 25.3927 33.6059 26.1045 33.6059C26.8163 33.6059 27.3934 33.0288 27.3934 32.3171V32.2526C28.8624 31.9533 29.9712 30.6517 29.9712 29.0959C29.9712 27.3195 28.5258 25.8744 26.7489 25.8744H25.46C25.1047 25.8744 24.8156 25.5854 24.8156 25.2303C24.8156 24.8752 25.1047 24.5864 25.46 24.5864Z' />
                    </g>
                    <defs>
                      <clipPath id='clip0_65_224'>
                        <rect width={44} height={44} fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <Link href='/our-causes' className='arr'>
                    <i className='fa-solid fa-arrow-right-long' />
                  </Link>
                </div>
                <div className='content'>
                  <Link href='/our-causes' aria-label='view details'>
                    Corporate Gifts donate
                  </Link>
                </div>
              </div>
              <div className='ff-service-three-single'>
                <div className='thumb'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={48}
                    height={48}
                    viewBox='0 0 48 48'
                    fill='none'
                  >
                    <path d='M28.5 22.5V19.5C28.5 19.1022 28.342 18.7206 28.0607 18.4393C27.7794 18.158 27.3978 18 27 18H21C20.6022 18 20.2206 18.158 19.9393 18.4393C19.658 18.7206 19.5 19.1022 19.5 19.5V22.5H16.5C16.1022 22.5 15.7206 22.658 15.4393 22.9393C15.158 23.2206 15 23.6022 15 24V30C15 30.3978 15.158 30.7794 15.4393 31.0607C15.7206 31.342 16.1022 31.5 16.5 31.5H19.5V34.5C19.5 34.8978 19.658 35.2794 19.9393 35.5607C20.2206 35.842 20.6022 36 21 36H27C27.3978 36 27.7794 35.842 28.0607 35.5607C28.342 35.2794 28.5 34.8978 28.5 34.5V31.5H31.5C31.8978 31.5 32.2794 31.342 32.5607 31.0607C32.842 30.7794 33 30.3978 33 30V24C33 23.6022 32.842 23.2206 32.5607 22.9393C32.2794 22.658 31.8978 22.5 31.5 22.5H28.5ZM30 28.5H27C26.6022 28.5 26.2206 28.658 25.9393 28.9393C25.658 29.2206 25.5 29.6022 25.5 30V33H22.5V30C22.5 29.6022 22.342 29.2206 22.0607 28.9393C21.7794 28.658 21.3978 28.5 21 28.5H18V25.5H21C21.3978 25.5 21.7794 25.342 22.0607 25.0607C22.342 24.7794 22.5 24.3978 22.5 24V21H25.5V24C25.5 24.3978 25.658 24.7794 25.9393 25.0607C26.2206 25.342 26.6022 25.5 27 25.5H30V28.5Z' />
                    <path d='M43.5 12H33V7.5C33 7.10218 32.842 6.72064 32.5607 6.43934C32.2794 6.15804 31.8978 6 31.5 6H16.5C16.1022 6 15.7206 6.15804 15.4393 6.43934C15.158 6.72064 15 7.10218 15 7.5V12H4.5C4.10218 12 3.72064 12.158 3.43934 12.4393C3.15804 12.7206 3 13.1022 3 13.5V40.5C3 40.8978 3.15804 41.2794 3.43934 41.5607C3.72064 41.842 4.10218 42 4.5 42H43.5C43.8978 42 44.2794 41.842 44.5607 41.5607C44.842 41.2794 45 40.8978 45 40.5V13.5C45 13.1022 44.842 12.7206 44.5607 12.4393C44.2794 12.158 43.8978 12 43.5 12ZM18 9H30V12H18V9ZM42 39H6V15H42V39Z' />
                  </svg>
                  <Link href='/our-causes' className='arr'>
                    <i className='fa-solid fa-arrow-right-long' />
                  </Link>
                </div>
                <div className='content'>
                  <Link href='/our-causes' aria-label='view details'>
                    Corporate Gifts donate
                  </Link>
                </div>
              </div>
              <div className='ff-service-three-single ff-service-three-single-alt'>
                <div className='content mt-0'>
                  <Link href='/our-causes' aria-label='view details'>
                    Corporate Gifts donate
                  </Link>
                  <p className='text-gr mt-10'>
                    Find information for people with dis
                  </p>
                  <div className='mt-20'>
                    <Link href='/our-causes' className='arr'>
                      Read More
                      <i className='fa-solid fa-arrow-right-long' />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='ff-service-three-single'>
                <div className='thumb'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={43}
                    height={43}
                    viewBox='0 0 43 43'
                    fill='none'
                  >
                    <path d='M32.0188 4.97281C28.2635 4.20975 24.4014 5.31054 21.6852 7.90446C21.5724 8.01184 21.4272 8.01244 21.3156 7.90506C18.5987 5.30934 14.736 4.21095 10.9813 4.97281C5.8205 6.01721 2.0664 10.4636 1.85164 15.7858C1.7341 18.6879 2.93069 21.8766 5.36879 24.3042C5.36939 24.3054 5.37059 24.3054 5.37179 24.3066C5.37419 24.309 5.37719 24.3114 5.37959 24.315C5.58535 24.519 7.34242 26.2634 18.0438 36.8515C19.9474 38.7359 23.0498 38.7364 24.9575 36.8503C27.2857 34.5479 35.1541 26.7671 37.6284 24.3066C39.8849 22.0621 41.2763 18.9255 41.1485 15.7858C40.9338 10.4636 37.1791 6.01721 32.0188 4.97281ZM23.2479 35.1238L23.2287 35.1046C22.276 36.0476 20.7265 36.0488 19.7715 35.1046C8.5002 23.9527 7.15526 22.6149 7.09107 22.5513C7.08987 22.5501 7.08867 22.5489 7.08807 22.5477C6.56204 22.0222 6.11205 21.4482 5.7273 20.8465H14.2105L17.6227 25.8399C17.8525 26.1759 18.2322 26.375 18.6371 26.375C18.6503 26.375 18.6635 26.375 18.6767 26.3738C19.0966 26.3606 19.4806 26.1339 19.6941 25.7727L25.1927 16.4877L27.4555 20.2514C27.6774 20.6209 28.077 20.8465 28.5083 20.8465H37.2727C36.8839 21.4544 36.4288 22.0342 35.8959 22.5645C31.7029 26.7341 23.5415 34.7644 23.2479 35.1238ZM38.6938 15.8854C38.7278 16.7226 38.6163 17.5656 38.3851 18.3893H29.203L26.2377 13.4564C26.0157 13.0869 25.6162 12.8607 25.1849 12.8607C24.7476 12.8961 24.3487 13.0899 24.1279 13.463L18.5627 22.8609L15.8734 18.9244C15.6443 18.5897 15.2645 18.3893 14.859 18.3893H4.6151C4.38392 17.5652 4.27249 16.7218 4.30639 15.8842C4.47555 11.697 7.42041 8.20021 11.4685 7.38076C14.4799 6.77187 17.4499 7.60992 19.6185 9.68253C20.6743 10.6891 22.3264 10.6873 23.3822 9.68193C25.5496 7.61112 28.5203 6.77427 31.5317 7.38076C35.5792 8.20021 38.524 11.6982 38.6938 15.8854C38.6938 15.8854 38.6938 15.8842 38.6938 15.8854Z' />
                  </svg>
                  <Link href='/our-causes' className='arr'>
                    <i className='fa-solid fa-arrow-right-long' />
                  </Link>
                </div>
                <div className='content'>
                  <Link href='/our-causes' aria-label='view details'>
                    Corporate Gifts donate
                  </Link>
                </div>
              </div>
              <div className='ff-service-three-single'>
                <div className='thumb'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={37}
                    height={37}
                    viewBox='0 0 37 37'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_65_271)'>
                      <path d='M32.4911 12.8487L28.8642 11.5286C30.1755 10.445 30.7355 8.72635 30.334 7.09315C29.5451 3.88434 25.6327 2.66623 23.1609 4.85132L20.6568 7.06496L20.1614 3.74508C19.6716 0.476578 15.8875 -1.09592 13.2255 0.851637C11.8944 1.82542 11.1864 3.50407 11.5004 5.20853L8.08091 3.96397C6.39856 3.35152 4.53129 4.22218 3.91884 5.90474L2.43812 9.97308C2.23368 10.5348 2.52332 11.156 3.08511 11.3604C3.31297 11.4432 19.7598 17.4294 20.0013 17.5173C19.3168 17.5173 4.32671 17.5173 3.66721 17.5173C3.06943 17.5173 2.58482 18.0019 2.58482 18.5997V33.7529C2.58482 35.5434 4.04148 37.0001 5.83193 37.0001H14.4909H18.8204H27.4795C29.2699 37.0001 30.7266 35.5434 30.7266 33.7529V21.421L31.5639 21.7259C32.123 21.9295 32.7458 21.643 32.9512 21.0789L34.432 17.0106C35.0442 15.328 34.1736 13.4611 32.4911 12.8487ZM13.4085 34.8353H5.83186C5.23502 34.8353 4.74946 34.3498 4.74946 33.7529V19.6821H13.4085V34.8353ZM17.738 34.8353H15.5733V19.6821H17.738V34.8353ZM24.5946 6.47325C25.8502 5.36318 27.8325 5.98589 28.2318 7.61006C28.6577 9.34176 26.9839 10.8433 25.3086 10.2345C23.8837 9.71588 23.2159 9.47285 21.789 8.95348L24.5946 6.47325ZM14.5036 2.59888C15.8564 1.60927 17.7727 2.41229 18.0206 4.06608L18.5756 7.78379C18.1761 7.63839 15.4493 6.64582 15.0563 6.50288C13.3809 5.89274 13.0645 3.6515 14.5036 2.59888ZM15.0135 13.3983L4.84254 9.6963L5.95312 6.6451C6.15727 6.08425 6.77969 5.79417 7.34047 5.99818C8.47866 6.4124 16.1432 9.20208 16.4942 9.32984L15.0135 13.3983ZM19.0819 14.8791L17.0477 14.1387L18.5285 10.0703L20.5627 10.8108L19.0819 14.8791ZM28.5617 33.7529C28.5617 34.3498 28.0762 34.8353 27.4793 34.8353H19.9028V19.6821H25.9489L28.5618 20.6331V33.7529H28.5617ZM32.3976 16.2701L31.2871 19.3214L21.1161 15.6194L22.5969 11.5511L31.7507 14.8827C32.3116 15.0869 32.6017 15.7093 32.3976 16.2701Z' />
                    </g>
                    <defs>
                      <clipPath id='clip0_65_271'>
                        <rect width={37} height={37} fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <Link href='/our-causes' className='arr'>
                    <i className='fa-solid fa-arrow-right-long' />
                  </Link>
                </div>
                <div className='content'>
                  <Link href='/our-causes' aria-label='view details'>
                    Corporate Gifts donate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cgf'>
        <img src='assets/images/cgf.png' alt='Image_inner' />
      </div>
      <div className='h-green'>
        <img src='assets/images/h-green.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default ServiceOne;
