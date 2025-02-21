export default function Tabs({ children, botones, Contendor = 'menu' }) {
  return (
    <>
      <Contendor>{botones}</Contendor>
      {children}
    </>
  );
}
