import { useTranslation } from 'next-i18next';

type UseTranslationPrefixReturnType = (
  postfix: string,
  variables?: Record<string, unknown>
) => string;

const useTranslationPrefix = (prefix: string): UseTranslationPrefixReturnType => {
  const { t } = useTranslation();

  return (postfix: string, variables?: Record<string, unknown>) =>
    !variables ? t(`${prefix}.${postfix}`) : t(`${prefix}.${postfix}`, variables);
};

export default useTranslationPrefix;
