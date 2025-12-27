import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/inventory/edit-item';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Inventory', href: '/dashboard/inventory', active: false },
                    { label: 'Items', href: '/dashboard/inventory/items', active: false },
                    {
                        label: 'Edit Item',
                        href: '/dashboard/inventory/items/1/edit',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
