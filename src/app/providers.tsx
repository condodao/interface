"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState, type ReactNode } from "react";
import { WagmiProvider } from "wagmi";

import { config } from "@/wagmi";

type Props = {
  children: ReactNode;
};

interface NavbarContextProps {
  isMainnet: boolean;
  setIsMainnet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = createContext<NavbarContextProps | undefined>(
  undefined
);

export function Providers({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());
  const [isMainnet, setIsMainnet] = useState<boolean>(false);

  return (
    <WagmiProvider config={config as any}>
      <QueryClientProvider client={queryClient}>
        <NavbarContext.Provider value={{ isMainnet, setIsMainnet }}>
          {children}
        </NavbarContext.Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
