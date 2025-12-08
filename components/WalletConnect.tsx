'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, ChevronDown, Copy, ExternalLink, LogOut, Check } from 'lucide-react';

const chainNames: Record<number, string> = {
  1: 'Ethereum',
  137: 'Polygon',
  11155111: 'Sepolia',
  1337: 'Localhost',
};

const chainColors: Record<number, string> = {
  1: 'bg-blue-500',
  137: 'bg-purple-500',
  11155111: 'bg-yellow-500',
  1337: 'bg-green-500',
};

// Simple wallet connection without wagmi (to avoid build issues)
export default function WalletConnect() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number>(1);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const checkConnectionCallback = useCallback(async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' }) as string[];
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' }) as string;
          setChainId(parseInt(chainIdHex, 16));
          fetchBalance(accounts[0]);
        }
      } catch (err) {
        console.error('Error checking connection:', err);
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    checkConnectionCallback();
  }, [checkConnectionCallback]);


  const fetchBalance = async (addr: string) => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const balanceHex = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [addr, 'latest'],
        }) as string;
        const balanceWei = parseInt(balanceHex, 16);
        const balanceEth = balanceWei / 1e18;
        setBalance(balanceEth.toFixed(4));
      } catch (err) {
        console.error('Error fetching balance:', err);
      }
    }
  };

  const connectWallet = useCallback(async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      setIsConnecting(true);
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        }) as string[];
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' }) as string;
          setChainId(parseInt(chainIdHex, 16));
          fetchBalance(accounts[0]);
        }
      } catch (err) {
        console.error('Error connecting wallet:', err);
      } finally {
        setIsConnecting(false);
      }
    } else {
      window.open('https://metamask.io/download/', '_blank');
    }
  }, []);

  const disconnectWallet = () => {
    setAddress(null);
    setBalance(null);
    setIsOpen(false);
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openExplorer = () => {
    if (address) {
      let explorerUrl = 'https://etherscan.io';
      if (chainId === 137) explorerUrl = 'https://polygonscan.com';
      else if (chainId === 11155111) explorerUrl = 'https://sepolia.etherscan.io';
      
      window.open(`${explorerUrl}/address/${address}`, '_blank');
    }
  };

  // Listen for account/chain changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const handleAccountsChanged = (...args: unknown[]) => {
        const accounts = args[0] as string[];
        if (accounts.length === 0) {
          setAddress(null);
          setBalance(null);
        } else {
          setAddress(accounts[0]);
          fetchBalance(accounts[0]);
        }
      };

      const handleChainChanged = (...args: unknown[]) => {
        const chainIdHex = args[0] as string;
        setChainId(parseInt(chainIdHex, 16));
        if (address) fetchBalance(address);
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum?.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, [address]);

  if (!mounted) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-800 border border-dark-700 text-dark-400 text-sm">
        <Wallet className="w-4 h-4" />
        Connect
      </button>
    );
  }

  if (address) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-800 border border-dark-700 hover:border-primary-500/50 transition-all"
        >
          <div className={`w-2 h-2 rounded-full ${chainColors[chainId] || 'bg-gray-500'}`} />
          <span className="text-white text-sm font-medium">{formatAddress(address)}</span>
          <ChevronDown className={`w-4 h-4 text-dark-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-72 p-4 rounded-xl bg-dark-800 border border-dark-700 shadow-xl z-50"
              >
                {/* Network Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${chainColors[chainId] || 'bg-gray-500'}`} />
                  <span className="text-dark-300 text-sm">{chainNames[chainId] || `Chain ${chainId}`}</span>
                </div>

                {/* Address */}
                <div className="p-3 rounded-lg bg-dark-900 mb-4">
                  <p className="text-dark-500 text-xs mb-1">Connected Address</p>
                  <p className="text-white font-mono text-sm">{formatAddress(address)}</p>
                </div>

                {/* Balance */}
                {balance && (
                  <div className="p-3 rounded-lg bg-dark-900 mb-4">
                    <p className="text-dark-500 text-xs mb-1">Balance</p>
                    <p className="text-white font-medium">
                      {balance} ETH
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={copyAddress}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 hover:text-white transition-all text-sm"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button
                    onClick={openExplorer}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 hover:text-white transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Explorer
                  </button>
                </div>

                {/* Disconnect */}
                <button
                  onClick={disconnectWallet}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  Disconnect
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      disabled={isConnecting}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white text-sm font-medium transition-all disabled:opacity-50"
    >
      <Wallet className="w-4 h-4" />
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}

// Add ethereum type to window
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, callback: (...args: unknown[]) => void) => void;
      removeListener: (event: string, callback: (...args: unknown[]) => void) => void;
    };
  }
}
