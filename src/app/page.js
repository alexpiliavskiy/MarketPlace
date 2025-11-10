import {Box} from "@mui/material";

import Slider from "@/components/SliderComponent/Slider";
import CategorySection from "@/components/CategorySection/CategorySection";
import ShopItemSection from "@/components/ShopItemSection/ShopItemSection";
import ShopByCategorySection from "@/components/ShopByCategory/ShopByCategorySection";
import NewSeasonSection from "@/components/NewSeasonSection/NewSeasonSection";
import LatestProductSection from "@/components/LatestProductSection/LatestProductSection";
import LatestNewsSection from "@/components/LatestNewsSection/LatestNewsSection";
import BrandSectionAbout from "@/components/BrandSectionAbout/BrandSectionAbout";
import styles from "@/app/globals.scss";

export const metadata = {
    title: "My MarketPlace | Home",
    description: "Discover stylish and trendy fashion at MyThing! Find the perfect outfit for any occasion and create your unique look today.",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    themeColor: "#ffffff",
    openGraph: {
        title: "My Marketplace",
        description: "Discover stylish and trendy fashion at MyThing! Find the perfect outfit for any occasion and create your unique look today.",
        url: "https://example.com",
        type: "website",
        images: [
            {
                url: "/back3.jpg",
                width: 1200,
                height: 630,
                alt: "Website preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "My Marketplace | Home",
        description: "My Marketplace is your go-to store for trendy and stylish clothing. Explore our latest collections and refresh your wardrobe today!",
        images: ["/back3.jpg"],
    },
};

export default function Home() {
  return (
      <Box className={styles.container}>
          <Slider />
          <CategorySection />
          <ShopItemSection />
          <ShopByCategorySection />
          <NewSeasonSection />
          <LatestProductSection />
          <LatestNewsSection />
          <BrandSectionAbout />
      </Box>
  );
}
