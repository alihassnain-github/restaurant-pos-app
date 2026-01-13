import Breadcrumbs from '@/components/breadcrumbs';
import CreateInvoiceForm from '@/components/ui/invoices/create-invoice';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices', active: false },
                    {
                        label: 'Create Invoice',
                        href: '/dashboard/invoices/create',
                        active: true,
                    },
                ]}
            />
            <CreateInvoiceForm />
        </>
    );
}
