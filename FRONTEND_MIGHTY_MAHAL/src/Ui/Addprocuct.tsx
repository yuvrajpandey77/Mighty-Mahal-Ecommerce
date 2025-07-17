import { useRef } from "react";
import axios from "axios";
import { PRODUCT_URL } from "../config";
import { useNavigate } from "react-router-dom";
import Crossicon from "../Icons/Crossicon";

const AddProduct1 = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const ratingRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const initialPriceRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const rating = ratingRef.current?.value;
    const price = priceRef.current?.value;
    const image = imageRef.current?.value; 
    const category = categoryRef.current?.value;
    const initialPrice = initialPriceRef.current?.value;

    if (!title || !description || !rating || !price || !image) {
      alert("Please fill all fields and select an image.");
      return;
    }



    const token = localStorage.getItem("token");
    if(!token){
      alert("Please login to add a product");
      navigate("/login");
      return;
    }
    try {
      await axios.post(`${PRODUCT_URL}/add`, {
        title,
        description,
        rating,
        price,
        image,
        category,
        initialPrice,
       }, { headers: { 
          "Authorization": `Bearer ${token}` 
        }
      });
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error adding product:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response from server. Please check your connection.");
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  }

  return (
    <div className="relative bottom-10">
    <div className="flex justify-center bg-[#F8F5E9] items-center min-h-screen">
      <div className="relative left-141 bottom-98 " onClick={() => navigate('/dashboard')}><Crossicon /></div>
      
      <div className="w-full max-w-xl p-4 bg-white border font-serif  border-[#DF6D14] rounded-2xl  shadow-sm sm:p-6 md:p-8">
        <div className="space-y-4" onSubmit={submit}>

          <h5 className="text-3xl font-medium text-[#3d8066]  text-center">Add New Product</h5>

          <div>
            <div className="block mb-2 text-sm font-medium text-[#3d8066]">Title</div>
            <input
              ref={titleRef}
              className="w-full p-2.5 rounded  border border-[#DF6D14] text-black"
              placeholder="Product title"
            />
          </div>
          <div>
            <div className="block mb-2 text-md font-medium text-[#3d8066]">Category</div>
            <input
              ref={categoryRef}
              className="w-full p-2.5 rounded border border-[#DF6D14] text-black"
              placeholder="Product category"
            />
          </div>
          <div>
            <div className="block mb-2 text-md font-medium text-[#3d8066]">Description</div>
            <textarea
              ref={descriptionRef}
              className="w-full p-2.5 rounded border border-[#DF6D14] text-black"
              rows={2}
              placeholder="Product description "
              required
            />
          </div>

          <div>
            <div className="block mb-2 text-md font-medium text-[#3d8066]">Rating</div>
            <select
              ref={ratingRef}
              className="w-full p-2.5 rounded text-[#3d8066] border border-[#DF6D14] "
              required
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Stars
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-md font-medium text-[#3d8066]">Price ($)</label>
            <input
              ref={priceRef}
              type="number"
              className="w-full p-2.5 rounded border border-[#DF6D14] text-black"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-md font-medium text-[#3d8066]"> Initial Price ($)</label>
            <input
              ref={initialPriceRef}
              type="number"
              className="w-full p-2.5 rounded border border-[#DF6D14] text-black"
              placeholder="Initial price"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-md font-medium text-[#3d8066]">Image</label>
            <input
               ref={imageRef}
               className="w-full p-2.5 rounded border border-[#DF6D14] text-black"
               placeholder="image link"
            />
          </div>
          <button
            onClick={submit}
            className="w-full bg-[#3d8066] text-white py-2.5 rounded-lg hover:bg-[#9DC08B] transition"
          >
            Submit Product
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddProduct1;
