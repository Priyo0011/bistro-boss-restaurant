import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import SectionTitl2 from "../../components/SectionTitl2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };
  return (
    <div>
      <div>
        <SectionTitl2
          heading="Update an Item"
          subHeading="Refresh info"
        ></SectionTitl2>
      </div>
      <div className="w-[1320px] mx-auto px-32 py-10">
        <div className="bg-white p-8">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text font-semibold text-base">
                    Recipe Name*
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="Recipe Name"
                  {...register("name", { required: true })}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex gap-6">
                <div className="form-control w-full my-6">
                  <label className="label">
                    <span className="label-text font-semibold text-base">
                      Category*
                    </span>
                  </label>
                  <select
                    defaultValue={category}
                    {...register("category", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option disabled value="default">
                      Select a category
                    </option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>

                <div className="form-control w-full my-6">
                  <label className="label">
                    <span className="label-tex font-semibold text-base">
                      Price*
                    </span>
                  </label>
                  <input
                    type="number"
                    defaultValue={price}
                    step="0.01"
                    placeholder="Price"
                    {...register("price", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">
                    Recipe Details
                  </span>
                </label>
                <textarea
                  {...register("recipe")}
                  className="textarea textarea-bordered h-40"
                  placeholder="Recipe Details"
                  defaultValue={recipe}
                ></textarea>
              </div>

              <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-xs bg-base-200"
                />
              </div>

              <button onClick={() => navigate(-1 || '/')} className="btn bg-[#D1A054] text-white">
                Update Item <FaUtensils className="ml-2"></FaUtensils>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
