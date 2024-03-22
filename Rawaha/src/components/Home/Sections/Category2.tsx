// import { Link } from 'react-router-dom';
// // import SampleAPI from '../../../../SampleAPI.json';
// import data from '../../../../data.json'
// import { useState, useEffect } from 'react';

// export default function Category2() {
//   // const items = SampleAPI.category2.items;
//   const products=data;

//   const [jsonData, setJsonData] = useState(products);
//   useEffect(()=>{
//     let newData = products.products.filter((item:any) => item.gender == "Male");
//     setJsonData({"products": newData})
//   },[])


//   const organizedData:any = {};

//   products.products.forEach((product) => {
//       // Create gender array if it not exists before
//       if (!organizedData[product.gender]) {
//           organizedData[product.gender] ={};
//       }

//       // Create category array if not exists before under same type 
//       if (!organizedData[product.gender][product.category]) {
//           organizedData[product.gender][product.category] = [];
//       }

//       // Push product to its corresponding category array under same gender
//       organizedData[product.gender][product.category].push(product);
//   });
//   console.log(organizedData)
//   // console.log(organizedData[0].image)
 

//   return (
//     <>
//       {/* <div className="category-section-2 m-20">
//         <div className="inner-category-2 max-w-[84rem] mx-auto flex gap-4 justify-center items-center px-5">
//           {Object.keys(organizedData).map((item:any, index:any) => (
//             <div key={index} className="item w-[200px] text-sm flex gap-2 flex-col relative">
//                <Link to="/itemDetails">
                
//                {Object.keys(organizedData[item]).map((category, categoryIndex) => (
//         <img key={categoryIndex} className="h-[200px] rounded-md w-full" src={`/src/assets/images/${organizedData[item][category][0].image}`} alt="items" />
//     ))}
//             </Link>
//               <p className="place-self-center">{item}</p>
//               <div className="circles group w-[128px] absolute custom-left top-[230px] transition-transform ease-in-out duration-300">
//                 <a className="h-8 w-8 flex justify-center items-center group-hover:transition-all duration-1000 text-gray-600 bg-gray-300 absolute transform translate-x-5 group-hover:translate-x-[2px] hover:border-gray-900 z-[100] rounded-full border-gray-100 border-2">{Object.keys(organizedData[item]).length} </a>
//                 <a className="h-8 w-8 group-hover:transition-all duration-1000 absolute transform translate-x-9 z-[70] "><img className="rounded-full border-gray-100 border-2 hover:border-gray-900" src={`/src/assets/images/${item[0].image}`} alt="#"/></a>
//                 <a className="h-8 w-8 group-hover:transition-all duration-1000 absolute transform translate-x-12 group-hover:translate-x-[70px] z-[50]" ><img className="rounded-full border-gray-100 border-2 hover:border-gray-900" src={`/src/assets/images/${item[0].image}`} alt="#"/></a>
//                 <a className="h-8 w-8 group-hover:transition-all duration-1000 absolute transform translate-x-14 group-hover:translate-x-[105px] z-[10]" ><img className="rounded-full border-gray-100 border-2 hover:border-gray-900" src={`/src/assets/images/${item[0].image}`} alt="#"/></a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}
//     </>
//   );
// }
