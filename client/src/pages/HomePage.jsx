import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/shared/spinner";
import Layout from "../components/shared/Layout/Layout";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <Layout>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Home PAge</h1>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
