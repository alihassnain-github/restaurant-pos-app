import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/inventory/add-adjustment';

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Inventory', href: '/dashboard/inventory', active: false },
          {
            label: 'Adjustments',
            href: '/dashboard/inventory/adjustments',
            active: false,
          },
          {
            label: 'Add Stock Adjustment',
            href: '/dashboard/inventory/adjustments/add',
            active: true,
          },
        ]}
      />
      <Form />
    </>
  );
}
