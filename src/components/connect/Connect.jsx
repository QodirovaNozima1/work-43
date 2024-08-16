import React from 'react'
import image from '../../assets/boy.png'
import { SlSocialVkontakte } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { IoLogoGoogleplus } from "react-icons/io";


const Connect = () => {
    return (
        <div className="container w-10/12 mt-28">
          <p className="text-[36px] text font-[700] mt-[-100px] mb-11">Контакты</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start">
            <div className="">
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start">
                <div>
                  <p>+ 375 434 847 28 84</p>
                  <p>+ 375 448 473 09 48</p>
                  <p>ikeaekspress@gmail.com</p>
                </div>
                <div>
                  <p>г.Минск</p>
                  <p>Ул. Первомайская</p>
                  <p>Д. 1, Кв. 43</p>
                </div>
                <div className="w-[250px]">
                  <p>ОГРН: 3748 49384 4847 30948</p>
                  <p>ООО “Икеа”</p>
                  <p>Политика конфиденциальности</p>
                </div>
              </div>
              <div className="flex gap-7 mt-9">
                <SlSocialVkontakte  className="text-[32px]" />
                <FiFacebook  className="text-[32px]" />
                <IoLogoGoogleplus className="text-[32px]" />
              </div>
            </div>
            <div className=" lg:mt-[-120px] lg:w-[450px] sm:mt-[0] ml-11">
              <img className="" src={image} alt="" />
            </div>
          </div>
        </div>
      );
}

export default Connect