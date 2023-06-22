import { AccountingInput, AccountingModal } from "../../components";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import {
  closeModal,
  openModal,
} from "../../context/features/modal/modal-slice";

const getFreshLoginModel = () => ({
  email: "",
  password: "",
});

const ForgotPassword = () => {
  const { values, handleInputChange } = useForm(getFreshLoginModel);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const login = Object.fromEntries(formData);
    console.log(login);
  };

  return (
    <AccountingModal>
      <div className="flex justify-center items-center gap-8 text-2xl mb-14">
        <button
          onClick={() => {
            dispatch(closeModal("forgot_password"));
            dispatch(openModal("login_modal"));
          }}
          className="font-extrabold border-b-4 border-primary-700 pb-4 hover:text-gray-600 duration-300"
        >
          Log In
        </button>
        <button
          onClick={() => {
            dispatch(closeModal("forgot_password"));
            dispatch(openModal("sing_up_modal"));
          }}
          className="font-semibold pb-4 hover:text-gray-600 duration-300"
        >
          Sing Up
        </button>
      </div>
      <div className="flex flex-col gap-2 mb-6 self-start">
        <HiOutlineArrowLeft
          size={30}
          onClick={() => {
            dispatch(closeModal("forgot_password"));
            dispatch(openModal("login_modal"));
          }}
        />
        <h2 className="text-3xl font-extrabold">Forgot your password?</h2>
        <p className="text-gray-600">
          Enter your email below, you will receive an email with instructions on
          how to reset your password in a few minutes. You can also set a new
          password if you’ve never set one before.
        </p>
      </div>
      <form
        className=" w-full flex flex-col justify-start gap-6"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-sm font-semibold" htmlFor="email">
              Enter your e-mail address
            </label>
          </div>
          <AccountingInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Enter your e-mail address..."}
            onChange={handleInputChange}
            value={values.email}
          />
        </div>
        <input
          className="bg-primary-700 text-white rounded-lg py-3 text-lg font-semibold mb-6 hover:bg-primary-900 duration-300"
          type="submit"
          value="Send Instructions"
        />
      </form>
    </AccountingModal>
  );
};
export default ForgotPassword;
