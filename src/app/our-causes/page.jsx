import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseInner from "@/components/CauseInner";
import CauseSliderThree from "@/components/CauseSliderThree";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Al Zohra Welfare Association",
  description: "Al Zohra Welfare Association",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* TopBarOne */}
        <TopBarOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Our Causes' />

        {/* CauseInner */}
        <CauseInner />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* CauseSliderThree */}
        <CauseSliderThree />

        {/* ContactOne */}
        <ContactOne />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
