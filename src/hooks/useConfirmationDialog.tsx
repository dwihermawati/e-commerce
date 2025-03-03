import { useDialog } from '@/context/DialogContext';

export const useConfirmationDialog = () => {
  const { setDialog } = useDialog();

  const showConfirmationDialog = (
    message: string,
    onConfirm: () => void,
    onCancel: () => void
  ) => {
    setDialog({
      title: 'Confirm Action',
      message,
      onConfirm,
      onCancel,
      secondaryButtonTitle: 'Cancel',
      primaryButtonTitle: 'Confirm',
      onSelectPrimaryButton: onConfirm,
      onSelectSecondaryButton: onCancel,
    });
  };

  return showConfirmationDialog;
};
