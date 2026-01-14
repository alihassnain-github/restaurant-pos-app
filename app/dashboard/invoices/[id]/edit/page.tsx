import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/invoices/edit-invoice';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices', active: false },
                    {
                        label: 'Edit Invoice',
                        href: '/dashboard/invoices/1/edit',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
