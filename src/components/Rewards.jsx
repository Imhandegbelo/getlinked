import gold_medal from "../assets/medal_gold.png";
import silver_medal from "../assets/medal_silver.png";
import bronze_medal from "../assets/medal_bronze.png";

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
              ? "h-36 lg:h-[15rem] xl:h-[19rem] border-[#903AFF] bg-[#903AFF]/10"
              : "h-36 lg:h-[14rem] xl:h-[18rem] border-[#D434FE] bg-[#D434FE]/10"
          } rounded-lg lg:px- xl:px-6 relative pt-[5rem]`}
        >
          <img
            src={prize.image}
            alt={`medal-${index + 1}`}
            className={`absolute  ${
              index === 1
                ? "max-w-[7rem] lg:max-w-[12rem] xl:max-w-[16rem] -left-2 lg:-left-8 -top-[40%]"
                : "-top-[30%] lg:left-1"
            }`}
          />
          <p
            className={`font-bold text-xs lg:text-4xl ${
              index === 1 ? "lg:mt-9 xl:mt-24" : "lg:mt-8 xl:mt-20"
            }`}
          >
            {prize.position}
          </p>
          <p className="text-xs lg:text-2xl font-semibold">Runner</p>
          <p
            className={`text-sm lg:text-2xl xl:text-[2rem] font-bold ${
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
