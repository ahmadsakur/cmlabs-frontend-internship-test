import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import axios from "axios";
import LoadingScreen from "../../components/Loading";
import { useRouter } from "next/router";

function _category() {
  const router = useRouter();
  const { category } = router.query;
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  return (
    <>
      <Head>
        <title>Category | {category}</title>
      </Head>
      <Layout>
        {/* Section 1 */}
        <section className="relative py-20 overflow-hidden bg-white">
          <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
            <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
          </span>
          <span className="absolute bottom-0 left-0"> </span>
          <div className="relative px-16 mx-auto max-w-7xl">
            <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
              Find Amazing Cuisine <br />
              that suits your tastebud
            </h2>
            <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
              
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default _category;
