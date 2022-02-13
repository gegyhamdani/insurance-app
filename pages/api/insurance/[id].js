import insuranceMockData from '../../../src/constant/mockdata';

export default function insuranceHandler({ query: { id } }, res) {
  const filtered = insuranceMockData.filter(val => val.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Insurance with id: ${id} not found.` });
  }
}
