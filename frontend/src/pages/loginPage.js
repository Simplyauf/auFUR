export const LoginPage = () => {
  return (
    <section class="mt-16 flex justify-center items-center max-w-[340px] text-base  w-[92%] mx-auto">
      <div class="flex flex-col gap-4 w-[100%] ">
        <h1 class="text-4xl font-bold text-center font-RobotoCondensed">Welcome back</h1>
        <div class="login-input-container mt-4 border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
          <input
            class="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] login-input bg-transparent"
            type="email"
            placeholder=" "
            name=""
            id=""
          />
          <label for="" class="absolute text-[18px] top-[0.7rem] left-4 z-[-1]">
            Email address
          </label>
        </div>
        <div class="login-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
          <input
            class="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] login-input bg-transparent"
            type="password"
            placeholder=" "
            name=""
            id=""
          />
          <label for="" class="text-[18px] absolute top-[0.7rem] left-4 z-[-1]">
            Password
          </label>
          <svg class="w-6 h-6 absolute top-[0.7em] right-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            {" "}
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
          </svg>
        </div>
        <div class="flex justify-between items-center mt-1">
          <div class="flex gap-2 items-center">
            <input class="border-[1px] w-5 h-5" type="checkbox" name="" id="" />
            <span>Remember me</span>
          </div>
          <span class="text-primaryColor">Forgot Password?</span>
        </div>
        <button
          class="h-[56px] mt-3 bg-primaryColor w-[100%] rounded border-transparent text-white text-[18px] font-medium"
          type="submit"
        >
          Register
        </button>
        <span class=" text-center">
          Dont have an account? <span class="text-primaryColor">Register here</span>
        </span>
      </div>
    </section>
  );
};
