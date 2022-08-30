export default async function ({ to }) {
  let layout = to.meta?.layout || "DefaultLayout";
  let component = await import(`../../views/layouts/${layout}.vue`);
  to.meta.layoutComponent = component.default;
}
