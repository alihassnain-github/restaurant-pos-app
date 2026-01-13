import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/supplier/edit-supplier';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Supplier', href: '/dashboard/supplier', active: false },
                    {
                        label: 'Edit Supplier',
                        href: '/dashboard/supplier/1/edit',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
