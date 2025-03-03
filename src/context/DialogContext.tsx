import { createContext, useState, useContext } from 'react';
import { DialogType } from '@/types/Dialog';
import { Dialog } from '@/components/Dialog';

type DialogContextType = {
  setDialog: (dialogProps: DialogType | null) => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dialogProps, setDialogProps] = useState<DialogType | null>(null);

  const setDialog = (dialogProps: DialogType | null) => {
    setDialogProps(dialogProps);
  };

  return (
    <DialogContext.Provider value={{ setDialog }}>
      {dialogProps && <Dialog {...dialogProps} />}
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }

  return context;
};
