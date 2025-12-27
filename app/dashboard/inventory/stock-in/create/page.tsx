import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/inventory/add-stock';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Inventory', href: '/dashboard/inventory', active: false },
                    { label: 'Stock In', href: '/dashboard/inventory/stock-in', active: false },
                    {
                        label: 'Add Stock Entry',
                        href: '/dashboard/inventory/stock-in/create',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
