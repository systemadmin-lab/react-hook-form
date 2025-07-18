import { useForm } from "react-hook-form";
import Field from "../Components/Field";
import FieldSet from "../Components/FieldSet";

const LogInForm = () => {
  //we are importing hooks from react hook from

  const { register, handleSubmit } = useForm();
  const submitfrom = (f) => {
    console.log(f);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitfrom)}>
        <FieldSet label="Enter Your LogIn details">
          <Field label="Email">
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your email adress"
            />
          </Field>

          <Field label="Password">
            <input
              {...register("password")}
              type="password"
              name="password"
              id="Enter Password"
              placeholder="Enter Password"
            />
          </Field>
          <Field>
            <button className="text-md text-white text-md cursor-pointer p-1 rounded-lg m-auto bt-purple-500 bg-black">
              LogIn
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default LogInForm;
