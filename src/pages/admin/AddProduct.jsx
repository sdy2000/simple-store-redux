import { AccountingInput } from "../../components";
import { useForm } from "../../hooks";

const getFreshProductModel = () => ({
  id: "",
  title: "",
  category: "",
  description: "",
  image: "",
  price: 0,
  rating: { count: 0, rate: 0 },
});

function AddProduct() {
  const { values, handleInputChange } = useForm(getFreshProductModel);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const login = Object.fromEntries(formData);
    console.log(login);
  };

  return (
    <div className="container py-20">
      <form
        className="w-full grid grid-cols-12 gap-8"
        onSubmit={handleFormSubmit}
      >
        <div className="col-span-8 flex flex-col justify-start gap-6 border rounded-2xl shadow-lg bg-slate-100 p-4 h-fit">
          <div className="flex flex-col justify-start gap-2 w-full max-w-[40rem]">
            <div className="flex justify-between">
              <label className="text-p text-sm font-semibold" htmlFor="email">
                Product Title :
              </label>
            </div>
            <AccountingInput
              type={"text"}
              name={"title"}
              id={"title"}
              placeholder={"Enter your product title ..."}
              onChange={handleInputChange}
              value={values.title}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 w-full">
            <div className="flex justify-between">
              <label className="text-p text-sm font-semibold" htmlFor="email">
                Product Description :
              </label>
            </div>
            <textarea
              className="accounting-input-div p-3 max-h-96 min-h-[10rem] h-20"
              type={"text"}
              name={"description"}
              id={"description"}
              placeholder={"Enter your product description ..."}
              onChange={handleInputChange}
              value={values.description}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex flex-col justify-start gap-2 w-full max-w-[15rem]">
            <div className="flex justify-between">
              <label className="text-p text-sm font-semibold" htmlFor="email">
                Product Price :
              </label>
            </div>
            <AccountingInput
              type={"number"}
              name={"price"}
              id={"price"}
              placeholder={"Enter your product price ..."}
              onChange={handleInputChange}
              value={values.price}
            />
          </div>
          <input
            className="bg-primary-700 text-white rounded-lg py-3 text-lg font-semibold mb-6 hover:bg-primary-900 duration-300 w-fit px-8 self-end"
            type="submit"
            value="Add Product"
          />
        </div>
        <div className="col-span-4 flex flex-col justify-start gap-6 border rounded-2xl shadow-lg bg-slate-100 p-4 h-fit">
          <img src="/images/default_product.png" alt="Product Image" />

          <input
            className="bg-primary-700 text-white rounded-lg py-3 text-lg font-semibold mb-6 hover:bg-primary-900 duration-300 px-10"
            type="file"
          />
        </div>
      </form>
    </div>
  );
}
export default AddProduct;
