import React, { useState, createContext, ReactNode } from 'react';

import { ConfirmDialogOpts } from 'types';

import { ConfirmDialog } from './ConfirmDialog';

export const ConfirmContext = createContext((opts: ConfirmDialogOpts) => {});

type Props = {
  children: ReactNode;
};

export const ConfirmContextProvider = ({ children }: Props) => {
  const [dialog, setDialog] = useState<ConfirmDialogOpts | null>();
  const [isOpen, setIsOpen] = useState(false);

  const confirm = (opts: ConfirmDialogOpts) => {
    setDialog(opts);
    setIsOpen(true);
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {dialog && (
        <ConfirmDialog
          open={isOpen}
          label={dialog.label}
          subtitle={dialog.subtitle}
          intent={dialog.intent}
          dismissText={dialog.dismissText}
          confirmText={dialog.confirmText}
          dismissAction={() => {
            setIsOpen(false);
            dialog.onConfirm(false);
          }}
          confirmAction={() => {
            setIsOpen(false);
            dialog.onConfirm(true);
          }}
        />
      )}
    </ConfirmContext.Provider>
  );
};
