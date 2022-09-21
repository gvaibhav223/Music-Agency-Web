export const NetworkContextName = "NETWORK";
export const ACTIVE_NETWORK = 42;
// export const tokenContract = "0xE4861c8C1A80250e1e280F7F7bbf84736146b867";
// export const MarketplaceContract = "0xf5DE7F4Ee0C4063a1e6f139fEa2eB92c2D153653";
export const NftTokenAddress = "0x0a934784e6612B456BA5C409D8061c4224a605ED";
export const MarketPlaceAddress = "0x26c3d58c37796220DA2c3f4b08fC711d782132F7";
export const deadAddress = "0x0000000000000000000000000000000000000000";
export const marketplaceether = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export const RPC_URL =
  "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const baseUrl = "https://node-agency-dirk.mobiloitte.com/api/v1";
// const baseUrl = "http://172.16.1.172:1849/api/v1";
// const baseUrl = "http://172.16.1.132:1849/api/v1";

export const apiConfig = {
  connectWallet: `${baseUrl}/user/connectWallet`,
  getProfile: `${baseUrl}/user/getProfile`,
  addImage: `${baseUrl}/nft/addImage`,
  uploadNFT: `${baseUrl}/nft/uploadNFT`,
  addNFT: `${baseUrl}/nft/addNft`,
  placeOrder: `${baseUrl}/nft/placeOrder`,
  listNewOrder: `${baseUrl}/nft/placeOrderList`,
  orderDisplay: `${baseUrl}/nft/placeOrderListById`,
  sellOrder: `${baseUrl}/nft/sellOrder`,
  placeBid: `${baseUrl}/nft/placeBid`,
  viewNft: `${baseUrl}/nft/listNft`,
  viewNftId: `${baseUrl}/nft/viewNft`,
  bidList: `${baseUrl}/nft/bidList`,
  getProfile: `${baseUrl}/user/getProfile`,
  editProfile: `${baseUrl}/user/editProfile`,
  acceptBid: `${baseUrl}/nft/acceptBid`,
  cancelBid: `${baseUrl}/nft/rejectBid`,
  reject: `${baseUrl}/nft/cancelBid`,
  bidListParticular: `${baseUrl}/nft/bidListParticular`,
  withoutOrderList: `${baseUrl}/nft/nftWithoutOrderList`,
  orderListParticular: `${baseUrl}/nft/orderListParticular`,
  sellOrderList: `${baseUrl}/nft/sellOrderList`,
  mySoldNfts: `${baseUrl}/nft/mySoldNfts`,
  // /api/v1/nft/listAllCreatedNft
  listAllCreatedNft: `${baseUrl}/nft/listAllCreatedNft`,
  cancelOrder: `${baseUrl}/nft/cancelOrder`,
  createOrderReports: `${baseUrl}/user/createOrderReports`,
  viewNft: `${baseUrl}/nft/viewNft/`,
  viewNftTransaction: `${baseUrl}/admin/viewNftTransaction/`,
  staticContent: `${baseUrl}/static/staticPageList`,
};
