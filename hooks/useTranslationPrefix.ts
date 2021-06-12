import { useCallback } from 'react';
import { useTranslation } from 'next-i18next';

type UseTranslationPrefixReturnType = (
  postfix: string,
  variables?: Record<string, unknown>
) => string;

const useTranslationPrefix = (prefix: string): UseTranslationPrefixReturnType => {
  const { t } = useTranslation();

  return useCallback(
    (postfix: string, variables?: Record<string, unknown>) =>
      !variables ? t(`${prefix}.${postfix}`) : t(`${prefix}.${postfix}`, variables),
    [prefix, t]
  );
};

export default useTranslationPrefix;
