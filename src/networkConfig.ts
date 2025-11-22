import { createNetworkConfig } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui.js/client";
import {
  DEVNET_MARKETPLACE_OBJECT_ID,
  DEVNET_MARKETPLACE_PACKAGE_ID,
  MAINNET_MARKETPLACE_OBJECT_ID,
  MAINNET_MARKETPLACE_PACKAGE_ID,
} from "./constants.ts";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        marketplacePackageId: DEVNET_MARKETPLACE_PACKAGE_ID,
        marketplaceObjectId: DEVNET_MARKETPLACE_OBJECT_ID,
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        marketplacePackageId: MAINNET_MARKETPLACE_PACKAGE_ID,
        marketplaceObjectId: MAINNET_MARKETPLACE_OBJECT_ID,
      },
    },
  });

export { networkConfig, useNetworkVariable, useNetworkVariables };

