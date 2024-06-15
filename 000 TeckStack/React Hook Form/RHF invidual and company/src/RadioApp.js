import { useForm } from "react-hook-form";

const RadioApp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));
  const tradeType = watch("tradeType");
  console.log(tradeType);

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-gray-200 h-80 rounded-lg mt-10 mx-4">
            {/* grid 1 for 1st row */}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-green-100 h-10">
                <div className="flex justify-center    ">Trade Type</div>
              </div>
              {/* deafult flex column */}
              {/* 2 div in flex column */}
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-5">
                <div className="bg-yellow-100  flex justify-center items-center  h-10 space-x-2 ">
                  {/* input and p in flex column*/}
                  <input
                    type="radio"
                    value="individual"
                    {...register("tradeType", {
                      required: "Trade type is required",
                    })}
                  />
                  <p>Individual</p>
                </div>
                <div className="bg-red-100 flex  justify-center  items-center  h-10 space-x-2">
                  <input
                    type="radio"
                    value="company"
                    {...register("tradeType", {
                      required: "Trade type is required",
                    })}
                  />
                  <p>Company</p>
                </div>
              </div>
            </div>
            {/* grid 1 for 1st row done */}

            {/* trade type error */}
            <div>
              {errors.tradeType && (
                <span className="text-red-400 text-sm">
                  {errors.tradeType.message}
                </span>
              )}
            </div>
            {/* grid 2 for 2nd row start */}

            {tradeType === "company" && (
              <div className="grid grid-cols-3 gap-5">
                <div className="bg-blue-100 h-10">
                  <div className="flex justify-center    ">Company</div>
                </div>
                <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                  <div className="bg-pink-100 flex items-center w-full h-12 ">
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-lg "
                      {...register("companyName", {
                        required: "Company name is required",
                      })}
                    />
                    {errors.companyName && (
                      <span className="text-red-400 text-sm">
                        {errors.companyName.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
            {/* grid 2 for 2nd row end */}

            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">First Name</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-lg"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-red-400 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Last Name</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-lg"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-red-400 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* button section */}
            <div className="grid grid-cols-3 gap-5 mt-5">
              <div className=" w-full h-12 bg-green-100">
                <div className="flex justify-end items-center h-12">.</div>
              </div>
              <div className=" col-span-2 flex space-x-8">
                <div className="flex items-center w-full h-12 ">
                  <input
                    type="submit"
                    value="Submit"
                    className="w-2/3 h-10 rounded-lg bg-red-500 text-white font-semibold  "
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default RadioApp;
