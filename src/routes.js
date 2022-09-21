import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },

  {
    exact: true,
    path: "/my-collection",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Collection/Collection")),
  },
  {
    exact: true,
    path: "/disclaimer",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Desclaimer")),
  },
  {
    exact: true,
    path: "/manage-collection",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Collection/ManageCollection")
    ),
  },
  {
    exact: true,
    path: "/my-nft",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MyNFT/MyNFT")),
  },
  {
    exact: true,
    path: "/manage-nft",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MyNFT/ManageNFT")),
  },
  {
    exact: true,
    path: "/about-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/About/AboutUs")),
  },
  {
    exact: true,
    path: "/wallet",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Wallet/Wallet")),
  },
  {
    exact: true,
    path: "/terms-conditions",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/TermsConditions")),
  },
  {
    exact: true,
    path: "/privacy-policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/PrivacyPolicy")),
  },
  {
    exact: true,
    path: "/cookies-policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/CookiesPolicy")),
  },
  {
    exact: true,
    path: "/legal-policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/LegalNotice")),
  },
  {
    exact: true,
    path: "/marketplace",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MarketPlace")),
  },

  {
    exact: true,
    path: "/help-desk-center",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/FAQ")),
  },
  {
    exact: true,
    path: "/nft-offer",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MyNFT/NftOffer")),
  },
  {
    exact: true,
    path: "/my-auction",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Auction/MyAuction")),
  },
  {
    exact: true,
    path: "/account-review",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/AccountReview/AccountReview")
    ),
  },
  {
    exact: true,
    path: "/favourites",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Favourites/Favourites")),
  },
  {
    exact: true,
    path: "/nft",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/NFT/NFT")),
  },

  {
    exact: true,
    path: "/nft-details",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/NftDetails")),
  },
  {
    exact: true,
    path: "/view-nft",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/NftDetails/ViewNft")),
  },
  {
    exact: true,
    path: "/nft-search",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Search")),
  },

  {
    exact: true,
    path: "/user",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UsersView/UsersView")),
  },
  {
    exact: true,
    path: "/collection",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Collection/CollectionView")),
  },
  {
    exact: true,
    path: "/collectibles",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Collectibles/Collect")),
  },
  {
    exact: true,
    path: "/profile",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Profile/Profile")),
  },
  {
    exact: true,
    path: "/edit-profile",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Profile/Editprofile")),
  },

  {
    exact: true,
    path: "/resume-creation",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Create-NFT/ResumeCreation")),
  },
  {
    exact: true,
    path: "/create",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Create-NFT/Create")),
  },
  {
    exact: true,
    path: "/create-collection",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Collection/CreateCollection")
    ),
  },
  {
    exact: true,
    path: "/create-nft",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Create-NFT/CreateNFT")),
  },
  {
    exact: true,
    path: "/select-collection",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Create-NFT/SelectCollection")
    ),
  },
  {
    exact: true,
    path: "/nft-details/orders",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/NftDetails/indexOrders")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },

  {
    component: () => <Redirect to="/404" />,
  },
];
