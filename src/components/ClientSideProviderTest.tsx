"use client"

import { ReactNode } from 'react';

interface ClientSideProviderProps {
  children: ReactNode;
}

const ClientSideProviderTest = ({ children }: ClientSideProviderProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ClientSideProviderTest