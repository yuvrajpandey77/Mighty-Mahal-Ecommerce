import { useRef } from "react";
import axios from "axios";
import { PRODUCT_URL } from "../config";
import { useNavigate } from "react-router-dom";

const testingminimaAddproduct = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const ratingRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const rating = ratingRef.current?.value;
    const price = priceRef.current?.value;
    const image = imageRef.current?.value; // Get the selected file

    if (!title || !description || !rating || !price || !image) {
      alert("Please fill all fields and select an image.");
      return;
    }
 // File upload


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
        headers: { 
          "Authorization": `Bearer ${token}` 
        },
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
    <div className="flex justify-center bg-gray-700 items-center min-h-screen">
      <div className="w-full max-w-sm p-4 bg-gray-900 border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <div className="space-y-4" onSubmit={submit}>
          <h5 className="text-xl font-medium text-white">Add New Product</h5>

          <div>
            <div className="block mb-2 text-sm font-medium text-white">Title</div>
            <input
              ref={titleRef}
              className="w-full p-2.5 rounded bg-gray-600 border border-gray-500 text-white"
              placeholder="Product title"
            />
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-white">Description</div>
            <textarea
              ref={descriptionRef}
              className="w-full p-2.5 rounded bg-gray-600 border border-gray-500 text-white"
              rows={3}
              placeholder="Product description"
              required
            />
          </div>

          <div>
            <div className="block mb-2 text-sm font-medium text-white">Rating</div>
            <select
              ref={ratingRef}
              className="w-full p-2.5 rounded bg-gray-600 border border-gray-500 text-white"
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
            <label className="block mb-2 text-sm font-medium text-white">Price ($)</label>
            <input
              ref={priceRef}
              type="number"
              className="w-full p-2.5 rounded bg-gray-600 border border-gray-500 text-white"
              placeholder="Enter price"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Image</label>
            <input
               ref={imageRef}
               className="w-full p-2.5 rounded bg-gray-600 border border-gray-500 text-white"
               placeholder="image link"
            />
          </div>
          <button
            onClick={submit}
            className="w-full bg-blue-700 text-white py-2.5 rounded-lg hover:bg-blue-800 transition"
          >
            Submit Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default testingminimaAddproduct;
