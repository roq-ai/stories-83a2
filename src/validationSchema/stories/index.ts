import * as yup from 'yup';

export const storyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  genre: yup.string().required(),
  release_date: yup.date().required(),
  reads: yup.number().integer().required(),
  writer_id: yup.string().nullable(),
  editor_id: yup.string().nullable(),
  publisher_id: yup.string().nullable(),
});
