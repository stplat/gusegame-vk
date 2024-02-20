import React, { useState, useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { Group, CardScroll, Card } from "@vkontakte/vkui";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ProductSlider.css";
import flagRussia from "../../img/flag_russia.svg";

const ProductSlider = ({ products = [] }) => {
  const clickOnProduct = (e) => {
    const id = e.currentTarget.dataset.id;

    setProductId(id);
    go({ panelName: "product", productId: id });
  };

  useEffect(() => {}, []);

  console.log(products);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        850: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        660: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
      }}
    >
      {products.map((item, key) => (
        <SwiperSlide key={key}>
          <div className="item">
            <div className="item-bottom">
              <div className="item-platform">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7078 19.9797C13.4451 19.9313 13.2404 19.8397 13.0342 19.6783C12.7145 19.4282 12.5029 19.0805 12.4316 18.6881C12.3948 18.4858 12.3975 18.3177 12.4407 18.1082C12.5544 17.5571 12.9759 17.0854 13.5117 16.9096C13.7394 16.8349 14.1059 16.8231 14.3551 16.8824C14.6847 16.9608 15.0139 17.1605 15.2139 17.4035C15.2648 17.4653 15.3063 17.5231 15.3063 17.5319C15.3063 17.5494 14.8543 17.9428 14.8343 17.9428C14.8276 17.9428 14.7859 17.8998 14.7416 17.8473C14.6973 17.7948 14.6109 17.7185 14.5495 17.6777C14.0516 17.3472 13.4033 17.5247 13.1509 18.0605C13.1044 18.1592 13.1001 18.1899 13.0999 18.4237C13.0997 18.6738 13.1011 18.6817 13.1655 18.8126C13.2497 18.9837 13.4146 19.1523 13.576 19.2324C13.9745 19.4303 14.4721 19.3269 14.7472 18.9892V18.9892C14.7942 18.9315 14.8797 18.9245 14.9354 18.9737L15.0693 19.0919C15.3033 19.2986 15.305 19.3007 15.2778 19.3521C15.2356 19.432 14.9765 19.6762 14.8479 19.7573C14.5815 19.9254 14.3105 20.0031 14.002 19.9999C13.8941 19.9988 13.7617 19.9897 13.7078 19.9797ZM0.95594 19.9612C0.857298 19.9524 0.718865 19.9318 0.64831 19.9155C0.509507 19.8833 0.027913 19.7145 0.000514095 19.6885C-0.0122083 19.6764 0.215062 19.2212 0.254138 19.1805C0.258211 19.1763 0.374287 19.2175 0.512083 19.2721C0.830086 19.3982 0.965479 19.4191 1.40988 19.4107L1.61852 19.4067C1.71342 19.4049 1.80651 19.3805 1.89002 19.3354V19.3354C2.04143 19.2536 2.10618 19.1688 2.10618 19.0524C2.10618 18.8587 1.97797 18.7979 1.27669 18.659C0.376084 18.4806 0.101782 18.3154 0.0277017 17.9069C-0.0472089 17.4937 0.266681 17.1191 0.822575 16.9582C0.96286 16.9175 1.01842 16.9131 1.38046 16.9134C1.76702 16.9138 1.79201 16.9162 2.02772 16.9762C2.35816 17.0601 2.49016 17.1081 2.48237 17.1413C2.46216 17.2274 2.29267 17.5947 2.26895 17.6038C2.25336 17.6097 2.16312 17.5909 2.06843 17.5618C1.81223 17.4832 1.61476 17.4539 1.3373 17.4531C0.867627 17.4518 0.665445 17.542 0.665445 17.7526C0.665445 17.818 0.677078 17.8404 0.738806 17.8938C0.829874 17.9725 0.914993 17.9993 1.41969 18.1083C1.90193 18.2125 2.106 18.2744 2.30356 18.3766C2.47279 18.4641 2.59614 18.5738 2.66022 18.6937C2.69979 18.7677 2.7044 18.804 2.7044 19.0412C2.7044 19.3003 2.70303 19.3087 2.64042 19.4367C2.43612 19.8544 1.83962 20.0401 0.95594 19.9612ZM3.94387 19.8904C3.92438 19.8854 3.90125 19.8621 3.89247 19.8388C3.83226 19.6785 3.08481 16.9761 3.09405 16.9521C3.10393 16.9263 3.15105 16.9226 3.4136 16.9273V16.9273C3.59598 16.9305 3.75424 17.0539 3.8017 17.2301L3.93298 17.7172C4.26302 18.9419 4.28793 19.0281 4.30359 18.9992C4.31154 18.9845 4.4483 18.5252 4.60752 17.9786C4.76673 17.4319 4.90344 16.9743 4.91132 16.9615C4.92103 16.9458 5.00975 16.9374 5.18658 16.9355V16.9355C5.34097 16.9338 5.47771 17.0348 5.52146 17.1829L5.54314 17.2563C5.90528 18.4819 6.05468 18.9747 6.06863 18.9896C6.08718 19.0093 6.07526 19.049 6.30609 18.1978C6.40408 17.8364 6.52151 17.4039 6.56705 17.2367L6.57502 17.2074C6.61937 17.0446 6.7658 16.9305 6.93455 16.9272V16.9272C7.09114 16.9243 7.23702 16.9287 7.25874 16.9371C7.29646 16.9516 7.27996 17.0163 6.89228 18.3743C6.669 19.1564 6.48033 19.8206 6.47302 19.8502V19.8502C6.46521 19.8819 6.43678 19.9041 6.40417 19.9041L6.24924 19.904C6.13348 19.904 5.96745 19.8983 5.88028 19.8915V19.8915C5.78509 19.8841 5.70464 19.8181 5.67882 19.7261L5.49256 19.0629C5.36648 18.6141 5.24718 18.1938 5.22744 18.1291V18.1291C5.21647 18.0931 5.16565 18.0928 5.15424 18.1287L5.10101 18.2958C5.02356 18.5391 4.72489 19.5649 4.65698 19.8208V19.8208C4.64396 19.8699 4.59939 19.9039 4.54862 19.9036L4.30708 19.9019C4.12681 19.9006 3.96336 19.8955 3.94387 19.8904ZM8.02958 18.4106V17.2421C8.02958 17.0644 8.17681 16.9219 8.3545 16.9278V16.9278C8.53321 16.9337 8.6839 16.943 8.68937 16.9485C8.69484 16.9539 8.70448 17.6212 8.7108 18.4313L8.71958 19.5578C8.72107 19.7487 8.56677 19.9042 8.37593 19.9042V19.9042V19.9042C8.18465 19.9042 8.02958 19.7491 8.02958 19.5578V18.4106ZM10.3636 18.7371V18.0408C10.3636 17.7809 10.1529 17.5701 9.8929 17.5701V17.5701H9.7458C9.56706 17.5701 9.42217 17.4252 9.42217 17.2465V17.2465V17.2465C9.42217 17.0677 9.56706 16.9228 9.7458 16.9228H10.1251C10.5117 16.9228 11.0812 16.9287 11.3907 16.9358L11.6476 16.9418C11.8167 16.9457 11.9509 17.0854 11.9479 17.2546V17.2546V17.2546C11.9449 17.4253 11.8076 17.5632 11.6368 17.5668L11.4816 17.5701V17.5701C11.2252 17.5756 11.0198 17.7844 11.0187 18.0409L11.0156 18.742L11.012 19.5807C11.0112 19.7596 10.866 19.9042 10.6871 19.9042V19.9042V19.9042C10.5085 19.9042 10.3636 19.7593 10.3636 19.5807V18.7371ZM15.9928 18.4135V17.2367C15.9928 17.0634 16.1333 16.9228 16.3067 16.9228V16.9228V16.9228C16.48 16.9228 16.6205 17.0634 16.6205 17.2367V17.5113V17.5113C16.6205 17.8362 16.8839 18.0997 17.2089 18.0997H17.307H17.405C17.73 18.0997 17.9935 17.8362 17.9935 17.5113V17.5113V17.1043C17.9935 17.0041 18.0747 16.9229 18.1749 16.923V16.923C18.2747 16.923 18.4159 16.9288 18.4887 16.9357V16.9357C18.5638 16.9428 18.6211 17.0058 18.6211 17.0812V18.4262V19.5904C18.6211 19.7637 18.4806 19.9042 18.3073 19.9042V19.9042V19.9042C18.134 19.9042 17.9935 19.7637 17.9935 19.5904V19.3158V19.3158C17.9935 18.9908 17.73 18.7274 17.405 18.7274H17.307H17.2089C16.8839 18.7274 16.6205 18.9908 16.6205 19.3158V19.3158V19.5904C16.6205 19.7637 16.48 19.9042 16.3067 19.9042V19.9042V19.9042C16.1333 19.9042 15.9928 19.7637 15.9928 19.5904V18.4136V18.4135ZM17.6359 16.1315C17.3164 16.0226 17.1239 15.7998 17.068 15.4744C16.9903 15.021 17.2939 14.592 17.753 14.5066C17.895 14.4802 18.1095 14.5187 18.2769 14.6007C18.4267 14.6741 18.6031 14.8635 18.6618 15.0141C18.7195 15.1622 18.7256 15.4907 18.6732 15.6283C18.5133 16.0485 18.0508 16.2729 17.6359 16.1315ZM18.1051 15.7687C18.3003 15.6691 18.3966 15.4609 18.3502 15.2388C18.3189 15.0889 18.2421 14.9855 18.1108 14.9163C18.014 14.8653 17.9891 14.8605 17.8613 14.8684C17.6769 14.8797 17.5613 14.9471 17.4808 15.0903C17.3709 15.2856 17.3875 15.4799 17.5276 15.639C17.6868 15.8199 17.9076 15.8695 18.1051 15.7687ZM0.105557 15.3467V14.7212C0.105557 14.6265 0.182521 14.5499 0.277179 14.5503V14.5503V14.5503C0.385242 14.5508 0.486793 14.6021 0.551388 14.6887L0.821465 15.0509L0.89489 15.1494C0.99158 15.2791 1.19767 15.2119 1.19936 15.0502V15.0502L1.20286 14.7159C1.20382 14.6238 1.27881 14.5496 1.37099 14.5496V14.5496V14.5496C1.46288 14.5496 1.53737 14.6241 1.53737 14.716V15.3329V16.032C1.53737 16.0804 1.50193 16.1216 1.45401 16.1288V16.1288C1.40817 16.1356 1.33593 16.1384 1.29349 16.1349C1.21712 16.1286 1.21245 16.1232 0.842369 15.6225L0.76336 15.5156C0.666164 15.3841 0.457591 15.449 0.45227 15.6125V15.6125C0.443391 15.8853 0.433042 16.1116 0.429271 16.1153C0.425501 16.1191 0.351123 16.1271 0.263987 16.133V16.133C0.178298 16.1389 0.105557 16.071 0.105557 15.9851V15.3467ZM2.73382 15.3439V14.7163C2.73382 14.6242 2.80846 14.5496 2.90054 14.5496V14.5496V14.5496C2.99262 14.5496 3.06726 14.6242 3.06726 14.7163V15.3439V15.9716C3.06726 16.0637 2.99262 16.1383 2.90054 16.1383V16.1383V16.1383C2.80846 16.1383 2.73382 16.0637 2.73382 15.9716V15.3439ZM4.31086 16.1248C4.27199 16.1172 4.26905 16.1006 4.25692 15.8204C4.23774 15.3772 4.24146 14.6571 4.26322 14.5999C4.28153 14.5517 4.28888 14.5496 4.43484 14.5504V14.5504C4.53087 14.5509 4.62108 14.5964 4.67846 14.6734L4.9502 15.0381L5.26416 15.4594C5.28248 15.484 5.32134 15.4745 5.32631 15.4443V15.4443C5.3336 15.3999 5.34022 15.1804 5.34102 14.9566L5.34188 14.7163C5.34221 14.6241 5.41702 14.5496 5.50919 14.5496V14.5496V14.5496C5.60127 14.5496 5.67591 14.6242 5.67591 14.7163V15.3439V15.9854C5.67591 16.0698 5.60745 16.1383 5.52299 16.1383V16.1383V16.1383C5.42676 16.1383 5.33618 16.0929 5.27865 16.0157L4.97871 15.6136L4.90106 15.5095C4.79972 15.3737 4.5838 15.4441 4.58211 15.6136V15.6136L4.57801 16.0258C4.57739 16.0877 4.52629 16.1371 4.46443 16.1356V16.1356C4.40258 16.1341 4.33347 16.1293 4.31086 16.1248ZM7.30386 15.5106V15.1507C7.30386 15.0028 7.18403 14.883 7.0362 14.883V14.883H6.91787C6.83751 14.883 6.77434 14.8143 6.78111 14.7342V14.7342C6.78803 14.6524 6.79867 14.5773 6.80476 14.5675C6.81109 14.5572 7.10103 14.5496 7.48155 14.5496H7.98054C8.07262 14.5496 8.14726 14.6242 8.14726 14.7163V14.7163V14.7163C8.14726 14.8084 8.07262 14.883 7.98054 14.883H7.89228V14.883C7.75146 14.883 7.6373 14.9972 7.6373 15.138V15.5106V15.9716C7.6373 16.0637 7.56266 16.1383 7.47058 16.1383V16.1383V16.1383C7.37851 16.1383 7.30386 16.0637 7.30386 15.9716V15.5106ZM9.28487 15.3439V15.1674C9.28487 14.8262 9.56149 14.5496 9.90271 14.5496V14.5496H10.4347C10.4821 14.5496 10.5205 14.588 10.5205 14.6354V14.6354C10.5205 14.6826 10.515 14.7488 10.5083 14.7825V14.7825C10.5012 14.8181 10.4699 14.8438 10.4335 14.8438L10.1798 14.844C10.0058 14.844 9.80356 14.8498 9.73031 14.8567V14.8567C9.65559 14.8637 9.59938 14.9279 9.60224 15.0029L9.60282 15.0184V15.0184C9.606 15.1019 9.6741 15.1683 9.75769 15.1694L10.0253 15.1728L10.3056 15.1763C10.3813 15.1773 10.4421 15.2389 10.4421 15.3146V15.3146V15.3146C10.4421 15.3902 10.3813 15.4519 10.3056 15.4528L10.0253 15.4564L9.79 15.4594C9.6885 15.4607 9.60601 15.5416 9.60286 15.6431V15.6431V15.6431C9.59977 15.7424 9.67941 15.8245 9.77874 15.8245H10.0589H10.3636C10.4503 15.8245 10.5205 15.8948 10.5205 15.9814V15.9814V15.9814C10.5205 16.0681 10.4503 16.1383 10.3636 16.1383H9.90271V16.1383C9.56149 16.1383 9.28487 15.8617 9.28487 15.5205V15.344V15.3439ZM11.8688 16.1242V16.1242C11.8377 16.1195 11.8148 16.0927 11.815 16.0613L11.8197 15.3377L11.8238 14.7164C11.8244 14.6286 11.8941 14.557 11.9818 14.5539V14.5539V14.5539C12.0801 14.5505 12.1739 14.5953 12.233 14.6739L12.5114 15.0442L12.5865 15.1442C12.683 15.2726 12.8876 15.2056 12.8893 15.0448V15.0448L12.8926 14.7257C12.8937 14.6281 12.9731 14.5496 13.0707 14.5496V14.5496V14.5496C13.168 14.5496 13.2469 14.6284 13.2469 14.7258V15.3439V15.9765C13.2469 16.0657 13.1743 16.138 13.0851 16.1376V16.1376V16.1376C12.9832 16.1372 12.8876 16.0887 12.827 16.0068L12.5359 15.6134L12.4603 15.5113C12.3612 15.3773 12.1485 15.4474 12.1485 15.6141V15.6141V16.0255C12.1485 16.0873 12.0975 16.137 12.0357 16.1353V16.1353C11.9737 16.1337 11.8986 16.1287 11.8688 16.1242ZM14.5806 15.3416L14.5806 14.9568C14.5806 14.7285 14.7692 14.5454 14.9974 14.5522V14.5522C15.4482 14.5657 15.5112 14.5781 15.6656 14.6844C15.9259 14.8634 16.0711 15.1865 16.0156 15.4629C15.9679 15.7 15.8447 15.8828 15.6567 15.9953C15.4875 16.0965 15.3597 16.1213 14.9484 16.133V16.133C14.747 16.1387 14.5806 15.977 14.5806 15.7755L14.5806 15.3416ZM15.257 15.7854C15.257 15.7854 15.257 15.7854 15.2571 15.7854C15.5135 15.7434 15.6525 15.6078 15.6732 15.3794C15.6816 15.2872 15.6748 15.2435 15.6396 15.1616C15.5532 14.9608 15.3963 14.883 15.0772 14.883V14.883C14.9763 14.883 14.8945 14.9648 14.8945 15.0658V15.3439V15.6823C14.8945 15.7499 14.9494 15.8048 15.017 15.8047V15.8047C15.0844 15.8047 15.1924 15.7959 15.257 15.7853C15.257 15.7853 15.257 15.7853 15.257 15.7854V15.7854ZM6.21529 12.6079C5.74968 12.5929 5.57425 12.5588 5.20083 12.4109C4.18332 12.0079 3.49443 11.2353 3.20412 10.1718C3.15201 9.98089 3.14114 9.89835 3.12589 9.57744C3.10109 9.05594 3.10202 3.37561 3.12695 3.009C3.15965 2.52834 3.24042 2.23215 3.45917 1.79071C3.88335 0.934706 4.6389 0.337124 5.62183 0.0802169V0.0802169C5.75542 0.0453015 5.89288 0.0273681 6.03095 0.026841L7.48039 0.021307C8.54152 0.0172555 9.14835 0.0218993 9.16719 0.0342147C9.19324 0.0512468 9.19661 0.77025 9.19661 6.31002C9.19661 11.4162 9.19192 12.5713 9.17112 12.5921C9.15077 12.6125 8.89165 12.6179 7.88641 12.6193C7.19383 12.6203 6.44183 12.6151 6.21529 12.6079ZM8.16688 6.3184V1.98557C8.16688 1.44865 7.72796 1.01535 7.19108 1.02225V1.02225C6.6544 1.02915 6.13196 1.04448 6.03011 1.05631C5.79169 1.084 5.57573 1.15225 5.34173 1.27386C4.78867 1.5613 4.39366 2.04483 4.21438 2.65383V2.65383C4.17992 2.77089 4.1617 2.89213 4.16023 3.01414L4.14439 4.33072C4.12576 5.87915 4.13754 8.81527 4.16509 9.48918C4.17887 9.82601 4.18712 9.89154 4.23425 10.0384C4.42635 10.6368 4.81222 11.0912 5.35998 11.3641C5.55773 11.4627 5.78575 11.54 5.96786 11.5703C6.03922 11.5822 6.50803 11.5983 7.00966 11.6062C7.51128 11.614 7.97687 11.6219 8.04429 11.6237V11.6237C8.11144 11.6256 8.16688 11.5716 8.16688 11.5045V6.3184ZM5.92005 4.93084C5.7587 4.8803 5.58655 4.77096 5.43844 4.62493C5.31645 4.50465 5.27173 4.44238 5.19327 4.28352V4.28352C5.13015 4.15573 5.09753 4.01505 5.09799 3.87252L5.09821 3.80298C5.09903 3.54393 5.10391 3.50418 5.14965 3.38451C5.26426 3.08463 5.43816 2.88728 5.71446 2.74354C5.90676 2.64349 6.05581 2.60469 6.24787 2.60469C6.45449 2.60469 6.57793 2.6333 6.77277 2.72634C7.08044 2.87326 7.3249 3.17551 7.41145 3.51595C7.44963 3.66618 7.44951 3.93738 7.41118 4.08452C7.31191 4.46565 7.00691 4.78174 6.60499 4.92002C6.51633 4.95052 6.44307 4.95809 6.24654 4.95705C6.10563 4.9563 5.96539 4.94504 5.92005 4.93084ZM10.5082 12.6049C10.4693 12.5446 10.451 7.00041 10.4747 2.49246L10.4843 0.675334C10.4863 0.310571 10.7782 0.0136457 11.1429 0.0056017V0.0056017C12.0003 -0.0133104 12.9316 0.0173369 13.1718 0.0723687C14.0524 0.274133 14.7803 0.790577 15.2492 1.54631C15.5059 1.95996 15.6668 2.43943 15.6998 2.88909C15.7235 3.21201 15.7223 9.25735 15.6985 9.67551C15.6776 10.0415 15.6421 10.2213 15.5352 10.5007C15.2817 11.1639 14.8181 11.7402 14.2374 12.1141C13.9163 12.3208 13.4951 12.4893 13.0959 12.5707C12.8948 12.6117 12.8239 12.6144 11.7047 12.6227C10.7284 12.6299 10.5224 12.6268 10.5082 12.6049ZM13.2345 8.18504C13.6267 8.10196 13.9797 7.79316 14.142 7.39131C14.2756 7.06067 14.2369 6.61745 14.0464 6.2941C13.944 6.12038 13.7324 5.92142 13.5487 5.8262C13.3506 5.72353 13.1896 5.68466 12.9625 5.68466C12.6154 5.68466 12.3429 5.79234 12.0928 6.02842C11.8409 6.26613 11.7245 6.51373 11.7037 6.8565C11.6884 7.108 11.7206 7.29092 11.8139 7.48334C11.9492 7.76218 12.1524 7.959 12.4474 8.09706C12.687 8.2092 12.9708 8.24092 13.2345 8.18504Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="item-flag">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 16.6667C20 17.5507 20 19.3667 20 20C19.1333 19.9918 18.3672 20 17.7778 20H2.22222C1.63285 20 0.725002 20 2.92229e-07 20C-6.85288e-07 19.1979 1.10285e-06 17.5507 1.10285e-06 16.6667V13.3333H20V16.6667Z"
                    fill="#CE2028"
                  />
                  <path
                    d="M0 6.66668H20V13.3333H1.10285e-06L0 6.66668Z"
                    fill="#22408C"
                  />
                  <path
                    d="M17.778 7.16317e-06H2.2239C1.63459 7.16317e-06 0.414349 -3.65507e-06 0.00188747 1.29808e-06C-0.00235961 1.35221 0.00188794 2.44928 0.00188794 3.33334V6.66667L20 6.66668V3.33334C20 2.44928 20 0.820841 20 2.26367e-06C19.5251 4.45247e-06 18.3673 7.16317e-06 17.778 7.16317e-06Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <img src={item.image_path} />
            <div className="item-name p-4 tfont-light">{item.name}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
