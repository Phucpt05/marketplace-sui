import { useCurrentAccount } from "@mysten/dapp-kit";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components";
import { useGetNftDetails } from "../../hooks";
import { useBuyNft } from "../../hooks/useBuyNft";
import { useCancelListing } from "../../hooks/useCancelListing";
import { routeNames } from "../../routes";
import { priceDenom } from "../../helpers";
import cartIcon from "../../assets/buy-cart-icon.svg";
import trashIcon from "../../assets/trash-icon.svg";

export const NftDetails = () => {
  const { objectId } = useParams<{ objectId: string }>();
  const account = useCurrentAccount();
  const navigate = useNavigate();
  const { nft, isPending, error } = useGetNftDetails(objectId!);
  const buy = useBuyNft(() => {
    navigate(routeNames.home);
  });
  const cancelListing = useCancelListing(() => {
    navigate(routeNames.home);
  });

  if (isPending) {
    return <Loader />;
  }

  if (error || !nft) {
    return (
      <span className="text-lg font-bold mx-3">
        Could not fetch NFT details
      </span>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-6 pb-0 md:pb-6">
        <img
          src={nft.url}
          alt="NFT"
          className="w-full h-4/5 object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-6 flex flex-col">
        <div className="bg-zinc-900 rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold">{nft.name}</h2>
          <p className="text-md mt-1">{nft.description}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg shadow-md p-6 mb-4">
          <p className="text-sm">Current Price:</p>
          <h1 className="text-2xl font-bold mb-4">
            {priceDenom(nft.price).toFixed()} SUI ($
            {priceDenom(nft.price).multipliedBy(0.7).toFixed()})
          </h1>

          <div className="flex flex-col md:flex-row gap-x-2 gap-y-2 mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg grow md:w-2/6 flex flex-row items-center justify-center gap-x-2"
              onClick={() => buy(nft.id, nft.price, nft.type)}
            >
              <img src={cartIcon} className="h-5" />
              Buy Now
            </button>
            {nft.owner === account?.address && (
              <button
                className={`grow md:w-2/6 px-4 py-2 bg-zinc-800 border border-red-500 text-white rounded-lg flex flex-row items-center justify-center gap-x-2`}
                onClick={() => cancelListing(nft.id, nft.type)}
              >
                <img src={trashIcon} className="h-5" />
                Cancel listing
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
