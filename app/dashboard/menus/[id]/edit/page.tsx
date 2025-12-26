import Breadcrumbs from '@/components/breadcrumbs';

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Menus', href: '/dashboard/menus', active: false },
          {
            label: 'Edit Menu',
            href: '/dashboard/menus/1/edit',
            active: true,
          },
        ]}
      />
    </>
  );
}
