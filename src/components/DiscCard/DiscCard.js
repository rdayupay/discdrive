import Image from 'next/image';

const DiscCard = ({ disc }) => {
  const { name, discType, weight, speed, color, price, image } = disc;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <article className="flex flex-col bg-card rounded-md border lg:border-2 border-gray-400 overflow-hidden relative">
      <div className="relative w-full h-0 pb-[100%]">
        <Image
          src={image}
          alt="disc image"
          width={500}
          height={500}
          priority={true}
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10"></div>
      </div>
      <div className="p-2 ">
        <h2 className="text-l text-center lg:text-l font-bold bg-slate-300 ">
          {name.toUpperCase()}
        </h2>
        <p className="text-gray-700 lg:text-m mb-2">
          {capitalizeFirstLetter(discType)}
        </p>
        <dl className="grid grid-cols-2 gap-1">
          <div className="lg:col-span-2">
            <dt className="text-sm text-gray-600">Price</dt>
            <dd className="font-bold text-lg text-green-600">${price}</dd>
          </div>

          <div className="lg:col-span-1">
            <dt className="text-xs text-gray-600">Speed</dt>
            <dd className="font-semibold text-sm text-gray-900">{speed}</dd>
          </div>

          <div className="lg:col-span-1">
            <dt className="text-xs text-gray-600">Weight (g)</dt>
            <dd className="font-semibold text-sm text-gray-900">{weight}</dd>
          </div>

          <div className="lg:col-span-2">
            <dt className="text-xs text-gray-600">Color</dt>
            <dd className="font-semibold text-sm text-gray-900">
              {capitalizeFirstLetter(color)}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default DiscCard;
