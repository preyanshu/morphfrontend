import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import {  morphSepolia} from '@reown/appkit/networks'
// import { Chain } from 'wagmi'

// Load env
export const projectId = "123456";

if (!projectId) {
  throw new Error('Project ID is not defined')
}
// Define your custom network

// Use either eduChainTestnet or your custom chain
export const network = morphSepolia// or [eduChainTestnet, pharosDevnet] if you want both

// Set up Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  networks: [network],
  projectId,
})

// Export Wagmi config
export const config = wagmiAdapter.wagmiConfig