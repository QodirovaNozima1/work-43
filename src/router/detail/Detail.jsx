import axios from 'axios'
import './Detail.css'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
const API__URl = "https://dummyjson.com"
import { IoStarOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { TbArrowBigRightLine } from "react-icons/tb";


//dynamic
const Detail = () => {
    const {id} = useParams()
    const [data , setData] = useState (null)
     
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    useEffect(() =>{
        axios
             .get(`${API__URl}/products/${id}`)
             .then(res => setData(res.data))
             .catch(res => console.log(res))
    },[])
    return(
        <div className="container w-10/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1 ">
          <div>
            {" "}
            <img
              className="w-[200px] m-auto mb-4 object-contain"
              src={data?.images[0]}
              alt=""
            />
            <div className="flex  gap-7">
              {data?.images?.map((item, inx) => (
                <img
                  className="w-[80px] h-[80px] object-contain"
                  src={item}
                  key={inx}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[42px] font-[600]">{data?.brand}</h2>
            <b className="text-[16px] font-[400]">
              {data?.meta.createdAt}/
              <b className="text-[16px] font-extralight">{data?.description}</b>
            </b>
            <div className="flex gap-[50px]">
              <p className="text-[18px] font-bold">Br{data?.price}</p>
              <div>
                <button className="w-[32px] border text-[18px] rounded">-</button>
                <button className="w-[50px]">0</button>
                <button className="w-[32px] border text-[18px] rounded">+</button>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="btn lg:py-[16px] bg-[#ff8a1e] cursor-pointer rounded-[32px] text-[#fff] lg:px-[98px] border py-[5px] px-[40px]">
                Добаить в корзину +
              </button>
              <button className="border px-3 rounded-full">
                <IoStarOutline className=" lg:text-[30px]" />
              </button>
              <button className="border px-3 rounded-full">
                <IoBarChartOutline className="lg:text-[30px]" />
              </button>
            </div>
            <p>{data?.description}</p>
            <hr />
            <div className="flex justify-between">
              <p className="font-[600]">{data?.sku}</p>
              <p>
              <TbArrowBigRightLine />
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="font-[600]">{data?.rating}%</p>
              <p>
              <TbArrowBigRightLine />
              </p>
            </div>
            <hr />
          </div>
        </div>
        <div className="border grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center ">
        </div>
    </div>
    )
}

export default Detail