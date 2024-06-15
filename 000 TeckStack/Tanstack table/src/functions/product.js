import axios from "axios";

export const getProductssortandfilter = async (
  sort,
  order,
  page,
  subcategg,
  color,
  brand,
  shipping,
  starNumbers,
  mypricechanged,
  myprice,
  mytext
) =>
  await axios.post(
    `https://ecom-backend-gray.vercel.app/api/productssortandfilter`,
    {
      //post bcoz passing sope body params based on which fetch data
      sort,
      order,
      page,
      subcateg: subcategg,
      color,
      brand,
      shipping,
      starNumbers,
      mypricechanged,
      myprice,
      mytext,
    }
  );

//   {
//     "sort": "title",
//     "order": "asc",
//     "page": 1,
//     "subcateg": [],
//     "color": "",
//     "brand": "",
//     "shipping": "",
//     "starNumbers": [],
//     "mypricechanged": false,
//     "myprice": [
//         0,
//         0
//     ],
//     "mytext": ""
// }


            // "sold",
            // "desc",
            // page,
            // inTheState,
            // mycolor,
            // mybrand,
            // myshipping,
            // mystarNumbers,
            // mypricechanged,
            // myprice,
            // mytext