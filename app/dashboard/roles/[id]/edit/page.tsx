import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/roles/edit-role';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Roles', href: '/dashboard/roles', active: false },
                    {
                        label: 'Edit Role',
                        href: '/dashboard/roles/1/edit',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
