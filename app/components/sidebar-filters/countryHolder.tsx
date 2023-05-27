import Image from "next/image";

const CountryHolder = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={"/uk-img.png"}
          alt="country flag"
          className="rounded"
          width={28}
          height={17}
          style={{ height: 17 }}
        />
        {/* <img src="/uk-img.png" alt="country flag" className="w-4 h-3 rounded" /> */}
        <p>United kingdom</p>
      </div>
      <div>
        <p className="font-light text-sm text-gray-400">44</p>
      </div>
    </div>
  );
};

export default CountryHolder;
