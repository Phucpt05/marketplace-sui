# Deploy NFT Marketplace Smart Contract

## Steps to get DEVNET_MARKETPLACE_OBJECT_ID

### 1. Build the package
```bash
cd move/nft_marketplace
sui move build
```

### 2. Publish the package to devnet
```bash
sui client publish --gas-budget 10000000
```

### 3. Find the MarketplaceInit event
After publishing, look for the `MarketplaceInit` event in the transaction output. The event contains:
```json
{
  "objectId": "0x...",
  "objectType": "0x...::nft_marketplace::MarketplaceInit"
}
```

### 4. Extract the object_id from the event
The `object_id` field in the `MarketplaceInit` event is your `DEVNET_MARKETPLACE_OBJECT_ID`.

### 5. Update constants.ts
Update the `DEVNET_MARKETPLACE_OBJECT_ID` in `src/constants.ts` with the extracted object ID.

## Alternative Method: Using Transaction Explorer

1. After publishing, copy the transaction digest from the output
2. Open the transaction in Sui Explorer (https://explorer.devnet.sui.io/tx/[DIGEST])
3. Look for the `MarketplaceInit` event in the Events section
4. Copy the `object_id` from that event

## Important Notes

- The `init` function automatically creates and transfers the Marketplace object to the publisher
- The `MarketplaceInit` event is emitted to help you track the created marketplace object
- Make sure you have enough SUI in your devnet wallet for gas fees
- The object ID will be different each time you publish the contract