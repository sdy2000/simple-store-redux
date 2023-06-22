import { useDispatch } from "react-redux";
import { AccountingInput, AccountingModal } from "../../components";
import { useForm } from "../../hooks";
import {
  closeModal,
  openModal,
} from "../../context/features/modal/modal-slice";

const getFreshLoginModel = () => ({
  email: "",
  password: "",
});

const Login = () => {
  const { values, handleInputChange } = useForm(getFreshLoginModel);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const login = Object.fromEntries(formData);
    console.log(login);
  };

  //
  //
  // TODO : Add Validation for input
  //
  //

  return (
    <AccountingModal>
      <div className="flex justify-center items-center gap-8 text-2xl mb-14">
        <button className="font-extrabold border-b-4 border-primary-700 pb-4 hover:text-gray-600 duration-300">
          Log In
        </button>
        <button
          onClick={() => {
            dispatch(closeModal("login_modal"));
            dispatch(openModal("sing_up_modal"));
          }}
          className="font-semibold pb-4 hover:text-gray-600 duration-300"
        >
          Sing Up
        </button>
      </div>
      <form
        className="w-full flex flex-col justify-start gap-6"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-p text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
          </div>
          <AccountingInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Enter your email address..."}
            onChange={handleInputChange}
            value={values.email}
          />
        </div>
        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-p text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <button
              onClick={() => {
                dispatch(closeModal("login_modal"));
                dispatch(openModal("forgot_password"));
              }}
              type="button"
              className="font-semibold hover:text-primary-700 duration-300"
            >
              Forgot password?
            </button>
          </div>
          <AccountingInput
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Enter your password..."}
            onChange={handleInputChange}
            value={values.password}
            hasIcon={true}
          />
        </div>
        <input
          className="bg-primary-700 text-white rounded-lg py-3 text-lg font-semibold mb-6 hover:bg-primary-900 duration-300"
          type="submit"
          value="Log In"
        />
      </form>
    </AccountingModal>
  );
};
export default Login;
