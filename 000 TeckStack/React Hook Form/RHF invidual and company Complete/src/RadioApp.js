import { useForm, useFieldArray, Controller } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { format, sub, isWithinInterval } from "date-fns";
import { useState } from "react";

import {} from "react-hook-form";

import Select from "react-select";

const RadioApp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setValue,
    control,
  } = useForm({
    defaultValues: {
      age: 13,
      hobbiesitem: [{ hobbyname: "cricket" }],
      agreementitem: [{ agreementname: "" }],
      agreement2: [""],
      havecar: true,
    },
    mode: "onTouched",
  });

  // const { fields, append, remove } = useFieldArray({
  //   name: "hobbiesitem",
  //   control,
  // });

  const {
    fields: hobbiesfields,
    append: hobbiesappend,
    remove: hobbiesremove,
  } = useFieldArray({ control, name: "hobbiesitem" });
  const {
    fields: agreementfields,
    append: agreementappend,
    remove: agreementremove,
  } = useFieldArray({ control, name: "agreementitem" });

  const onSubmit = (data) => alert(JSON.stringify(data));
  const tradeType = watch("tradeType");
  console.log(tradeType);

  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  //    check password event
  const password = watch("password");

  var countries = [
    {
      country: "Afghanistan",
    },
    {
      country: "Albania",
    },
    {
      country: "Algeria",
    },
    {
      country: "American Samoa",
    },
  ];

  const departments = [
    { value: "Computer-Science", label: "Computer Science" },
    { value: "Physics", label: "Physics" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Mathematics", label: "Mathematics" },
  ];

  const minDate = sub(new Date(), {
    months: 2,
  });
  const maxDate = new Date();

  const fname = watch("firstName");

  const isValid = fname;

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-gray-200 h-196 rounded-lg mt-10 mx-4">
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

            {/* first name start*/}
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
            {/* last name start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Last Name</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <input
                    type="text"
                    disabled={!isValid}
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
            {/* email start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Email</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Age start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Age</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <input
                    type="number"
                    placeholder="Enter your age"
                    className="w-full rounded-lg"
                    {...register("age", {
                      required: "Age is required",
                      pattern: {
                        value: /^[1-9]+[0-9]*$/,

                        message: "please enter a valid age",
                      },
                      min: {
                        value: 10,
                        message: "Sorry age can't be below 10",
                      },
                      max: {
                        value: 30,
                        message: "sorry age can't be above 30 ",
                      },
                    })}
                  />
                  {errors.age && (
                    <span className="text-sm text-red-500">
                      {errors.age.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Gender start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Gender</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <select
                    className="w-38 rounded-lg"
                    {...register("gender", { required: "Gender is required" })}
                  >
                    <option value="">--Select Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                  {errors.gender && (
                    <span className="text-sm text-red-500">
                      {errors.gender.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Countries start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Country</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <select
                    className="w-38 rounded-lg"
                    {...register("country", {
                      required: "Country is required",
                    })}
                  >
                    <option value="">--Select Country--</option>
                    {countries.map((item) => {
                      return <option key={item.country}>{item.country}</option>;
                    })}
                  </select>
                  {errors.country && (
                    <span className="text-sm text-red-500">
                      {errors.country.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Date start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Date</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <input
                    type="date"
                    className="w-38 rounded-lg"
                    {...register("date", {
                      required: "Date is required",
                      validate: (cdate) =>
                        isWithinInterval(cdate, {
                          start: minDate,
                          end: maxDate,
                        }) || "not in interval",
                    })}
                  />
                  {errors.date && (
                    <span className="text-sm text-red-500">
                      {errors.date.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Department start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Department</div>
              </div>
              <div className="bg-blue-100   col-span-2 flex space-x-8">
                <div className="bg-yellow-100 flex-row items-center w-full mb-4  ">
                  <Controller
                    name="department"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select {...field} isMulti options={departments} />
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Hobbies start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Hobbies</div>
              </div>
              <div className="bg-blue-100   col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex-row items-center w-full  ">
                  {hobbiesfields.map((item, index) => {
                    return (
                      <div className="flex ">
                        <input
                          type="text"
                          placeholder="Enter your age"
                          className="w-full rounded-lg mb-2"
                          {...register(`hobbiesitem.${index}.hobbyname`, {
                            required: "Hobby is required",
                          })}
                        />
                        <button
                          type="button"
                          onClick={() => hobbiesremove(index)}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}

                  {errors.hobbiesitem && (
                    <span className="text-sm text-red-500">
                      {errors.hobbiesitem.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="h-8 bg-blue-100 w-28"
              onClick={() => hobbiesappend({ hobbyname: "" })}
            >
              Add
            </button>

            {/* agreement section */}
            <div>
              <div className="flex-row justify-start items-center space-x-3 mt-4">
                <input
                  type="checkbox"
                  value="yeshe"
                  className=""
                  {...register("havecar", {
                    required: "Agreement1 is required",
                  })}
                />
                <p>have car</p>
              </div>
              {errors.havecar && (
                <span className="text-sm text-red-500">
                  {errors.havecar.message}
                </span>
              )}
            </div>

            {/* can also add eye option in front to view and hide password  can useestate*/}
            {/* hide type->password
            show type->text */}

            {/* password start*/}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Password</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <input
                    type={passwordEye === false ? "password" : "text"}
                    placeholder="Enter your password"
                    className="w-full rounded-lg  "
                    {...register("password", {
                      required: "password is required",
                      minLength: {
                        value: 8,
                        message: "Minimum Required length is 8",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum Required length is 20",
                      },
                    })}
                  />

                  {errors.password && (
                    <span className="text-sm text-red-500">
                      {errors.password.message}
                    </span>
                  )}

                  {/* eye section */}
                  <div className="text-2xl  ">
                    {passwordEye === false ? (
                      <AiFillEyeInvisible onClick={handlePasswordClick} />
                    ) : (
                      <AiFillEye onClick={handlePasswordClick} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* confirm passw */}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-blue-100 h-10">
                <div className="flex justify-center    ">Confm Password</div>
              </div>
              <div className="bg-blue-100 h-10 col-span-2 flex space-x-8">
                <div className="bg-pink-100 flex items-center w-full h-12 ">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg"
                    {...register("confirmpassword", {
                      required: "confpassword is required",
                      minLength: {
                        value: 8,
                        message: "Minimum Required length is 8",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum Required length is 20",
                      },
                      validate: {
                        equalpassw: (cvalue) => {
                          const { password } = getValues();
                          return (
                            cvalue === password || "Passwords should match!"
                          );
                        },
                      },
                    })}
                  />

                  {errors.confirmpassword && (
                    <span className="text-sm text-red-500">
                      {errors.confirmpassword.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* agreement section */}
            <div>
              <div className="flex-row justify-start items-center space-x-3 mt-4">
                <input
                  type="checkbox"
                  value="yesheall"
                  className=""
                  {...register("agreementall", {
                    required: "Agreement is required",
                    validate: {
                      isall: (cvalue) => {
                        if (cvalue != null) {
                          console.log("xx");
                          setValue("agreement2", ["yeshe2", "yeshe3"]);
                        } else {
                          console.log("yy");
                          setValue("agreement2", [""]);
                        }
                      },
                    },
                  })}
                />
                <p>Agrement all</p>
              </div>
              {errors.agreementall && (
                <span className="text-sm text-red-500">
                  {errors.agreementall.message}
                </span>
              )}
            </div>

            {/* agreement section */}
            <div>
              <div className="flex-row justify-start items-center space-x-3 mt-4">
                <input
                  type="checkbox"
                  value="yeshe2"
                  className=""
                  {...register("agreement2", {
                    required: "Agreement2 is required",
                  })}
                />
                <p>I accept the Terms and Conditions2</p>
              </div>
              {errors.agreement2 && (
                <span className="text-sm text-red-500">
                  {errors.agreement2.message}
                </span>
              )}
            </div>

            {/* agreement section */}
            <div>
              <div className="flex-row justify-start items-center space-x-3 mt-4">
                <input
                  type="checkbox"
                  value="yeshe3"
                  className=""
                  {...register("agreement2", {
                    required: "Agreement3 is required",
                  })}
                />
                <p>I accept the Terms and Conditions3</p>
              </div>
              {errors.agreement3 && (
                <span className="text-sm text-red-500">
                  {errors.agreement3.message}
                </span>
              )}
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
