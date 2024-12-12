import FeaturedProducts from "@/components/featuredProduct";
import Hero from "@/components/hero";
import LogoSection from "@/components/logoSection";
import ProductList from "@/components/productList";
import TopCategories from "@/components/topCategorie";

export default function Home() {
  return (
    <div>
      <Hero/>
      <LogoSection />
      <FeaturedProducts />
      <ProductList />
      <TopCategories />
      </div>
  );
}
