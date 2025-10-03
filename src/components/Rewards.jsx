import gold_medal from "../assets/images/medal_gold.png";
import silver_medal from "../assets/images/medal_silver.png";
import bronze_medal from "../assets/images/medal_bronze.png";

export default function Rewards() {
  const prizes = [
    { position: "2nd", amount: "N300,000", image: silver_medal },
    { position: "1st", amount: "N400,000", image: gold_medal },
    { position: "3rd", amount: "N150,000", image: bronze_medal },
  ];

  return (
    <div className="flex gap-3 md:gap-3 lg:gap-5 xl:gap-6 mt-20 w-full">
      {prizes.map((prize, index) => (
        <div
          key={prize.position}
          className={`text-center pb-4 border w-1/3  ${
            index === 1
              ? "border-[#903AFF] bg-[#903AFF]/10"
              : "border-[#D434FE] bg-[#D434FE]/10"
          } rounded-lg`}
        >
          <img
            src={prize.image}
            alt={`medal-${index + 1}`}
            className={`${
              index === 1
                ? "md:scale-[135%] mx-auto"
                : ""
            }`}
          />
          <p
            className="font-bold text-xs lg:text-4xl mt-8"
          >
            {prize.position}
          </p>
          <p className="text-xs lg:text-2xl font-semibold">Runner</p>
          <p
            className={`text-sm lg:text-[160%] leading-10 font-bold ${
              index === 1 ? "text-[#903AFF]" : "text-[#D434FE]"
            }`}
          >
            {prize.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
