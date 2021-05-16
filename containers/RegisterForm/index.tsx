import { memo } from 'react';
import { Formik, Form } from 'formik';

import InputText from 'components/InputText';
import Button from 'components/Button';
import Select, { OptionType } from 'components/Select';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { UserPositions } from 'types/enums';
import { validateRegister } from 'utils/validation';
import { UserType } from 'types/interfaces';

type Props = {
  handleSubmit: (values: RegisterFormTypes) => void;
};

export type RegisterFormTypes = Pick<UserType, 'username' | 'email' | 'password' | 'position'> & {
  repassword: string;
};

const RegisterForm: React.FC<Props> = ({ handleSubmit }) => {
  const t = useTranslationPrefix('Auth');
  const tg = useTranslationPrefix('General');

  const initialValues: RegisterFormTypes = {
    username: '',
    password: '',
    repassword: '',
    email: '',
  };

  const positionOptions: OptionType[] = Object.values(UserPositions).map((position) => ({
    value: position,
    name: tg(position),
  }));

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validateRegister}
      enableReinitialize
    >
      {({ errors, isSubmitting, isValid, dirty, touched }) => (
        <Form>
          <InputText
            label={t('email')}
            name="email"
            type="email"
            placeholder={t('email')}
            error={touched.email && errors.email}
          />
          <InputText
            label={t('username')}
            name="username"
            type="text"
            placeholder={t('username')}
            error={touched.username && errors.username}
          />
          <InputText
            label={t('password')}
            name="password"
            type="password"
            placeholder={t('password')}
            error={touched.password && errors.password}
          />
          <InputText
            label={t('retype_password')}
            name="repassword"
            type="password"
            placeholder={t('retype_password')}
            error={touched.repassword && errors.repassword}
          />
          <Select name="position" options={[...positionOptions]} label={t('position_optional')} />

          <Button
            text={t('register')}
            type="submit"
            disabled={!dirty || !isValid || isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default memo(RegisterForm);
