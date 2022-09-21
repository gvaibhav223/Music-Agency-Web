import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";

import FeaturesNFT from "./FeaturesNFT";
import EndingNFT from "./EndingNFT";
import LatestArtwork from "./LatestArtwork";
import PopularNFT from "./PopularNFT";
import BestSeller from "./BestSeller";
import Explore from "./Explore";
function Bids(props) {
  return (
    <Page title="Music Agency">
      <Box>
        <Banner />
        <Explore />

        {/* <LatestArtwork /> */}
        <PopularNFT />
      </Box>
    </Page>
  );
}

export default Bids;
