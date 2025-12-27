import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/inventory/create-item';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Inventory', href: '/dashboard/inventory', active: false },
                    { label: 'Items', href: '/dashboard/inventory/items', active: false },
                    {
                        label: 'Create Item',
                        href: '/dashboard/inventory/items/create',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
