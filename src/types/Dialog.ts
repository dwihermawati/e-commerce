export type DialogType = {
  title: string;
  message: string;
  secondaryButtonTitle: string;
  primaryButtonTitle?: string;
  onSelectSecondaryButton: () => void;
  onSelectPrimaryButton?: () => void;
  isSubmitting?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};
