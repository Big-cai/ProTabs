import { useEffect,useState } from "react";
import Image from "next/image";
import ProTabs from "@/components/ProTabs";

function Index() {
const [activeTab,setActiveTab] = useState(0)

  const dataTest = [
    { title: '手机', id: 1 },
    { title: '电脑', id: 2 },
    { title: '平板', id: 3 },
    { title: '智慧屏', id: 4 },
    { title: '穿戴', id: 5 },
    { title: '耳机音箱', id: 6 },
    { title: '全屋智能', id: 7 },
    { title: '路由器', id: 8 },
    { title: 'HarmonyOS 4', id: 9 }
  ]

  const allTabs = [
    {
      title: "Top Categories",
      id: 1,
      chilren: [
        { url: "/image/11.jpg", title: "Custom Wheels" },
        { url: "/image/22.jpg", title: "Headlihts" },
        { url: "/image/33.jpg", title: "Tires" },
        { url: "/image/44.jpg", title: "Exhaust" },
        { url: "/image/55.jpg", title: "Running Boards" },
        { url: "/image/66.jpg", title: "Suspension" },
        { url: "/image/77.jpg", title: "Floor Mats" },
        { url: "/image/88.jpg", title: "Brakes" },
        { url: "/image/99.jpg", title: "Seat Covers" },
        { url: "/image/110.jpg", title: "Bed Accessories" },
        { url: "/image/120.jpg", title: "Costom Grilles" },
        { url: "/image/130.jpg", title: "Tail Lights" },
        { url: "/image/140.jpg", title: "Off-Road Bumpers" },
        { url: "/image/150.jpg", title: "Body Kits" },
        { url: "/image/160.jpg", title: "Air Intake" },
        { url: "/image/160.jpg", title: "Chrome Trim" },
        { url: "/image/170.jpg", title: "Custom Hoods" },
        { url: "/image/180.jpg", title: "LED Lights" },
        { url: "/image/190.jpg", title: "Car Covers" },
        { url: "/image/210.jpg", title: "Towing & Hitches" },
      ],
    },
    {
      title: "Parts",
      id: 2,
      chilren: [
        { url: "/image/Parts_Suspension.jpg", title: "Suspension" },
        { url: "/image/Parts_Brakes.jpg", title: "Brakes" },
        { url: "/image/Parts_Exhaust.jpg", title: "Exhaust" },
        { url: "/image/Parts_engine.jpg", title: "Engine" },
        { url: "/image/Parts_airIntakes.jpg", title: "Suspension" },
        { url: "/image/Parts_airConditioning.jpg", title: "AirConditioning" },
        { url: "/image/Parts_driveline.jpg", title: "Driveline" },

        { url: "/image/Parts_cooling.jpg", title: "Engine Cooling" },
        { url: "/image/Parts_steering.jpg", title: "Steering" },
        { url: "/image/Parts_fuelDelivery_.jpg", title: "fuel Delivery" },
        { url: "/image/Parts_transmission.jpg", title: "Transmission" },
        { url: "/image/Parts_ignition.jpg", title: "Ignition" },

        {
          url: "/image/Parts_chargingStarting.jpg",
          title: "Starting & Charging",
        },
        { url: "/image/Parts_emission.jpg", title: "Emission" },
        { url: "/image/Parts_performance.jpg", title: "Performance Chips" },
        { url: "/image/Parts_replacement.jpg", title: "Replacement" },
        { url: "/image/Parts_wiper.jpg", title: "Wiperension" },
        { url: "/image/Parts_oils.jpg", title: "Oils,Fluids,Lubricants" },
        { url: "/image/Parts_power.jpg", title: "Power Adders" },
        { url: "/image/Parts_auto.jpg", title: "Repair Manuals" },
        { url: "/image/Parts_racing.jpg", title: "Racing Gear" },
      ],
    },
    { title: "Wheels & Tires", id: 3, chilren: [] },
    { title: "Exterior", id: 4, chilren: [] },
    { title: "Ligging", id: 5, chilren: [] },
    { title: "Body", id: 6, chilren: [] },
    { title: "Interior", id: 7, chilren: [] },
    { title: "Audio", id: 8, chilren: [] },
    { title: "Automotive Tools", id: 9, chilren: [] },
  ];

  const list = [
      [
          {url: '/image/11.jpg',title:'Custom Wheels'},
          {url: '/image/22.jpg',title:'Headlihts'},
          {url: '/image/33.jpg',title:'Tires'},
          {url: '/image/44.jpg',title:'Exhaust'},
          {url: '/image/55.jpg',title:'Running Boards'},
          {url: '/image/66.jpg',title:'Suspension'},
          {url: '/image/77.jpg',title:'Floor Mats'},
          {url: '/image/88.jpg',title:'Brakes'},
          {url: '/image/99.jpg',title:'Seat Covers'},
          {url: '/image/110.jpg',title:'Bed Accessories'},
          {url: '/image/120.jpg',title: 'Costom Grilles'},
          {url: '/image/130.jpg',title:'Tail Lights'},
          {url: '/image/140.jpg',title:'Off-Road Bumpers'},
          {url: '/image/150.jpg',title:'Body Kits'},
          {url: '/image/160.jpg',title:'Air Intake'},
          {url: '/image/160.jpg',title:'Chrome Trim'},
          {url: '/image/170.jpg',title:'Custom Hoods'},
          {url: '/image/180.jpg',title:'LED Lights'},
          {url: '/image/190.jpg',title:'Car Covers'},
          {url: '/image/210.jpg',title:'Towing & Hitches'},
      ],
      [
          {url: '/image/Parts_Suspension.jpg',title:'Suspension'},
          {url: '/image/Parts_Brakes.jpg',title:'Brakes'},
          {url: '/image/Parts_Exhaust.jpg',title:'Exhaust'},
          {url: '/image/Parts_engine.jpg',title:'Engine'},
          {url: '/image/Parts_airIntakes.jpg',title:'Suspension'},
          {url: '/image/Parts_airConditioning.jpg',title:'AirConditioning'},
          {url: '/image/Parts_driveline.jpg',title:'Driveline'},
      
          {url: '/image/Parts_cooling.jpg',title:'Engine Cooling'},
          {url: '/image/Parts_steering.jpg',title:'Steering'},
          {url: '/image/Parts_fuelDelivery_.jpg',title:'fuel Delivery'},
          {url: '/image/Parts_transmission.jpg',title:'Transmission'},
          {url: '/image/Parts_ignition.jpg',title:'Ignition'},
      
          {url: '/image/Parts_chargingStarting.jpg',title:'Starting & Charging'},
          {url: '/image/Parts_emission.jpg',title:'Emission'},
          {url: '/image/Parts_performance.jpg',title:'Performance Chips'},
          {url: '/image/Parts_replacement.jpg',title:'Replacement'},
          {url: '/image/Parts_wiper.jpg',title:'Wiperension'},
          {url: '/image/Parts_oils.jpg',title:'Oils,Fluids,Lubricants'},
          {url: '/image/Parts_power.jpg',title:'Power Adders'},
          {url: '/image/Parts_auto.jpg',title:'Repair Manuals'},
          {url: '/image/Parts_racing.jpg',title:'Racing Gear'},
        ]
  ]



  return (
    <main className="h-screen">

      <div className="max-w-[1300px] mx-auto">
        <ProTabs
          className="flex px-3 mb-5 leading-[3] border-b border-[#d8d8d8] overflow-x-auto"
          tabs={allTabs}
          page={activeTab}
          height={100}
          onTabClick={(tab: any, index: number) => {
            setActiveTab(index);
          }}
        >
          {allTabs.map((item, index) => {
            if (item.chilren.length > 0) {
              if (index === activeTab) {
                return (
                  <ul className=" grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 justify-items-center">
                    {item.chilren.map((tab, id) => (
                      <li key={id} className="my-2 mx-1">
                        <Image src={tab.url} alt="" width={170} height={110} />
                        <p className="text-center pt-5 pb-5">{tab.title}</p>
                      </li>
                    ))}
                  </ul>
                );
              }
            } else {
              if (index === activeTab) {
                return <ul className="grid  justify-items-center place-content-center max-h-[900px]">空</ul>;
              }
            }
          })}
        </ProTabs>
      </div>
    </main>
  );
}

export default Index;
