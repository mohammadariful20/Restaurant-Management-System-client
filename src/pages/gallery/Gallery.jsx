import { useLoaderData } from "react-router-dom";
import GalaryCard from "./Gallery/GalaryCard";
import BannerCommon from "../../components/BannerCommon";
import ReservationBanner from "./Gallery/ReservationBanner";
import Feature from "./Gallery/Feature";


export default function Gallery() {
  const allFoods = useLoaderData()
  return (
    <div>
      <BannerCommon location="Gallery"></BannerCommon>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {
          allFoods.map(food => <GalaryCard key={food._id} food={food}></GalaryCard>)
        }
      </div>
      <div className="flex justify-center my-20 w-full">
          <button className="border-2 border-[#E1B168] text-[#E1B168] px-8 py-4">View Menu</button>
        </div>
      <ReservationBanner />
      <Feature />
    </div>
  )
}
