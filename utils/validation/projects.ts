import * as yup from 'yup';

import { UserPositions } from 'types/enums';

export const validateCreateProject = yup.object().shape({
  name: yup.string().trim().min(10).max(255).required(),
  description: yup.string().trim().min(30).max(2047).required(),
  positions: yup.array().max(Object.values(UserPositions).length),
});
