import iaqIcon from '../../images/new_product/iaq_sensor.png';
import platformIcon from '../../images/new_product/temi_platform.png';
import v3Icon from '../../images/new_product/temi_v3.png';
import goProIcon from '../../images/new_product/temi_go_pro.png';
import goIcon from '../../images/new_product/temi_go.png';

export const newProductsData = [
    {
    title: "temi V3",
    description: 'A premium designed, video-oriented, autonomous personal AI assistant robot. temi V3 can recognise and follow when requested, save preset locations, and navigate flawlessly around your home and office while connecting you to your friends, family and favorite web services.',
    imageSrc: v3Icon,
    links: [
      {
        label: "temi V3 Specs (PDF)",
        url: "/pdfs/temi V3 Specs.pdf",
      },
    ],
  },
  {
    title: "temi GO",
    description: 'The perfect solution for food, drinks and open tray running. Deliver food, drinks or anything you wish in restaurants, food courts, offices, retail and more. Autonomous point to point delivery system, will take the items from point A to B flawlessly and continue to the next task. Fully controlled by on screen commands, voice and temi center platform.',
    imageSrc: goIcon,
    links: [
      {
        label: "temi GO Specs (PDF)",
        url: "/pdfs/temi GO Specs.pdf",
      },
    ],
  },
  {
    title: "temi GO PRO",
    description: 'The advanced quad-door version of temi GO. The perfect solution for cross-floor delivery. Deliver food, drinks or anything you wish in restaurants, food courts, offices, retail and more. Quad-door design with seperate controlled electric doors for easy access and removable partitions for customizable storage. Autonomous point to point delivery system, will take the items from point A to B flawlessly and continue to the next task. Fully controlled by on screen commands, voice and temi center platform.',
    imageSrc: goProIcon,
    links: [
      {
        label: "temi GO PRO Specs (PDF)",
        url: "/pdfs/temi GO PRO Specs.pdf",
      },
    ],
  },
  {
    title: "temi PLATFORM",
    description: 'The world’s leading robotic platform for custom solutions. Includes full autonomous navigation abilities, a customizable system with full SDK. Easily connect and integrate any custom body or device you wish to temi platform and have it work for you autonomously. Great for companies looking to give their existing solution a pair of wheels and eyes for navigation or for industrial and operational facilities.',
    imageSrc: platformIcon,
    links: [
      {
        label: "temi PLATFORM Specs (PDF)",
        url: "/pdfs/temi PLATFORM Specs.pdf",
      },
    ],
  },
  {
    title: "KukiSense Indoor Air Quality (IAQ) Sensor",
    description:
      "The KukiSense IAQ Sensor monitors indoor air quality in real time and can be used independently or fully integrated with temi robots for autonomous air quality monitoring across spaces of 10,000 sqm and beyond",
    imageSrc: iaqIcon,
    links: [
      {
        label: "IAQ Sensor Brochure (PDF)",
        url: "/pdfs/Kuki Brochure.pdf",
      },
      {
        label: "More Information (PDF)",
        url: "/pdfs/The_Building_Sensory_Nervous_System.pdf",
      },
    ],
  },
  
];
