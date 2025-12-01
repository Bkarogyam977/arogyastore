import { serverGetAPI } from '../utils/serverApi';
import E_Shop from './estorecomponents';

async function getPracticeData() {
  try {
    const clinics = await serverGetAPI('clinics');
    return clinics.find((e) => e.name.toLowerCase().includes('online'));
  } catch (error) {
    console.error('Error fetching practice data:', error);
    return null;
  }
}

async function getCategoryProducts() {
  try {
    return await serverGetAPI('inv_category/category_statgetwo/');
  } catch (error) {
    console.error('Error fetching category products:', error);
    return [];
  }
}

async function getLatestProducts(practiceId) {
  if (!practiceId) return [];
  try {
    const products = await serverGetAPI(`inventory_item/?practice=${practiceId}&maintain_inventory=true`);
    return products.results;
  } catch (error) {
    console.error('Error fetching latest products:', error);
    return [];
  }
}

export default async function Store() {
  const practice = await getPracticeData();
  const categoryproduct = await getCategoryProducts();
  const latestproduct = practice ? await getLatestProducts(practice.id) : [];

  return (
    <E_Shop 
      practice={practice} 
      categoryproduct={categoryproduct} 
      latestproduct={latestproduct} 
    />
  );
}