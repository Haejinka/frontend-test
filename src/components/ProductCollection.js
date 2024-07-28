import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Utils/Sidebar";
import Table from "./Utils/Table";
import Pagination from "./Utils/Pagination";

const ProductCollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); 
  const [hasFilter, setHasFilter] = useState(null);
  const [filterName, setFilterName] = useState("Product Collection Page");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:3010/products');
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (hasFilter) {
      applyFilter();
    } else {
      setFilteredProducts(products);
    }
    setCurrentPage(1); // Reset to first page on filter change
  }, [hasFilter, products]);

  const applyFilter = () => {
    let filteredList = products;

    if (hasFilter.type === "All Products") {
      filteredList = products;
      setFilterName("Product Collection Page");
    } else if (hasFilter.type === "Cat") {
      filteredList = products.filter(product => product.tags.includes("Cat"));
      setFilterName("Cat Products");
    } else if (hasFilter.type === "Dog") {
      filteredList = products.filter(product => product.tags.includes("Dog"));
      setFilterName("Dog Products");
    } else if (hasFilter.type === "Subscription") {
      filteredList = products.filter(product => product.subscription === (hasFilter.search === "Yes"));
      setFilterName("Subscription Products");
    } else if (hasFilter.type === "Price") {
      filteredList = products.filter(product => product.price <= parseFloat(hasFilter.search));
      setFilterName(`Products under $${hasFilter.search}`);
    }

    setFilteredProducts(filteredList);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);

  const paginateFront = () => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / postsPerPage)));
  const paginateFirst = () => setCurrentPage(1);
  const paginateLast = () => setCurrentPage(Math.ceil(filteredProducts.length / postsPerPage));
  const paginateBack = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

  const handleFilter = (data) => {
    setHasFilter(data);
  };

  return (
    <>
      <Sidebar handleFilter={handleFilter} />

      <div className="p-4 sm:ml-72">
        <h1 className="text-xl font-bold my-8">{filterName}</h1>

        <div className="relative overflow-x-auto mt-4">
          <Table posts={currentPosts} loading={loading} />
          <div className="flex justify-end mt-4">
            <Pagination
              isLast={currentPage === Math.ceil(filteredProducts.length / postsPerPage)}
              isFirst={currentPage === 1}
              currentPage={currentPage}
              total={filteredProducts.length}
              postsPerPage={postsPerPage}
              paginateFirst={paginateFirst}
              paginateLast={paginateLast}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCollectionPage;
