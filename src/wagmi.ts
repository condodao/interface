import { createConfig, http } from "wagmi";
import { scrollSepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [scrollSepolia],
  transports: {
    [scrollSepolia.id]: http(),
  },
});
