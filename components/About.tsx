const About = () => {
  return (
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen">
      <div class="w-full md:w-1/2 p-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          <span class="animate-pulse text-orange-500">About Us</span>
        </h2>
        <p class="text-lg md:text-2xl text-gray-600 mb-6">
          We are a leading IT company specializing in innovative software
          solutions. Our team of experts works tirelessly to deliver
          cutting-edge technology that meets the evolving needs of our clients.
        </p>
        <p class="text-lg md:text-2xl text-gray-600 mb-6">
          With a strong focus on customer satisfaction, we strive to build
          long-term relationships with our clients, providing them with tailored
          solutions that drive their business forward.
        </p>
        <p class="text-lg md:text-2xl text-gray-600 mb-6">
          Our expertise spans a wide range of industries, including finance,
          healthcare, and e-commerce. We are committed to staying at the
          forefront of technological advancements, ensuring our clients receive
          the best possible solutions.
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <div class="rounded-full overflow-hidden mb-8">
          <img
            class="w-full h-auto"
            src="https://picsum.photos/id/1/800/600"
            alt="About Us Image"
          />
        </div>
        <div
          class="hidden md:block w-full h-full bg-cover bg-center rounded-md"
          style="background-image: url(https://picsum.photos/id/1/800/600);"
        >
        </div>
      </div>
    </div>
  );
};

export default About;
