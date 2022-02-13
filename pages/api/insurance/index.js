import insuranceMockData from '../../../src/constant/mockdata';

export default function handler(req, res) {
  res.status(200).json(insuranceMockData);
}
