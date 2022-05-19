import Head from "next/head";
// import Header from "@components/Header";
// import BuiltImage from "../components/BuiltImage";
import Search from "../components/Search";
import { getAxios } from "../utils/requests";
// import Footer from "@components/Footer";

export default function Home({ searchData }) {
  console.log(searchData, "data1");
  return (
    <>
      <div className="bg-slate-900">
        <div className="">
          <main className="">
            <div className="">
              <Search />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  var initialProps = {
    searchData: [],
  };

  const searchResp = await getAxios("getSearchData", null, "?query=test");
  if (searchResp && searchResp.hits) {
    initialProps.searchData = searchResp.hits;
  }

  return {
    props: initialProps,
  };
}
