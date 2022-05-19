// import styles from "./BuiltImage.module.css";
import Link from "next/link";
export default function TableContent({ dataList }) {
  // console.log(image, "Image");
  return (
    <>
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
                Relevancy Score
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((k) => (
              <tr
                key={k.created_at_i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {k.objectID}
                </th>

                <td className="px-6 py-4 capitalize">{k.author}</td>
                {k.relevancy_score ? (
                  <td className="px-6 py-4">{k.relevancy_score}</td>
                ) : (
                  <td className="px-6 py-4">-------</td>
                )}

                <Link
                  href={`/items/${encodeURIComponent(
                    k.objectID.replace("originals/", "")
                  )}`}
                >
                  <td className="px-6 py-4 text-right cursor-pointer">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      view more
                    </a>
                  </td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
