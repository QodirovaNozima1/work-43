import axios from 'axios'
import './Detail.css'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
const API_URL = "https://dummyjson.com"
import { IoStarOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { TbArrowBigRightLine } from "react-icons/tb";
import { LiaCartPlusSolid } from "react-icons/lia";


//dynamic
const Detail = () => {
  const {id} = useParams()
  const [data , setData] = useState (null)
  const [products, setproduct] = useState(null);
  const [offset, setoffset] = useState(0);
  const [offsett, setoffsett] = useState(0);

  const [total, settottal] = useState(0);
  const [offsetsy, setoffsetsy] = useState(1);
  const [sellect, setSellect] = useState("");
  const handleClick = () => setoffset(offset + 1);
  const onhandleClick = () => setoffsett(offsett + 1);
  console.log(id);
     
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    useEffect(() =>{
        axios
             .get(`${API_URL}/products/${id}`)
             .then(res => setData(res.data))
             .catch(res => console.log(res))
    },[])
    useEffect(() => {
      axios
        .get(`${API_URL}/products${sellect}`, {
          params: {
            limit: 4,
          },
        })
        .then((res) => {
          settottal(res.data.total),
            setproduct(
              res.data.products.map((product) => ({ ...product, count: 0 }))
            );
        })
        .catch((err) => console.log(err));
    }, [offsetsy, sellect]);

    
    const productItem = products?.map((product) => (
      <div key={product.id} className='w-72 p-3 api flex flex-col gap-4 items-center justify-center rounded-lg  relative overflow-hidden'>
          <img src={product.images[0]} alt="" className='w-full h-52 object-contain hover:scale-105 ' />
          <div className='flex flex-col gap-2 '>
              <h3 className='text-center text-xl font-semibold'>{product.brand}</h3>
              <p className='text-red-500 text-sm font-medium ml-2'>12%</p>
              <p className='desck'>{product.description}</p>
              <p className='text-lg font-semibold ml-2 mb-6'>${product.price}</p>
          </div>
          <button className=' button w-12 border rounded-full bg-emerald-300 p-1 text-xs text-slate-100'>New</button>
          <button className='btr w-9 h-9 rounded-full border-none bg-yellow-400 '><LiaCartPlusSolid className='text-slate-100 text-2xl m-auto' /></button>
          <div className=' flex items-center justify-center gap-3'>
        <button
          className=" w-8 h-8 p-2 rounded-md border flex items-center justify-center"
          disabled={offsett <= 0}
          onClick={() => setoffsett(offsett - 1)}
        >
          -
        </button>
        <p className=" w-3 h-3  flex items-center justify-center">{offsett}</p>
        <button
          className=" w-8 h-8 border p-2 rounded-md flex items-center justify-center text-2xl"
          onClick={() => setoffsett(offsett + 1)}
        >
          +
        </button>
              </div>
      </div>
  ))
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
        <div className=' flex items-center justify-center gap-3'>
        <button
          className=" w-8 h-8 p-2 rounded-md border flex items-center justify-center text-2xl"
          disabled={offsett <= 0}
          onClick={() => setoffsett(offsett - 1)}
        >
          -
        </button>
        <p className=" w-3 h-3  flex items-center justify-center">{offsett}</p>
        <button
          className=" w-8 h-8 border p-2 rounded-md flex items-center justify-center text-2xl"
          onClick={() => setoffsett(offsett + 1)}
        >
          +
        </button>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="btn p-2 rounded-lg text-white p-5 lg:py-[16px] bg-[#ff8a1e] cursor-pointer rounded-[32px] text-[#fff] lg:px-[98px] border py-[5px] px-[40px]">
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