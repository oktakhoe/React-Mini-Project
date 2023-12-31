import React from "react";
import "./style.css";
import image from "./images/footer-link-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      {/* FOOTER TOP */}
      <div className="footer-top">
        {/* Summary */}
        <div className="summary">
          {/* logo */}
          <div className="logo-footer">
            <svg
              width="133"
              height="25"
              viewBox="0 0 133 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Logo" clipPath="url(#clip0_203_25)">
                <path
                  id="Vector"
                  d="M9.27091 20.6609C6.72031 23.184 2.40056 23.174 1.19417 19.8113C0.95798 19.1529 0.769135 18.476 0.630239 17.7852C0.0631322 14.9649 0.354192 12.0416 1.46662 9.38493C2.57904 6.72833 4.46285 4.45765 6.87985 2.86009C9.29688 1.26253 12.1385 0.409836 15.0454 0.409836C17.9523 0.409836 20.7939 1.26253 23.2109 2.86009C25.6279 4.45765 27.5117 6.72833 28.6241 9.38502C29.7366 12.0416 30.0276 14.9649 29.4605 17.7852C29.3216 18.476 29.1328 19.1529 28.8965 19.8113C27.6901 23.174 23.3704 23.184 20.8198 20.6609L16.8826 16.7662C16.5064 16.3941 16.5453 15.7804 16.649 15.2643C16.7121 14.9506 16.6797 14.6254 16.5559 14.3298C16.4322 14.0343 16.2227 13.7817 15.9538 13.604C15.6849 13.4263 15.3688 13.3314 15.0454 13.3314C14.722 13.3314 14.4059 13.4263 14.137 13.604C13.8681 13.7817 13.6585 14.0343 13.5348 14.3298C13.411 14.6254 13.3786 14.9506 13.4418 15.2643C13.5455 15.7804 13.5843 16.3941 13.2081 16.7662L9.27091 20.6609Z"
                  fill="url(#paint0_linear_203_25)"
                />
                <path
                  id="Vector_2"
                  d="M41.7005 17.1703H45.6511V19.4733H38.6845V7.22568H41.7005V17.1703Z"
                  fill="#3A3B7B"
                />
                <path
                  id="Vector_3"
                  d="M51.0404 19.6129C50.0762 19.6129 49.2061 19.4093 48.43 19.0023C47.6659 18.5952 47.0603 18.0136 46.6135 17.2576C46.1785 16.5015 45.9609 15.6176 45.9609 14.6056C45.9609 13.6054 46.1843 12.7272 46.6311 11.9712C47.0779 11.2035 47.6893 10.6162 48.4653 10.2091C49.2414 9.80198 50.1115 9.59844 51.0757 9.59844C52.0398 9.59844 52.9099 9.80198 53.6859 10.2091C54.462 10.6162 55.0734 11.2035 55.5202 11.9712C55.967 12.7272 56.1904 13.6054 56.1904 14.6056C56.1904 15.6059 55.9611 16.4899 55.5026 17.2576C55.0558 18.0136 54.4385 18.5952 53.6506 19.0023C52.8746 19.4093 52.0045 19.6129 51.0404 19.6129ZM51.0404 17.0307C51.6165 17.0307 52.1045 16.8214 52.5043 16.4027C52.9158 15.9839 53.1216 15.385 53.1216 14.6056C53.1216 13.8263 52.9216 13.2274 52.5219 12.8086C52.1338 12.3899 51.6518 12.1805 51.0757 12.1805C50.4878 12.1805 49.9998 12.3899 49.6117 12.8086C49.2237 13.2157 49.0297 13.8147 49.0297 14.6056C49.0297 15.385 49.2179 15.9839 49.5942 16.4027C49.9822 16.8214 50.4643 17.0307 51.0404 17.0307Z"
                  fill="#3A3B7B"
                />
                <path
                  id="Vector_4"
                  d="M61.0003 9.59844C61.694 9.59844 62.2996 9.73802 62.817 10.0172C63.346 10.2963 63.7517 10.6627 64.0339 11.1163V9.73802H67.0498V19.4558C67.0498 20.3514 66.8676 21.1598 66.5031 21.8809C66.1503 22.6137 65.6036 23.1953 64.8629 23.6256C64.1339 24.056 63.2226 24.2712 62.1291 24.2712C60.6711 24.2712 59.4894 23.9281 58.584 23.2418C57.6787 22.5671 57.1613 21.6483 57.032 20.4852H60.0127C60.1067 20.8574 60.3301 21.1482 60.6829 21.3576C61.0356 21.5785 61.4707 21.689 61.988 21.689C62.6112 21.689 63.105 21.5087 63.4695 21.1482C63.8458 20.7992 64.0339 20.2352 64.0339 19.4558V18.0776C63.7399 18.5311 63.3343 18.9034 62.817 19.1941C62.2996 19.4733 61.694 19.6129 61.0003 19.6129C60.189 19.6129 59.4541 19.4093 58.7957 19.0023C58.1372 18.5835 57.614 17.9961 57.226 17.2401C56.8498 16.4725 56.6616 15.5885 56.6616 14.5882C56.6616 13.5879 56.8498 12.7098 57.226 11.9537C57.614 11.1977 58.1372 10.6162 58.7957 10.2091C59.4541 9.80198 60.189 9.59844 61.0003 9.59844ZM64.0339 14.6056C64.0339 13.8612 63.8223 13.2739 63.399 12.8435C62.9874 12.4132 62.4818 12.198 61.8822 12.198C61.2825 12.198 60.771 12.4132 60.3477 12.8435C59.9362 13.2623 59.7304 13.8438 59.7304 14.5882C59.7304 15.3326 59.9362 15.9258 60.3477 16.3678C60.771 16.7981 61.2825 17.0133 61.8822 17.0133C62.4818 17.0133 62.9874 16.7981 63.399 16.3678C63.8223 15.9374 64.0339 15.3501 64.0339 14.6056Z"
                  fill="#3A3B7B"
                />
                <path
                  id="Vector_5"
                  d="M73.1824 19.6129C72.2183 19.6129 71.3482 19.4093 70.5722 19.0023C69.8079 18.5952 69.2023 18.0136 68.7555 17.2576C68.3205 16.5015 68.103 15.6176 68.103 14.6056C68.103 13.6054 68.3263 12.7272 68.7732 11.9712C69.22 11.2035 69.8314 10.6162 70.6074 10.2091C71.3835 9.80198 72.2536 9.59844 73.2177 9.59844C74.1819 9.59844 75.052 9.80198 75.828 10.2091C76.604 10.6162 77.2154 11.2035 77.6622 11.9712C78.109 12.7272 78.3325 13.6054 78.3325 14.6056C78.3325 15.6059 78.1032 16.4899 77.6446 17.2576C77.1978 18.0136 76.5805 18.5952 75.7927 19.0023C75.0167 19.4093 74.1466 19.6129 73.1824 19.6129ZM73.1824 17.0307C73.7586 17.0307 74.2465 16.8214 74.6463 16.4027C75.0579 15.9839 75.2636 15.385 75.2636 14.6056C75.2636 13.8263 75.0637 13.2274 74.6639 12.8086C74.2759 12.3899 73.7938 12.1805 73.2177 12.1805C72.6298 12.1805 72.1418 12.3899 71.7538 12.8086C71.3659 13.2157 71.1718 13.8147 71.1718 14.6056C71.1718 15.385 71.36 15.9839 71.7362 16.4027C72.1242 16.8214 72.6063 17.0307 73.1824 17.0307Z"
                  fill="#3A3B7B"
                />
                <path
                  id="Vector_6"
                  d="M80.9202 8.7261C80.391 8.7261 79.956 8.57489 79.615 8.27248C79.2858 7.95844 79.1212 7.57461 79.1212 7.121C79.1212 6.65575 79.2858 6.27192 79.615 5.9695C79.956 5.65546 80.391 5.49844 80.9202 5.49844C81.4375 5.49844 81.8608 5.65546 82.19 5.9695C82.531 6.27192 82.7015 6.65575 82.7015 7.121C82.7015 7.57461 82.531 7.95844 82.19 8.27248C81.8608 8.57489 81.4375 8.7261 80.9202 8.7261ZM82.4192 9.73802V19.4733H79.4034V9.73802H82.4192Z"
                  fill="#3A3B7B"
                />
                <path
                  id="Vector_7"
                  d="M87.0915 11.1163C87.3853 10.6627 87.791 10.2963 88.3086 10.0172C88.8262 9.73802 89.4318 9.59844 90.1254 9.59844C90.9368 9.59844 91.6713 9.80198 92.3299 10.2091C92.9884 10.6162 93.506 11.1977 93.8819 11.9537C94.2696 12.7098 94.4644 13.5879 94.4644 14.5882C94.4644 15.5885 94.2696 16.4725 93.8819 17.2401C93.506 17.9961 92.9884 18.5835 92.3299 19.0023C91.6713 19.4093 90.9368 19.6129 90.1254 19.6129C89.4429 19.6129 88.8382 19.4733 88.3086 19.1941C87.791 18.915 87.3853 18.5544 87.0915 18.1125V24.1141H84.0758V9.73802H87.0915V11.1163ZM91.3955 14.5882C91.3955 13.8438 91.1836 13.2623 90.76 12.8435C90.3483 12.4132 89.8375 12.198 89.226 12.198C88.6263 12.198 88.1147 12.4132 87.6911 12.8435C87.2802 13.2739 87.0744 13.8612 87.0744 14.6056C87.0744 15.3501 87.2802 15.9374 87.6911 16.3678C88.1147 16.7981 88.6263 17.0133 89.226 17.0133C89.8256 17.0133 90.3372 16.7981 90.76 16.3678C91.1836 15.9258 91.3955 15.3326 91.3955 14.5882Z"
                  fill="#3A3B7B"
                />
                <path
                  id="Vector_8"
                  d="M99.5209 19.6129C98.6625 19.6129 97.898 19.4675 97.2275 19.1767C96.5579 18.8859 96.0283 18.4905 95.6405 17.9903C95.2528 17.4785 95.035 16.9086 94.988 16.2805H97.9689C98.0039 16.6178 98.1628 16.8911 98.4447 17.1005C98.7274 17.3099 99.0742 17.4146 99.4859 17.4146C99.8617 17.4146 100.15 17.3448 100.349 17.2052C100.561 17.054 100.667 16.8621 100.667 16.6295C100.667 16.3503 100.52 16.1468 100.226 16.0188C99.9326 15.8793 99.456 15.7281 98.7974 15.5652C98.0919 15.4024 97.5043 15.2337 97.0336 15.0593C96.5639 14.8732 96.1581 14.5882 95.8173 14.2044C95.4757 13.8089 95.3057 13.2797 95.3057 12.6168C95.3057 12.0584 95.4586 11.5525 95.7644 11.0989C96.0813 10.6336 96.5399 10.2672 97.1395 9.9997C97.7511 9.73219 98.4746 9.59844 99.3091 9.59844C100.543 9.59844 101.514 9.90084 102.219 10.5056C102.937 11.1105 103.348 11.913 103.454 12.9133H100.667C100.62 12.576 100.467 12.3085 100.208 12.1107C99.9616 11.913 99.6328 11.8142 99.2211 11.8142C98.8683 11.8142 98.5976 11.884 98.4096 12.0235C98.2217 12.1515 98.1278 12.3318 98.1278 12.5644C98.1278 12.8435 98.2747 13.0529 98.5685 13.1925C98.8743 13.3321 99.3441 13.4716 99.9796 13.6111C100.708 13.7973 101.302 13.9834 101.76 14.1695C102.219 14.3439 102.619 14.6347 102.96 15.0419C103.312 15.4373 103.495 15.9723 103.507 16.6469C103.507 17.2168 103.342 17.7286 103.013 18.1823C102.696 18.6242 102.231 18.9732 101.619 19.229C101.02 19.485 100.32 19.6129 99.5209 19.6129Z"
                  fill="#3A3B7B"
                />
                <path
                  id="Vector_9"
                  d="M114.541 9.73802V19.4733H111.525V18.1474C111.219 18.5777 110.801 18.9266 110.273 19.1941C109.755 19.4501 109.179 19.578 108.544 19.578C107.791 19.578 107.127 19.4152 106.551 19.0894C105.975 18.7522 105.528 18.2695 105.211 17.6414C104.893 17.0133 104.735 16.2748 104.735 15.4256V9.73802H107.733V15.0244C107.733 15.6757 107.903 16.1816 108.244 16.5423C108.585 16.9028 109.044 17.0831 109.62 17.0831C110.208 17.0831 110.672 16.9028 111.013 16.5423C111.354 16.1816 111.525 15.6757 111.525 15.0244V9.73802H114.541Z"
                  fill="#3A3B7B"
                />
                <path
                  id="Vector_10"
                  d="M128.736 9.63334C129.958 9.63334 130.928 9.9997 131.646 10.7325C132.374 11.4652 132.739 12.4829 132.739 13.7856V19.4733H129.741V14.187C129.741 13.5588 129.57 13.0761 129.229 12.7388C128.9 12.3899 128.442 12.2154 127.853 12.2154C127.266 12.2154 126.801 12.3899 126.46 12.7388C126.132 13.0761 125.967 13.5588 125.967 14.187V19.4733H122.968V14.187C122.968 13.5588 122.798 13.0761 122.457 12.7388C122.127 12.3899 121.669 12.2154 121.081 12.2154C120.493 12.2154 120.029 12.3899 119.688 12.7388C119.358 13.0761 119.194 13.5588 119.194 14.187V19.4733H116.178V9.73803H119.194V10.9593C119.5 10.5522 119.9 10.2323 120.393 9.9997C120.887 9.75543 121.446 9.63334 122.068 9.63334C122.81 9.63334 123.468 9.79033 124.044 10.1044C124.632 10.4184 125.09 10.8662 125.42 11.4478C125.761 10.9127 126.225 10.4766 126.813 10.1393C127.401 9.80199 128.042 9.63334 128.736 9.63334Z"
                  fill="#3A3B7B"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_203_25"
                  x1="28.405"
                  y1="7.67932"
                  x2="2.31693"
                  y2="7.67932"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#64C2DB" />
                  <stop offset="0.510417" stopColor="#7476ED" />
                  <stop offset="1" stopColor="#E56F8C" />
                </linearGradient>
                <clipPath id="clip0_203_25">
                  <rect
                    width="132.391"
                    height="24.5027"
                    fill="white"
                    transform="translate(0.347824 0.409836)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Company Description */}
          <p className="footer-para1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {/* Links Logo */}
          <img className="google-logo" src={image} alt="google logo" />
        </div>

        {/* Links */}
        <div className="footer-links">
          <h2 className="footer-title">Links</h2>
          <Link className="link" to="/">
            <p className="active">Services</p>
          </Link>
          <Link className="link" to="/">
            <p className="active">About Us</p>
          </Link>
          <Link className="link" to="/">
            <p className="active">Blog</p>
          </Link>
          <Link className="link" to="/">
            <p className="active">Careers</p>
          </Link>
        </div>

        {/* Contact Us */}
        <div className="footer-contact">
          <h2 className="footer-title">Contact Us</h2>
          <p className="footer-para2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="phone-number">+908 89097 890</p>
        </div>

        {/* Social Media */}
        <div className="footer-socials">
          <div className="social-logo facebook">
            <Link className="social-link" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                {/* Lingkaran (Eclipse) */}
                <g filter="url(#filter0_d_203_491)">
                  <circle cx="31" cy="27" r="17" fill="#FAFAFA" />
                </g>

                {/* Logo Facebook */}
                <foreignObject x="25" y="18" width="20" height="20">
                  <div xmlns="http://www.w3.org/1999/xhtml">
                    {/* Facebook svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_203_492)">
                        <path
                          d="M7.9985 1.9925H9.094V0.0845C8.905 0.0585 8.255 0 7.498 0C5.91851 0 4.83651 0.9935 4.83651 2.8195V4.5H3.09351V6.633H4.83651V12H6.97351V6.6335H8.646L8.9115 4.5005H6.97301V3.031C6.97351 2.4145 7.1395 1.9925 7.9985 1.9925Z"
                          fill="#1A202C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_203_492">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </foreignObject>

                {/* Definisi filter */}
                <defs>
                  <filter
                    id="filter0_d_203_491"
                    x="0"
                    y="0"
                    width="62"
                    height="62"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_203_491"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_203_491"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>

          <div className="social-logo instagram">
            <Link className="social-link" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                {/* Lingkaran (Eclipse) */}
                <g filter="url(#filter0_d_203_491)">
                  <circle cx="31" cy="27" r="17" fill="#FAFAFA" />
                </g>

                {/* Logo Instagram */}
                <foreignObject x="25" y="18" width="20" height="20">
                  <div xmlns="http://www.w3.org/1999/xhtml">
                    {/* Instagram svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_203_497)">
                        <path
                          d="M9.481 0H3.51898C1.57858 0 0 1.57858 0 3.51898V9.4811C0 11.4214 1.57858 13 3.51898 13H9.4811C11.4214 13 13 11.4214 13 9.4811V3.51898C13 1.57858 11.4214 0 9.481 0V0ZM12.2379 9.4811C12.2379 11.0012 11.0012 12.2379 9.481 12.2379H3.51898C1.99881 12.2379 0.762114 11.0012 0.762114 9.4811V3.51898C0.762114 1.99881 1.99881 0.762114 3.51898 0.762114H9.4811C11.0012 0.762114 12.2379 1.99881 12.2379 3.51898V9.4811Z"
                          fill="#1A202C"
                        />
                        <path
                          d="M6.50002 2.94531C4.53998 2.94531 2.94543 4.53986 2.94543 6.49989C2.94543 8.45993 4.53998 10.0545 6.50002 10.0545C8.46005 10.0545 10.0546 8.45993 10.0546 6.49989C10.0546 4.53986 8.46005 2.94531 6.50002 2.94531ZM6.50002 9.29236C4.96032 9.29236 3.70755 8.03969 3.70755 6.49989C3.70755 4.96019 4.96032 3.70743 6.50002 3.70743C8.03982 3.70743 9.29248 4.96019 9.29248 6.49989C9.29248 8.03969 8.03982 9.29236 6.50002 9.29236Z"
                          fill="#1A202C"
                        />
                        <path
                          d="M10.1396 1.68262C9.56035 1.68262 9.08923 2.15383 9.08923 2.73295C9.08923 3.31218 9.56035 3.78339 10.1396 3.78339C10.7188 3.78339 11.19 3.31218 11.19 2.73295C11.19 2.15373 10.7188 1.68262 10.1396 1.68262ZM10.1396 3.02118C9.98068 3.02118 9.85135 2.89184 9.85135 2.73295C9.85135 2.57397 9.98068 2.44473 10.1396 2.44473C10.2986 2.44473 10.4279 2.57397 10.4279 2.73295C10.4279 2.89184 10.2986 3.02118 10.1396 3.02118Z"
                          fill="#1A202C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_203_497">
                          <rect width="13" height="13" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </foreignObject>

                {/* Definisi filter */}
                <defs>
                  <filter
                    id="filter0_d_203_491"
                    x="0"
                    y="0"
                    width="62"
                    height="62"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_203_491"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_203_491"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>

          <div className="social-logo x-twitter">
            <Link className="social-link" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                {/* Lingkaran (Eclipse) */}
                <g filter="url(#filter0_d_203_491)">
                  <circle cx="31" cy="27" r="17" fill="#FAFAFA" />
                </g>

                {/* Logo Twitter */}
                <foreignObject x="23" y="19" width="20" height="20">
                  <div xmlns="http://www.w3.org/1999/xhtml">
                    {/* X-Twitter svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>
                  </div>
                </foreignObject>

                {/* Definisi filter */}
                <defs>
                  <filter
                    id="filter0_d_203_491"
                    x="0"
                    y="0"
                    width="62"
                    height="62"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_203_491"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_203_491"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>

          <div className="social-logo linkedin">
            <Link className="social-link" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                {/* Lingkaran (Eclipse) */}
                <g filter="url(#filter0_d_203_491)">
                  <circle cx="31" cy="27" r="17" fill="#FAFAFA" />
                </g>

                {/* Logo LinkedIn */}
                <foreignObject x="25" y="18" width="20" height="20">
                  <div xmlns="http://www.w3.org/1999/xhtml">
                    {/* Linkedin svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_203_511)">
                        <path
                          d="M10.9972 11.0003V10.9998H11V6.96555C11 4.99197 10.5751 3.47168 8.26783 3.47168C7.15866 3.47168 6.41433 4.08035 6.11046 4.65739H6.07837V3.65593H3.89075V10.9998H6.16866V7.36339C6.16866 6.40593 6.35016 5.4801 7.53587 5.4801C8.70416 5.4801 8.72158 6.57276 8.72158 7.42481V11.0003H10.9972Z"
                          fill="#1A202C"
                        />
                        <path
                          d="M0.181519 3.65625H2.46219V11.0001H0.181519V3.65625Z"
                          fill="#1A202C"
                        />
                        <path
                          d="M1.32092 0C0.591708 0 0 0.591708 0 1.32092C0 2.05013 0.591708 2.65421 1.32092 2.65421C2.05013 2.65421 2.64183 2.05013 2.64183 1.32092C2.64138 0.591708 2.04967 0 1.32092 0V0Z"
                          fill="#1A202C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_203_511">
                          <rect width="11" height="11" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </foreignObject>

                {/* Definisi filter */}
                <defs>
                  <filter
                    id="filter0_d_203_491"
                    x="0"
                    y="0"
                    width="62"
                    height="62"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_203_491"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_203_491"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <hr className="footer-hr" />
      <div className="footer-bottom">
        <p className="copyright">
          © 2023 Copyright by Agency Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;