import { getAxios } from "../../utils/requests";
import Link from "next/link";
export default function Details({ itemsDetail }) {
  console.log(itemsDetail, "DetailsData00");
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-12">
        <Link href="/">
          <div className="flex justify-end items-center pr-12 cursor-pointer hover:transition hover:-translate-y-2 duration-700">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="#e0f2fe"
            >
              <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
            </svg>
          </div>
        </Link>
        <h2 className="font-bold text-3xl text-center text-sky-100">
          {itemsDetail.title}
        </h2>
        <p className="font-bold text-center text-xl pt-4 text-sky-900">
          Points: {itemsDetail.points}
        </p>
      </div>
      <div className="p-12 bg-sky-100">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-sky-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Object ID
                </th>

                <th scope="col" className="px-6 py-3">
                  Author Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  Created at
                </th>
              </tr>
            </thead>
            <tbody>
              {itemsDetail.children.map((k) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {k.id}
                  </th>

                  <td className="px-6 py-4 capitalize">{k.author}</td>

                  <td className="px-6 py-4">{k.type}</td>

                  <td className="px-6 py-4 text-right cursor-pointer">
                    {k.created_at.slice(0, 10)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const objectID = ctx.params.id;

  let initialProps = {
    itemsDetail: "",
  };

  const itemsResp = await getAxios("getDetails", null, `${objectID}`);
  if (itemsResp && itemsResp) {
    initialProps.itemsDetail = itemsResp;
  }

  return {
    props: initialProps,
  };
}
