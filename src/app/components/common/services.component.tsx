export default function ServicesComponent(props: { services: any[] }) {
  return (
    <section className="my-20 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 mamnun-container">
        {props.services?.map((service: any) => (
          <div
            key={service.id}
            className="flex flex-col sm:flex-row gap-6 items-center sm:items-start"
          >
            {/* Image Section */}
            <div className="w-full sm:w-60 flex-shrink-0">
              <img
                className="w-full sm:w-60 h-60 object-cover rounded-lg shadow-md"
                src={service.imageUrl}
                alt="service image"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 border-b border-gray-300 pb-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>

              {/* Uncomment if needed */}
              {/* <button className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition self-start sm:self-end mt-4 sm:mt-0">
                  Get a Quote
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
