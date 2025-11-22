import { createNetworkConfig } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui.js/client";
import {
  DEVNET_COUNTER_PACKAGE_ID,
  DEVNET_MARKETPLACE_OBJECT_ID,
  DEVNET_MARKETPLACE_PACKAGE_ID,
} from "./constants.ts";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        counterPackageId: DEVNET_COUNTER_PACKAGE_ID,
        marketplacePackageId: DEVNET_MARKETPLACE_PACKAGE_ID,
        marketplaceObjectId: DEVNET_MARKETPLACE_OBJECT_ID,
      },
    },
  });

export { networkConfig, useNetworkVariable, useNetworkVariables };

