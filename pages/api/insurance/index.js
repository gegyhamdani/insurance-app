import insuranceMockData from '../../../src/constant/mockdata';

export default async function handler(req, res) {
  const { body } = req;

  if (body && Object.keys(body).length === 0)
    return res.status(200).json(insuranceMockData);

  let duplicateMockData = [...insuranceMockData];

  duplicateMockData = await duplicateMockData.filter(item => {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in body) {
      if (item[key] === undefined || item[key] !== body[key]) return false;
    }
    return true;
  });

  if (!duplicateMockData) return res.status(200).json([]);

  return res.status(200).json(duplicateMockData);
}
