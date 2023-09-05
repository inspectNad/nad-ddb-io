import React, { useState } from 'react'
import {FaBars, FaGithub, FaTimes, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail,} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#03001C] text-gray-300'>
      {/* Hero */}
      <Link to="home" smooth={true} duration={500} >
        <div className='z-10'>
          <svg style={{width: '50px'}} width="116" height="102" viewBox="0 0 116 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_1_106)">
              <path d="M48.6675 9.375C48.8342 9.70833 48.9175 10.875 48.9175 12.875C49.0008 14.875 49.0008 17.2917 48.9175 20.125C48.9175 22.9583 48.8342 26 48.6675 29.25C48.5008 32.4167 48.2925 35.4167 48.0425 38.25C47.5425 44.5833 46.9592 50.8333 46.2925 57C45.6258 63.1667 44.9592 68.7083 44.2925 73.625C43.7092 78.5417 43.1258 82.5833 42.5425 85.75C42.0425 88.8333 41.7508 90.5417 41.6675 90.875C41.5008 91.2917 41.1258 91.9167 40.5425 92.75C39.9592 93.5833 39.3342 94.4167 38.6675 95.25C38.0008 96 37.3342 96.6667 36.6675 97.25C36.0842 97.8333 35.6258 98.125 35.2925 98.125C34.6258 97.5417 33.4175 95.25 31.6675 91.25C30.9175 89.5 30.0008 87.3333 28.9175 84.75C27.8342 82.0833 26.5842 78.8333 25.1675 75C23.7508 71.1667 22.0842 66.6667 20.1675 61.5C18.3342 56.25 16.2508 50.1667 13.9175 43.25C14.4175 50.0833 14.8342 56.0833 15.1675 61.25C15.5008 66.4167 15.7508 70.9167 15.9175 74.75C16.1675 78.5833 16.3342 81.8333 16.4175 84.5C16.5008 87.0833 16.5425 89.25 16.5425 91C16.5425 95 16.4175 97.2917 16.1675 97.875C15.3342 97.875 14.4175 97.5 13.4175 96.75C12.5008 95.9167 11.6258 94.9583 10.7925 93.875C9.95917 92.7083 9.20917 91.5833 8.5425 90.5C7.95917 89.4167 7.62583 88.625 7.5425 88.125C7.45917 87.7917 7.20917 86.25 6.7925 83.5C6.37583 80.75 5.87583 77.25 5.2925 73C4.7925 68.6667 4.20917 63.8333 3.5425 58.5C2.95917 53.0833 2.37583 47.5833 1.7925 42C1.2925 36.4167 0.875833 31 0.5425 25.75C0.209166 20.4167 0.0424995 15.6667 0.0424995 11.5C0.0424995 10.8333 0.875833 9.95833 2.5425 8.875C4.20917 7.70833 6.08417 6.625 8.1675 5.625C10.3342 4.54167 12.3342 3.625 14.1675 2.875C16.0008 2.04167 17.1258 1.625 17.5425 1.625C17.8758 1.625 18.2092 2.58333 18.5425 4.5C18.9592 6.41667 19.3758 8.83333 19.7925 11.75C20.2925 14.6667 20.8342 17.9167 21.4175 21.5C22.0842 25.0833 22.7925 28.5 23.5425 31.75C24.2092 35.25 25.0425 39.2083 26.0425 43.625C26.8758 47.375 27.9175 51.875 29.1675 57.125C30.5008 62.375 32.0425 68.2083 33.7925 74.625C33.7925 70.125 33.7925 65.3333 33.7925 60.25C33.8758 55.1667 33.9592 50.125 34.0425 45.125C34.1258 40.125 34.2092 35.3333 34.2925 30.75C34.4592 26.0833 34.5842 21.9583 34.6675 18.375C34.8342 14.7917 34.9592 11.9167 35.0425 9.75C35.2092 7.58333 35.3342 6.41667 35.4175 6.25C35.6675 5.91667 36.4592 5.83333 37.7925 6C39.1258 6.08333 40.5842 6.33333 42.1675 6.75C43.7508 7.08333 45.1675 7.54167 46.4175 8.125C47.7508 8.625 48.5008 9.04167 48.6675 9.375ZM87.7075 4.125C89.3742 4.45833 91.6658 5.45833 94.5825 7.125C97.4992 8.70833 100.416 10.5417 103.333 12.625C106.333 14.625 108.958 16.625 111.208 18.625C113.458 20.5417 114.791 21.9167 115.208 22.75C115.541 23.5833 115.666 25.125 115.583 27.375C115.499 29.625 115.249 32.375 114.833 35.625C114.416 38.7917 113.874 42.2917 113.208 46.125C112.541 49.9583 111.791 53.8333 110.958 57.75C110.124 61.5833 109.208 65.3333 108.208 69C107.291 72.5833 106.333 75.75 105.333 78.5C104.916 79.8333 103.999 81.2917 102.583 82.875C101.166 84.4583 99.4992 86.0417 97.5825 87.625C95.6658 89.125 93.6242 90.5417 91.4575 91.875C89.3742 93.2083 87.3742 94.3333 85.4575 95.25C83.6242 96.1667 81.9575 96.7917 80.4575 97.125C79.0408 97.4583 78.0825 97.375 77.5825 96.875C77.0825 96.375 76.5408 94.7917 75.9575 92.125C75.4575 89.375 74.9575 85.9583 74.4575 81.875C73.9575 77.7083 73.4992 73.0833 73.0825 68C72.6658 62.8333 72.2908 57.5833 71.9575 52.25C71.6242 46.9167 71.3325 41.7083 71.0825 36.625C70.9158 31.4583 70.7908 26.8333 70.7075 22.75C70.7075 18.5833 70.7908 15.125 70.9575 12.375C71.1242 9.54167 71.4158 7.83333 71.8325 7.25C72.1658 6.83333 72.9992 6.41667 74.3325 6C75.7492 5.58333 77.2908 5.20833 78.9575 4.875C80.7075 4.54167 82.4158 4.29167 84.0825 4.125C85.7492 3.95833 86.9575 3.95833 87.7075 4.125ZM86.9575 20C86.3742 20.4167 85.9575 21.7083 85.7075 23.875C85.4575 25.9583 85.2492 28.5 85.0825 31.5C84.9992 34.4167 84.9575 37.5417 84.9575 40.875C84.9575 44.2083 84.9158 47.25 84.8325 50C84.6658 57.1667 84.5825 62.8333 84.5825 67C84.6658 71.0833 84.7492 74.1667 84.8325 76.25C84.9992 78.25 85.2075 79.5417 85.4575 80.125C85.7075 80.625 86.0408 80.875 86.4575 80.875C86.7908 80.875 87.3325 80.625 88.0825 80.125C88.9158 79.625 89.7908 79 90.7075 78.25C91.6242 77.5 92.4992 76.7083 93.3325 75.875C94.1658 74.9583 94.7492 74.1667 95.0825 73.5C95.4158 72.8333 95.8325 71.5417 96.3325 69.625C96.8325 67.625 97.3325 65.3333 97.8325 62.75C98.3325 60.0833 98.8325 57.2917 99.3325 54.375C99.8325 51.375 100.249 48.5417 100.583 45.875C100.999 43.125 101.291 40.7083 101.458 38.625C101.708 36.4583 101.833 34.9167 101.833 34C101.749 32.25 101.041 30.4583 99.7075 28.625C98.3742 26.7917 96.8325 25.1667 95.0825 23.75C93.4158 22.3333 91.7492 21.25 90.0825 20.5C88.4992 19.75 87.4575 19.5833 86.9575 20Z" fill="#FFBF00"/>
              <path d="M87.3125 63.625C87.4792 63.875 87.4375 64.7083 87.1875 66.125C87.0208 67.5417 86.7292 69.0833 86.3125 70.75C85.9792 72.4167 85.6042 74 85.1875 75.5C84.8542 76.9167 84.5625 77.75 84.3125 78H83.0625C82.8125 78 82.5625 77.9583 82.3125 77.875C82.7292 81.875 83.0625 85.0833 83.3125 87.5C83.5625 89.9167 83.6875 91.25 83.6875 91.5C83.6875 92.0833 83.3958 92.9167 82.8125 94C82.3125 95.0833 81.7292 96.0833 81.0625 97C80.3958 97.9167 79.6875 98.625 78.9375 99.125C78.2708 99.7083 77.8125 99.75 77.5625 99.25C77.1458 98.5 76.2708 96.25 74.9375 92.5C73.6042 88.75 72.1042 83.625 70.4375 77.125C68.7708 76.9583 67.0208 76.7917 65.1875 76.625C63.4375 76.4583 61.6458 76.2917 59.8125 76.125C57.9792 75.9583 56.1458 75.75 54.3125 75.5C52.5625 75.1667 50.8542 74.875 49.1875 74.625C48.3542 78.2917 47.5208 81.75 46.6875 85C45.9375 88.25 45.1875 91.0833 44.4375 93.5C43.7708 95.9167 43.1875 97.8333 42.6875 99.25C42.1875 100.667 41.8125 101.375 41.5625 101.375C40.8958 101.375 40.2292 100.958 39.5625 100.125C38.8958 99.2917 38.2708 98.2917 37.6875 97.125C37.1875 95.9583 36.7708 94.75 36.4375 93.5C36.1042 92.25 35.9375 91.2083 35.9375 90.375C36.1042 88.4583 36.3125 86.4583 36.5625 84.375C36.8958 82.2917 37.1458 80.375 37.3125 78.625C37.5625 76.5417 37.8125 74.5 38.0625 72.5H37.5625C37.2292 72.3333 36.7708 71.9583 36.1875 71.375C35.6042 70.7917 35.0208 70.2083 34.4375 69.625C33.8542 68.9583 33.3542 68.3333 32.9375 67.75C32.5208 67.0833 32.3125 66.5833 32.3125 66.25C32.3125 66.0833 32.8958 65.9167 34.0625 65.75C35.3125 65.5833 36.9375 65.4167 38.9375 65.25C39.6042 60.25 40.3125 55.0417 41.0625 49.625C41.8125 44.2083 42.5625 39.125 43.3125 34.375C44.0625 29.625 44.7708 25.5 45.4375 22C46.1875 18.4167 46.8125 15.9583 47.3125 14.625C48.1458 12.375 49.6042 10.375 51.6875 8.625C53.7708 6.79167 55.9375 5.29167 58.1875 4.125C60.5208 2.875 62.7292 1.91667 64.8125 1.25C66.8958 0.583333 68.4375 0.25 69.4375 0.25C69.8542 0.25 70.3125 1.20833 70.8125 3.125C71.3958 4.95833 71.9792 7.45833 72.5625 10.625C73.2292 13.7917 73.8958 17.5 74.5625 21.75C75.3125 25.9167 76.0208 30.3333 76.6875 35C77.3542 39.6667 77.9792 44.4583 78.5625 49.375C79.2292 54.2083 79.8542 58.8333 80.4375 63.25C84.6042 63.25 86.8958 63.375 87.3125 63.625ZM51.5625 64.375C54.2292 64.2083 56.8958 64.0833 59.5625 64C62.2292 63.9167 64.8542 63.7917 67.4375 63.625C66.7708 60.375 66.0208 56.75 65.1875 52.75C64.5208 49.3333 63.7292 45.3333 62.8125 40.75C61.8958 36.1667 60.9792 31.125 60.0625 25.625C59.0625 30.5417 58.0625 35.3333 57.0625 40C56.0625 44.5833 55.1458 48.7083 54.3125 52.375C53.3958 56.625 52.4792 60.625 51.5625 64.375Z" fill="#337CCF"/>
            </g>
            <defs>
              <filter id="filter0_b_1_106" x="-3.95749" y="-3.75" width="123.665" height="109.125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_106"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_106" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
      </Link>
      {/* Main Menu*/}
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500} className='hover:border-b-4 hover:border-[#FFBF00]'>
          HOME
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className='hover:border-b-4 hover:border-[#FFBF00]'>
          PROJECTS
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className='hover:border-b-4 hover:border-[#FFBF00]'>
          SKILLS
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className='hover:border-b-4 hover:border-[#FFBF00]'>
          ABOUT
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className='hover:border-b-4 hover:border-[#FFBF00]'>
          CONTACT
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {!nav ? 
          <FaBars/> : <FaTimes/>
        }
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#03001C] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to="home" smooth={true} duration={500} >
          HOME
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="projects" smooth={true} duration={500} >
          PROJECTS
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="skills" smooth={true} duration={500} >
          SKILLS
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="about" smooth={true} duration={500} >
          ABOUT
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="about" smooth={true} duration={500} >
          CONTACT
          </Link>
        </li>
      </ul>

      {/* Socials */}
      <div className='hidden lg:flex fixed flex-col md:top-[30%] left-0'>
        <ul>
          <li  className='rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 hover:bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://www.facebook.com/dBaldonadoOfficial/" target='_blank' rel="noopener noreferrer">
              Facebook <FaFacebook size={'30'}/>
            </a>
          </li>

          <li  className='rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-300 hover:bg-black'>
            <a className='flex justify-between items-center w-full text-blue-600 hover:text-gray-300'
              href="https://linkedin.com/in/dante-baldonado-abab8b1a1/" target='_blank' rel="noopener noreferrer">
              LinkedIn <FaLinkedin size={'30'}/>
            </a>
          </li>

          <li  className='rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://github.com/inspectNad" target='_blank' rel="noopener noreferrer">
              Github <FaGithub size={'30'}/>
            </a>
          </li>

          <li  className='rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EB1D36] hover:bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="mailto:baldonadodante5@gmail.com" target='_blank' rel="noopener noreferrer">
              Email <HiOutlineMail size={'30'}/>
            </a>
          </li>

          <li  className='rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] hover:bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://doc-10-1o-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/boev9s3utsgmjn1acs8eq9veour72jk4/qdasiov7j8tpe4f3rapv4sjompmurchj/1693750950000/3/101584404545015279112/APznzaZtndD2tY1tv0dcGJ4kagr_hd7cNo_-nGci3YaDeqHI95DC-jhEJyGrvqTxxz8B7mZWD3nFN0QSlr1rhaDGgbH7EZ3A7gWD8hHAc8qHAkgBXcD7C67ilo-14nAqodpA7QQ2CxV1ObfEPqPEd-KnmP0W9vRwgpNLnaahsgDyotohabH2fFP1f63fDAho3W9y559Ix8Wwcu1ZYDzQ8hdE2jkjIF7D-83vDGXpIa5UCUaJaZB-pWkRxCbhUL5sYhvQJH6UYQxytM_DBx7abaGdmJgHb1yglK-sgFbXB7xtVsuzWLmneiIxBM7hslD0kt77nms4jzEekA6n7-YPRy4-MTnJ_XRIo_m_O0nI7vIxgTdh23TEsy1PT3Riw9BmGQ6PXmkXgSKp?authuser=0&nonce=6al0mmkb8ep46&user=101584404545015279112&hash=9b0uacm7br1v8md58141e0d5ctfdrq4i" target='_blank' rel="noopener noreferrer">
              Resume <BsFillPersonLinesFill size={'30'}/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
