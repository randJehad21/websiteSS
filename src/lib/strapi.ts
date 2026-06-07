export async function getHomepage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate=*`,
    {
      next: { revalidate: 60 },
    }
  );

  return res.json();
}