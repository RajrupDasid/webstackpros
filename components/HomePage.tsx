const HomePage = () => {
  return (
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen">
      <div class="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="./heros2.png"
          alt="home-page-image"
          class="w-full md:w-[500px] h-auto object-cover rounded-t-lg md:rounded-none"
        />
      </div>
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
          <span class="text-orange-500">Welcome</span> to Webstackpros!
        </h1>
        <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 px-4 md:p-0">
          Welcome to our digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, our
          portfolio showcases a diverse collection of projects that reflect our
          commitment to excellence.
        </p>
        <button
          class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded md:text-lg"
          type="button"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
