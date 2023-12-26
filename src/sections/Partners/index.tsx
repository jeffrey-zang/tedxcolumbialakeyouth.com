import "./Partners.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { partnerData, platinumPartners } from "../../data/Partners.data";

const Partners = () => {
  return (
    <div
      className="typography mt-32 flex-col mx-auto scroll-m-28"
      id="partners"
    >
      <h2 className="text-center">Our Partners</h2>

      {platinumPartners.map((partner, index) => {
        return (
          <LazyLoadImage
            key={`platinumpartner-${index}`}
            src={partner.logo}
            alt="sponsor"
            className={`partner-logo min-w-0 p-4 ${partner.class}`}
            onClick={() => window.open(partner.href)}
            effect="blur"
            wrapperClassName={`mt-4 partner-logo w-3/4 md:!w-1/2 mx-auto !grid place-items-center`}
          />
        )
      })}

      <div className="flex justify-center flex-wrap gap-4 mt-8">
        {partnerData.map((partner, index) => {
          return (
            <LazyLoadImage
              key={`partner-${index}`}
              effect="blur"
              wrapperClassName="partner-logo"
              className={`partner-logo p-4 ${partner.class}`}
              src={partner.logo}
              alt="sponsor"
              onClick={() => window.open(partner.href)}
            />
          );
        })}
      </div>

      <p className="text-center mt-8">
        Want to support us? Check out our{" "}
        <a href="https://bank.hackclub.com/donations/start/tedxcolumbialakeyouth">
          donation page
        </a>{" "}
        or contact us{" "}
        <a href="mailto:business@tedxcolumbialakeyouth.com">here</a>.
      </p>
    </div>
  );
};

export default Partners;
