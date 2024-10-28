import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Plan",
      "price": 25,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "One free personal training session per month",
        "Access during off-peak hours"
      ]
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "price": 45,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Two free personal training sessions per month",
        "Access during all hours",
        "Group class access (Yoga, Zumba, etc.)"
      ]
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "price": 70,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room access with towel service",
        "Four free personal training sessions per month",
        "Access during all hours",
        "Unlimited group class access",
        "Pool and sauna access"
      ]
    },
    {
      "id": 4,
      "name": "Elite Plan",
      "price": 100,
      "currency": "USD",
      "features": [
        "24/7 gym access",
        "Personal locker",
        "Unlimited personal training sessions",
        "Access to VIP lounge and amenities",
        "Exclusive group classes (Spin, Pilates, etc.)",
        "Free guest passes",
        "Nutritional guidance and meal planning"
      ]
    }
  ]

  return (

    <div className="m-12">
        <h2 className="text-2xl font-bold my-10">Best prices in the Town</h2>
        <div className="grid grid-cols-3 gap-10">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
        </div>
    </div>
  );
};

export default PriceOptions;