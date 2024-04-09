import GridHome from "@/components/GridHome";

export default function Home() {
  return (
    <div className="grid xl:grid-cols-3 m-5 gap-4 md:grid-cols-2">

      {/* First row */}
      <GridHome title='Sweet Gifts' image="https://links.papareact.com/1dy" className="h-52 " />
      <GridHome title='Shop Electronics' image="https://t3.ftcdn.net/jpg/01/70/80/52/360_F_170805293_mP8dwQvg7ip4tFRyXNs7xhIs470dBArn.jpg" className="" />
      <GridHome title='Shop Gadgets' image="https://links.papareact.com/gs1" className="" />

      {/* Second row */}
      <GridHome title='Shop Wardrobe' image="https://hips.hearstapps.com/hmg-prod/images/best-of-bazaar-1640205941.jpg" className="h-40   " />
      <div className="grid grid-cols-2 gap-4">
      <GridHome title='Shop Toys' image="https://links.papareact.com/pj2" className="" />
      <GridHome title='for match' image="https://links.papareact.com/m8e" className="" />
      </div>
      <GridHome title='Shop Home' image="https://links.papareact.com/szu" className="" />

      {/* Third row */}
      <GridHome title='Shop Beauty' image="https://beautydealsbff.com/wp-content/uploads/2023/04/Credo-gwp.jpg" className="h-52 " />
      <GridHome title='Enjoy Free Shipping' image="https://i5.walmartimages.com/dfw/4ff9c6c9-8f23/k2-_2c1e04bd-258b-4034-9d7a-a20c5d579b72.v1.jpg?odnHeight=245&odnWidth=568&odnBg=&odnDynImageQuality=70" className="h-52" />
      <GridHome title='Flash Deals' image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7riusHjr4gpCxwTJGlT_fY8AHtL5u6HrCarJwBtHERWYzQzwBV6iHuxCqL5-rIi8MRwQ&usqp=CAU" className="xl:col-span-1 h-52 md:col-span-full" />

    </div>
  );
}
