import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const retriveProducts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const ProductList = () => {
    const {data:posts,error,isLoading} =useQuery({
        queryKey:['posts'],
        queryFn:retriveProducts
    })
if(isLoading) return <>loading</>
if(error) return <>{error.message}</>
  return (
    <>
  {posts &&
  posts.map((post) => (
    <div
      key={post.id}
      className="bg-white rounded-2xl shadow-md p-4 mb-6 max-w-xl mx-auto border border-gray-200"
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div>
          <p className="font-semibold text-gray-900">User {post.userId}</p>
          <p className="text-xs text-gray-500">Just now</p>
        </div>
      </div>

      <div className="text-[15px] text-gray-800 leading-snug space-y-2">
        <p className="font-semibold text-[16px] text-gray-900">{post.title}</p>
        <p>{post.body}</p>
      </div>

      <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
        <button className="hover:text-blue-600">Like</button>
        <button className="hover:text-blue-600">Comment</button>
        <button className="hover:text-blue-600">Share</button>
      </div>
    </div>
  ))}
    </>
  );
};

export default ProductList;
