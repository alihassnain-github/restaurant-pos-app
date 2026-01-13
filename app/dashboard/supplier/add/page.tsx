import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/supplier/create-supplier';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Supplier', href: '/dashboard/supplier', active: false },
                    {
                        label: 'Create Supplier',
                        href: '/dashboard/supplier/add',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
